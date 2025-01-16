---
title: Building a Lovable Tool with AI
pubDate: '2025-01-15'
tags:
  - front-end-dev
summary: Using Lovable AI to create a list app
socialImageFilename: og-building-a-lovable-tool-with-ai-thumb.jpg
cloudinaryThumb: posts/building-a-lovable-tool-with-ai.webp
thumb: >-
  /posts/front-end-dev/building-a-lovable-tool-with-ai/building-a-lovable-tool-with-ai.webp
thumbAlt: >-
  A vibrant digital painting of a heart-shaped character chiseling a web app
  design from a monolithic stone slab, each chisel stroke revealing colorful UI
  elements like buttons and icons. A backdrop of a digital-meets-ancient
  workshop merges high-tech holograms with dusty tools. Warm light and stone
  textures dominate. Created Using: Hyperrealistic textures, layered digital
  painting techniques, warm color palette, high-energy composition, intricate
  character details, whimsical fantasy style, bold contrasts, ultra-HD rendering
  --ar 3:2 --v 6.0
---

<style>h1 span { max-width: 58rem !important; }</style>

Every project starts with an idea, but turning it into something real takes time. I have something that I really want to exist, but less “want” for spending a lot of time making it. To get started, we had a brainstorming session in Excalidraw, sketching out the sections and behaviors for the initial lists. It wasn’t about creating a perfect spec, it was about laying a foundation for what [The Pragmatic Programmer](https://blog.pragmaticengineer.com/the-product-minded-engineer/) would call a "minimum lovable product." Something simple, but functional and worth using.

<img class="full-bleed" src="/posts/front-end-dev/building-a-lovable-tool-with-ai/excalidraw.svg" alt="Screenshot of excalidraw with a UI and notes" width="1008" />

As usual, I wanted to combine the time spent with this with learning something new. However, this time it wasn’t furthering my technical implementation skills. I want to learn how good the generative AI tools are getting and my ability to bend one to my will. For this, I chose [Lovable AI](https://lovable.dev/). There are some other options, but this one got my attention over them and I’m so glad it did.

Here’s my initial prompt, based on [learning from a video](https://youtu.be/z8R7uWeSAbg?si=c1sBtpxLg7KOHRza) that you should go pretty deep with your initial prompt for starting a Lovable project.

> A collaborative set of lists, with email authentication and data storage. There are multiple types of lists, with staggered features. The grocery list is like a todo list, plain text entry, checkboxes, but the checked items don't go to the archive until a button is pushed. The Shopping list is either plain text or input by URL. Data is unfurled from the URL and populated for each item. The fields can be edited manually and tags can be added. Tags should pull from a list and be able to be added in place. Watch and Read lists are the same as Shopping. Local would be the same as them, but with the addition of a date. Recipes will have all of the same features, with the addition of notes. All items should only ever be archived, not deleted.

My first prompt got the ball rolling and generated an initial shell of the app. The structure was there, but the functionality wasn’t even close to what I described. It’s fascinating, really. AI doesn’t “think,” but I can’t help wondering how it decides where to stop. What’s the cutoff for “that’s good enough” in its world?

This is where it drew the initial line:

> I'll help you create a collaborative list management application with authentication and different list types. Let's break this down into a manageable first version that looks beautiful and works well.
> Design Inspiration:
> We'll draw inspiration from apps like Notion and Linear for their clean, minimal interfaceUse a sidebar navigation for different list typesCards for list items with smooth hover effectsSubtle animations for interactionsFeatures for V1:\Email Authentication\
> Grocery List (complete feature set)\
> Shopping List (basic URL unfurling)\
> Basic tag system\
> Archive functionality\
> \
> Clean, modern UI with responsive design\
> \
> Colors & Style:
> Primary: Slate blues (#334155)\
> Secondary: Cool grays (#94a3b8)\
> Accent: Soft teal (#0d9488)\
> Background: Clean white/very light graySubtle shadows and rounded corners\
> Smooth transitions for interactions\
> Let's implement this foundation:

A second prompt got me closer. Basic text items and link items were working, though the output for links still needed refinement. The prompts to get there are when I hit my first bump, as it was on the struggle bus with competing types from `@microlink/mql` and `HTTPResponseRaw`. I burned up my daily credits as it went in circles, breaking the build to fix one in rotation. I was able to talk it off the ledge with these two prompts:

> Each time you fix the `@microlink/mql` type, you break the `HTTPResponseRaw` type. Please evaluate the needs of both and create a solution. I really want a successful build this time

And then:

> Your fix seems to have conflicting types. Are we sure these packages are compatible?

I tried congratulating it when it got the build to pass and all was working, but I had hit my daily limit. That whole process was under 20 minutes and I was already pretty excited, but decided to wait until the reset to keep going. At this point, it felt like the concept had been proofed. Is that how you say that in past tense? ¯\\\_(ツ)\_/¯

## From Proof of Concept to Working App

I went to try the next day at lunch and found that your daily limits roll over at midnight UTC, which is like 6 p.m. for me. In the evening, I made a good deal of progress with my prompts up until the limit and I was excited enough to upgrade. I spent just about 2 hours prompting it into what was a usable app.

While I’m extremely pleased with the current state and wowed by the fact that I have been able to get a working app without writing a single line of code, it’s not without its challenges. I am not sure that someone without experience with TypeScript and shared React components would be able to have gotten to where I am now. Maybe, but definitely not in the same time.

Knowing the gotcha with the type mismatches comes from my agonizing experience with TypeScript. It wasn’t working its way out, so that may have been a deal breaker for some folks. The back and forth with leaking features into others and breaking existing functionality when building new parts could be mitigated with continual QA. Someone would just have to know to double check semi-related items to ensure they’re still working as expected.

I don’t want the small issues to detract from how seriously amazing this is. In just under 3 hours, I went from having an idea to having that idea working in the browser. It’s on a real URL, saved on my home screen on my phone, and we’re collaborating on lists that are saved in a database.

<img class="full-to-half-bleed" src="/posts/front-end-dev/building-a-lovable-tool-with-ai/screenshot-groceries.webp" alt="Screenshot of a UI with a grocery list" />

<img class="full-to-half-bleed" src="/posts/front-end-dev/building-a-lovable-tool-with-ai/screenshot-local.webp" alt="Screenshot of a UI with a grocery list" />

## The Deets

This is a Lovable project and it’s public, so you’re able to [view the project on their site](https://lovable.dev/projects/f793ea92-de5c-4d0d-a9b8-5ec600cbf7bf). You can export the code to GitHub and it pushes commits with each update, so you can [check out the repo]() if you’re curious about the code. To be fair, it has offered to refactor a few things a couple of times and I haven’t given it the opportunity yet. I can’t share my exact app because I had it build it in a way that everyone who is authenticated can CRUD every item in every list. It seemed like overkill to implement a groups and permissions system when this is something intended for just the two of us.

## Viable vs. Lovable

At this moment, the app would maybe be a minimum viable product if I was trying it out from someone else. We can enter things into each list, archive items, view the archives, and links are populating data that we can then edit. The UI is clean and usable, but not polished. It's already better than some of the various list apps I tried before deciding to build one. However, I already love it cause it's mine. I haven't written a line of code, but I feel ownership and I'm popping in commands whenever I get a moment to improve it. I will now work on making it lovable and will go as far as I possibly can without touching any code. I’m greatly enjoying having my robot friend do the work.

Beyond the base functionality, I’m also interested in adding AI functionality to it. I’ve seen how to do that pretty easy with v0, but I’m not sure how that will work in Lovable. I see potential for adding some small niceties like populating the grocery list from a recipe, populating some restaurant data when we save them, etc.

As for Lovable, it is absolutely lovable. There are some occasional oddities with authentication and there are challenges with prompting an LLM to build an app for you, but I’m hooked. I’ll get this project to being lovable and then start another.
