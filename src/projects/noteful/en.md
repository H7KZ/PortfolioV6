---
date: '2024-11-25'
order: 7
title: Noteful
thumbnail: /images/projects/noteful/thumbnail.webp
tags:
    - Personal
    - Design
---

<img src="/images/projects/noteful/thumbnail.webp" alt={title} class="w-full h-80 object-cover mb-4 rounded-lg" />

<div class="bg-neutral-900 flex flex-wrap gap-y-8 gap-x-20 justify-between px-8 py-6 rounded-lg xs:px-24">
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Project</h3>
        <p class="!m-0">{title}</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Client</h3>
        <p class="!m-0">Personal</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Category</h3>
        <p class="!m-0">Design</p>
    </div>
</div>

<br />
<br />
<br />

# Project details

Noteful is a mobile application concept designed from scratch in **Figma**, focused on personal organization without the
cognitive overhead most note apps introduce. The premise was simple: most note-taking apps try to do everything — tags,
folders, workspaces, collaboration, markdown, attachments — and end up doing none of it well for the average user who
just wants to write something down and find it again.

The design strips that back to two core workflows: **freeform notes** and **structured shopping lists**, unified under
a single surface with no mode-switching or nested navigation. The information architecture is intentionally flat —
everything lives one tap from the home screen.

The visual language follows a **soft neutral palette** with a single accent color used exclusively for interactive
states, ensuring there's no visual noise competing for attention when you're trying to focus. Typography is set large
enough to read comfortably in motion — on a commute, in a store — without zooming.

The design covers the complete user journey: onboarding, empty states, note creation and editing, list management,
search, and settings. Each screen was designed at native mobile resolution with auto-layout components, allowing the
design to be handed off directly to a developer without guesswork on spacing or behavior.

<br />
<br />
<br />

# Features & Design decisions

**Flat information architecture**: No folders, tags, or nested views. Notes and lists are surfaced immediately on open,
searchable by content. The constraint forces every design decision to serve discoverability rather than organization.

**Unified home surface**: Notes and shopping lists coexist in the same list, sorted by last modified. Switching between
types doesn't require navigating anywhere — the distinction is visual, not structural.

**Contextual empty states**: Every screen has a crafted empty state — not a generic "nothing here" message, but one
specific to what the user is about to do. Onboarding flows naturally from the first empty home screen without a
separate tutorial.

**Touch-first interactions**: Swipe gestures for archive and delete, long-press for multi-select, pull-to-refresh —
all mapped to gestures users already know from iOS and Android. No custom interaction patterns to learn.

**Auto-layout component system**: Built in Figma with auto-layout and component variants covering all interactive
states (default, pressed, disabled, loading). The system scales to new screens without duplicating styles.

<br />
<br />
<br />

# Technologies & Tools

**Figma**, Auto-layout, Component variants, Mobile UI design, UX research, Interaction design, Prototyping
