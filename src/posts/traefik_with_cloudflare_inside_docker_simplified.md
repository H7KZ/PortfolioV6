---
date: '2025-02-21'
title: Traefik with Cloudflare inside Docker, simplified.
author: Jan Komínek
thumbnail: /images/posts/traefik_with_cloudflare_inside_docker_simplified/thumbnail.webp
tags:
    - EN
    - Traefik
    - Cloudlfare
    - Docker
---

# Traefik with Cloudflare inside Docker, simplified.

First of all you must create **two new API tokens** inside your cloudflare dashboard.

Go to _Profile_ > _API Tokens_ > _Create Token_ > _Get Started_.

<br />

### For the first token select:

- Permissions: Zone > DNS > Edit
- Zone Resources: Include > Specific zone > your domain
- Client IP Address Filtering: Is in > your VPS IP address
- TTL: leave blank if you do not want an expiration
- Continue to summary
- Copy the key

<div class="flex justify-center items-center mb-16">
    <img src="/images/posts/traefik_with_cloudflare_inside_docker_simplified/image.webp" alt={title} class="w-3/4 object-cover" />
</div>

<br />

### For the second token:

- Permissions: Zone > Zone > Read
- Zone Resources: Include > Specific zone > your domain
- Client IP Address Filtering: Is in > your VPS IP address
- TTL: leave blank if you do not want an expiration
- Continue to summary
- Copy the key

<div class="flex justify-center items-center mb-16">
    <img src="/images/posts/traefik_with_cloudflare_inside_docker_simplified/image_2.webp" alt={title} class="w-3/4 object-cover" />
</div>

<br />

Save these keys into your desired environment variables.

Also copy out your global API key from Profile > API Tokens > Global API Key > View. Save this into your environment
variables as well.

All that it takes now to use the configuration bellow. Simply add a new DNS record to your cloudflare and traefik with
cloudflare will automatically issue a new certificate

> FIRST CERT ISSUE TAKES A FEW MINUTES TO TAKE AN EFFECT, BE PATIENT - hahaha

<br />

```yaml
networks:
    public:
        name: public
        external: true

volumes:
    letsencrypt_volume:
        name: letsencrypt_volume

services:
    traefik:
        image: traefik:v3.3

        volumes:
            - letsencrypt_volume:/letsencrypt
            - /var/run/docker.sock:/var/run/docker.sock

        environment:
            - CF_API_EMAIL=${CF_API_EMAIL}
            - CF_DNS_API_TOKEN=${CF_DNS_API_TOKEN}
            - CF_ZONE_API_TOKEN=${CF_ZONE_API_TOKEN}
            - CF_API_KEY=${CF_API_KEY}

        command:
            - --api=true
            - --api.dashboard=true

            - --log.level=INFO
            - --accesslog=true

            - --providers.docker=true
            - --providers.docker.network=public
            - --providers.docker.exposedbydefault=false

            - --entrypoints.web.address=:80
            - --entrypoints.websecure.address=:443
            - --entrypoints.web.http.redirections.entrypoint.to=https
            - --entryPoints.web.http.redirections.entrypoint.scheme=https

            - --serverstransport.insecureskipverify=true

            - --certificatesresolvers.certresolver.acme.email=${ACME_EMAIL}
            - --certificatesresolvers.certresolver.acme.storage=/letsencrypt/acme.json
            - --certificatesresolvers.certresolver.acme.dnschallenge=true
            - --certificatesresolvers.certresolver.acme.dnschallenge.provider=cloudflare

        networks:
            - public

        ports:
            - 80:80
            - 443:443

        labels:
            - traefik.enable=true

            - traefik.http.routers.mydashboard.rule=Host(`dashboard.yourdomain.com`) || Host(`www.dashboard.yourdomain.com`)
            - traefik.http.routers.mydashboard.service=api@internal

            - traefik.http.routers.mydashboard.entrypoints=websecure
            - traefik.http.routers.mydashboard.tls.certresolver=certresolver

            - traefik.http.routers.traefik.middlewares=traefik-redirect
            - traefik.http.middlewares.traefik-redirect.redirectregex.regex=^https://www\.(.*)
            - traefik.http.middlewares.traefik-redirect.redirectregex.replacement=https://$${1}

            - traefik.http.routers.mydashboard.middlewares=traefik-dashboard-auth
            - traefik.http.middlewares.traefik-dashboard-auth.basicauth.users=${DASHBOARD_USER}:${DASHBOARD_PASSWORD}

        restart: unless-stopped
```

<br />

then inside other services in docker-compose add a few labels like these:

```yaml
labels:
    - traefik.enable=true

    - traefik.http.routers.yourservice.rule=Host(`service.yourdomain.com`) || Host(`www.service.yourdomain.com`)
    - traefik.http.services.yourservice.loadbalancer.server.port=3333 # Your docker service port you wish to route traffic to

    - traefik.http.routers.yourservice.entrypoints=websecure
    - traefik.http.routers.yourservice.tls.certresolver=certresolver

    - traefik.http.routers.yourservice.middlewares=yourservice-redirect
    - traefik.http.middlewares.yourservice-redirect.redirectregex.regex=^https://www\.(.*)
    - traefik.http.middlewares.yourservice-redirect.redirectregex.replacement=https://$${1}
```

<br />

And voilá! You have a fully working Traefik Cloudflare Docker setup! See you soon!
