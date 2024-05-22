---
title: Adding TinaCMS To My Astro Site
pubDate: '2024-05-21'
tags:
  - front-end-dev
summary: Quick and easy setup with some learning
socialImageFilename: og-adding-tina-to-my-astro-site-thumb.jpg
cloudinaryThumb: posts/adding-tina-to-my-astro-site-thumb.webp
thumb: >-
  /posts/front-end-dev/adding-tinacms-to-my-astro-site/adding-tina-to-my-astro-site-thumb.webp
thumbAlt: >-
  napoleon dynamite and tina the llama standing in a field, a rocket is flying
  in the sky above them --ar 3:2
---

I've been wanting to add a CMS to my site for a while, but I'm super picky about it. The pickiness is weird since I rebuild/redesign my site on a whim whenever I'm learning new technologies, or I like a template, but I have one rule for the last 4 or 5 times. The site must be built into a folder of files that work. For that reason, I used 11ty for a few years and recently switched to Astro to learn something new with the same result.

## Why TinaCMS

I was intrigued by Forestry.io originally during my Gatsby era, but I didn't get around to installing it before it evolved to Tina, and I wanted out of Gatsby. It has resurfaced for me recently since [Cassidy shared that she uses it](https://cassidoo.co/post/blog-website-baby/ "Cassidoo shared that she uses it"), and there was news that the [team got acqui-hired](https://tina.io/blog/Tina-Joins-SSW/ "team got acqui-hired"). Those things can be scary, but this one seems very positive. Plus, I have very little to lose because of the way that Tina works.

It is git-based, so for me, it's mainly a UI for adding markdown files to my repo. Everything still results in a file that gets built into HTML in a folder. I'll never have a scenario where it shuts down, and I have to get blog posts out of a database.

## Getting Started

I watched a [video on youtube](https://tina.io/blog/Tina-Joins-SSW/ "video on youtube") today and then decided to give it a try tonight. I [jumped into the docs](https://tina.io/docs/frameworks/astro/), and it was super easy. I think I installed it and saw my Blips in the UI in under 10 minutes. (I chose them since they have the least amount of front matter.)

I did mess up one thing, where I didn't update the path to my blips since I use a src folder. I was confused for a second, wondering if maybe it would only recognize new files, but fixing that got this view. It's so cool! 

![](/posts/front-end-dev/adding-tinacms-to-my-astro-site/screenshot-blips.webp)

I also had a few files that I had to fix because the front matter was a mismatch. (Yes, I refuse to use types when I'm not being paid 😜)

## Workflow Changes

I'm writing my first post in a UI on here since my WordPress days. I think I hooked up Netlify CMS for a bit, but I only attempted to write an entry from my phone once. The biggest perk for that is Grammarly is here to help me write good. (Take that, Grammarly!)

The not-so-fun part is that this is my third attempt at writing this post. I didn't get too far the first time, but I realized I had copy pasta'd the same input labels a few times. I fixed it, and the hot reload wiped the content because I hadn't saved it. I then had some one-off error the first time I tried using the Rich Text UI for a link.

So, I'll need to make some changes so that I can save early and often:

* **Not likely**\
  Start each post by creating and saving all of the images, since they are required
* **Slightly more likely**\
  Make nothing except the title and date required
* **Better idea, but less likely**\
  Make defaults for each item that I update after
* **Worst idea, but most likely**\
  Save a single letter in each image path until I have the images ready

Tina has the option to use an image as a type, so the best option will be to figure out a way to use that and ensure that it saves everything in a way that's easy to continue if I no longer have Tina.

I'll also need to get used to the UI a bit. I learned after doing a few that I don't have to use the UI for links, which is a big win. If you do use it, it wants you to put the title in the UI, but I usually write the text and then link it. I did a few before trying the thing where you just paste a URL over the text and it worked automagically!

<img class="full-to-half-bleed" height="534" src="/posts/front-end-dev/adding-tinacms-to-my-astro-site/screenshot-code.webp" alt="Screenshot of the TinaCMS UI with custom code in the rich text" width="1008" />

Plus, I usually do some custom stuff in my posts, so it'll take a little getting used to using the code from the UI. The awesome thing is that I can mostly just use this the way that I use Notion or Grammarly directly to write and then fix in markdown. Since it's just creating a markdown file, I can open my editor to add funky things as needed. (Or, flip to the markdown editor in the tool panel.)

I'm super into this and can't wait to add some entries to [no-reserv-ai-tions](/no-reserv-ai-tions "no-reserv-ai-tions") with it. They're a little heavier on the data entry side and I think I'll prefer the UI over markdown directly for those.
