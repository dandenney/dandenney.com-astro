---
title: "Read Later, Meet Stash"
summary: "Building my own tool for queuing and saving"
pubDate: "2026-05-02"
tags:
  - front-end-dev
socialImageFilename: og-building-a-lovable-tool-with-ai-thumb.jpg
thumb: "/posts/front-end-dev/read-later-meet-stash/read-later-meet-stash.webp"
thumbAlt: "Playful illustration of a thief, stealing articles from the web and stashing them, landscape orientation"
cloudinaryThumb: "posts/read-later-meet-stash.png"
---

Back in 2023, I declared "read later" bankruptcy as Pocket changed its account structure. I moved to Notion and it has been working pretty well, at least for the saving things part. The great thing is that it's very easy to save from iOS because Notion is an app and there are excellent browser extensions for saving links. 

The less than ideal part is that Notion isn't part of my day-to-day. I've tried a few times to start my day in it, but it just doesn't happen. So, while I have read and watched hundreds or probably over a thousand items since the switch, I still have a current "read later" debt of 396 items.

## Enter Stash

I'm thinking that maybe if I build the tool behind it, I will focus on using it. So, Stash is a little AI-generated app, using Next and Supabase. I'm hosting it on Vercel and this is another one of my little apps that I've shipped. 

<img class="full-to-half-bleed" src="/posts/front-end-dev/read-later-meet-stash/screenshot-stash.webp" alt="Screenshot of links to read" />

It works exactly how I want it to: we created an extension so I can add links from that or I can use my Discord with an agent. Claude's API does some automated tagging which may help for search in the future, but for now it's just a bonus. 

## A Simple Flow

I add a link and it goes in The Score, a lighthearted play on capers. The Score is positioned on the right on desktop, with a little different hierarchy. Items output a meta image, and take up slightly more space. Stashing it removes it from there and keeps it in the stash for later reference. This is super basic stuff, but I do prefer it to what I was doing in Notion. That same process took a few extra clicks, to move something from "Read Later" to "Library". Also, I'm always in a browser, so it's natural for me to open the page and read a link. 

## Automation FTW

The bonus part of this is that I have been doing an automated sharing and manual archiving process. Each item that ends up in my Notion "Library" was getting added to my "Recent Finds" on this site at build time. On or around the first of the month, I'd manually grab the links and move them to static data, then add an "archived" item to all of the items from the previous month. It was a 5 minute process, but it was something that I would have to think about and do.

<img class="full-to-half-bleed" src="/posts/front-end-dev/read-later-meet-stash/screenshot-recent-finds.webp" alt="Screenshot of my read later section" />

Part of the build was to create an API to handle this. Links that I stash are automatically added and we set up a Claude automation to handle the archiving.

## Building Is So Much Fun

I love this stuff. I get to build things that I enjoy, while learning how to build things in this new way. I haven't touched a line of code in this app, but I still feel the ownership. One of the more interesting shifts is that for years, ideas would become domain name purchases. Purchasing a domain was the way I'd try to motivate myself to build the project. Now, I have a series of built projects that I use that have no domain at all. It's the time of personal software and I'm loving it.

Bye for now, I want to go read that article in The Score, so that I get out of debt.