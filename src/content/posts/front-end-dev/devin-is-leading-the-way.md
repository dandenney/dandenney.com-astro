---
pubDate: "2026-10-27"
socialImageFilename: "og-devin-is-leading-the-way.jpg"
summary: "Devin has come a long way since the $500-a-month launch. Cloud agents that don't need my machine are the way I want to work, and right now Devin is leading the way."
tags:
  - front-end-dev
  - ai
thumb: "/posts/front-end-dev/devin-is-leading-the-way/devin-is-leading-the-way.webp"
thumbAlt: "Playful hand-drawn illustration of a man in a green hoodie in a grocery aisle, smiling at his phone with a basket of produce. Above the shelves, a friendly robot types at a desk on a cloud, sending checked-off pull request cards down to his phone like paper airplanes, while an inset shows his laptop closed and asleep on the kitchen table at home."
title: "Devin Is Leading the Way"
---

Devin has come a long way. When it was [introduced in March 2024](https://cognition.com/blog/introducing-devin), it was billed as "the first AI software engineer," and everyone was calling it a game changer. Access was waitlisted, and when it became [generally available in December 2024](https://cognition.com/blog/devin-generally-available) it started at $500 a month for engineering teams. That's not something I was going to trial on my own dime for side projects. We did try it at work for automated PR reviews, and it didn't meet the standard we wanted.

It's a whole new product now. [Devin 2.0](https://cognition.com/blog/devin-2) brought a $20 entry point in April 2025, and what I'm using today barely resembles what I remember from those early demos.

## What I've tried

I'm not claiming to have tried everything. I've used Devin, Tembo, and Ona, and I read a lot from people running agents on other VM-based systems. Devin is the one that's put it all together for me.

## Two weeks of it

Over the last couple of weeks I've had about 16 sessions at work and 18 on personal projects.

At work that's been 14 PRs across 10 repos. Most of it was CVE fixes across a bunch of services at once, plus a playbook for working through Dependabot updates and a few bigger UI features. I can't share any of that, but it's the kind of work that used to eat entire afternoons.

On the personal side:

- A code review of [this site](https://github.com/dandenney/dandenney.com-astro), which has been through three years and multiple versions of Astro. It fixed what I agreed with and we talked through the rest first.
- [The Possibility Factory](https://github.com/dandenney/the-possibility-factory), a greenfield idea and software factory, went from "I haven't done this with Devin yet" to deployed in an evening. I didn't touch Netlify or Turso setup beyond pasting secrets into a secure form.
- The factory's first shipped idea, [diffrails](https://www.npmjs.com/package/diffrails), a CLI for git diff guardrails, the next day.
- Workflows for my reviews, golf sessions, and betting trackers, which have turned many sessions into one-liners like "settle the Klay Thompson and Hornets bets, both won."
- A fix for recipe imports in our household app, [side-by-side](https://github.com/dandenney/side-by-side).

## My machine doesn't need to be on

This is the big one. Devin runs on its own VM, so my laptop doesn't need to be open, awake, or even with me.

I've shipped features on my personal stuff while standing in a store. I send a message from my phone, Devin does the work in its own environment, and I check the result when I'm back.

At work, I collaborate with people in the EU, so a lot of PR feedback lands while I'm asleep or before I start my day. Devin picks up that feedback and fixes it while my coworkers are still active. Instead of a full day's round trip on every comment, the loop closes in their working hours. That saves so much time.

## DeepWiki

Other than the VM, the feature I'm most excited about is [DeepWiki](https://deepwiki.com). I had put my personal site on it before, since it's free for public repos, but I couldn't do the same for anything at work. Now our work codebases are documented too, and sometimes I start there for discussions before any code gets written. Asking "how does this flow actually work?" and getting an answer with cited code is a better way to begin a conversation than me spelunking through files.

## It knows all of our repos

The last thing that's super helpful at work is that Devin knows about all of our repos. With opencode and other local tools, every repo has to be cloned to my machine and added before I can reference it. With Devin, I mention a repo and it's there. For cross-repo work like CVE sweeps, that's the difference between a task I'll do and a task I'll keep putting off.

## This is the way to work

Yes, I'm excited about Devin right now because it has all of this in a wonderful UI. But I strongly believe the most important part is the way of working, whichever product gets you there.

I want agents that run in the cloud, already know every repo, keep working after I close my laptop, and come back with a PR I can review. I'm convinced that's how we'll all work. Other tools will get there too, and the competition will be good for all of us. Right now, Devin is leading the way.

## Don't take my word for it

Try it. It's [$20 a month](https://devin.ai/pricing), which is a lot easier to justify than the $500 it used to be.

Or read [Ryan Carson's posts on X](https://x.com/ryancarson). He's been leading amazing work on the web for around 20 years, and he's running his whole company with it.
