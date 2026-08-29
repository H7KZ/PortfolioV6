---
date: '2025-09-15'
order: 0
title: Kreditožrouti
thumbnail: /images/projects/kreditozrouti/thumbnail.svg
tags:
    - Own Product
    - Fullstack
    - DevOps
lede: 'A course scheduler for VŠE students, live at kreditozrouti.cz. I created it and run it alone, from the InSIS scraping to the deployments. The numbers are modest on purpose: it quietly saves a few students their semester, every day.'
client: 'Own product'
role: 'Creator & Sole Maintainer'
timeline: 'Sep 2025 – present'
sector: 'EdTech · Higher Education'
impact:
    - label: 'Students'
      value: '300+'
      sub: 'Have used it to date'
    - label: 'Onboarding'
      value: '43%'
      sub: 'Complete the wizard'
    - label: 'Status'
      value: 'Live'
      sub: 'Monitored, auto-deployed'
contributions:
    - num: '01'
      title: 'InSIS scraping and scheduling'
      body: 'Scrapes public InSIS course data and puts better search and scheduling on top of it than the university system offers, so a student can fill a gap in their timetable in seconds. The name is a joke that means something: when a timetable is set badly, courses eat your ECTS credits. Credit-gobblers.'
    - num: '02'
      title: 'From hackathon to product'
      body: 'Born at the 4FIS Mini Hackathon on live scraped data, a working MVP in 3.5 hours, first place. When the course that later hosted it ended, I picked it up and carried it alone to a finished product rather than a demo.'
    - num: '03'
      title: 'Production infrastructure'
      body: 'Runs today with monitoring, alerting and automatic deployments. Vue on the front, Node with Redis and BullMQ workers behind it, containerized with Docker and Traefik.'
    - num: '04'
      title: 'Bachelor thesis'
      body: 'The InSIS work led directly to my bachelor thesis: an MCP server over InSIS data, hosted on university servers under an official domain.'
stack:
    - 'TypeScript'
    - 'Vue.js'
    - 'Node.js'
    - 'Redis'
    - 'BullMQ'
    - 'Docker'
    - 'Traefik'
    - 'CI/CD'
    - 'Git'
gallery:
    - /images/projects/kreditozrouti/thumbnail.svg
---

Kreditožrouti is a course scheduler for students at the Prague University of Economics and Business. It scrapes public InSIS course data and puts a faster, clearer layer of search and scheduling on top, so a student can close a gap in their timetable in seconds instead of clicking through the university system.

It was never a startup, and the metrics are modest on purpose: a few hundred students, a handful of them every day, found mostly through Discord, Facebook and word of mouth. It is a tool that quietly saves a few students their semester, every day. With both of my client engagements now finished, it is also the one thing on my record that is live, maintained, and still gaining users, which is exactly why it matters.
