---
title: "001 - Awesome Design MD"
pubDate: '2026-04-06'
summary: Trying out some design.md files for generating UI
githubPath: 'https://github.com/dandenney/artificially-intelligent'
tags: []
---

It seemed to be `DESIGN.md` day. Early on, I saw a tweet and LinkedIn post from [Meng To](https://x.com/MengTo/status/2041141824283365521?s=20) on creating a tool to generate a DESIGN.md file from a URL. I was hoping to try the DataCamp site, but it seems like our bot detector blocked it. I tried one to get the vibe and it worked pretty well. I'm a fan of his Aura project and that's what it's built into.

Later, I came across [awesome-design-md](https://github.com/VoltAgent/awesome-design-md), which basically did that for a bunch of popular sites. I've been wanting to document my experiements, so I figured this was a good time to start.

I used this prompt to try versions from Cal.com and Stripe.

<pre class="prompt">
Use the @DESIGN.md to create a hero section for DataCamp. The hero should focus on learnind data and AI skills, where people can get started for free, but also that there are options for teams.

The original copy is "Learn data and AI skills. Master in-demand skills in Python, ChatGPT, Power BI, and more through interactive courses, real-world projects, and industry recognized certifications" with two CTAs: "Start Learning for Free" and "DataCamp for Business" and a sign-up form.

Be creative, decide whether or not to use the copy, ctas, form, etc. The goal is to either convert someone right away or encourage them to learn more 
</pre>

Claude seemed to have a pattern mind for the content in this case, but you can see how the details in the `DESIGN.md` impact the result

## Cal
![Screenshot of a hero in the style of cal.com](/experiments/001-awesome-design-md/cal-screenshot.webp)

## Stripe
![Screenshot of a hero in the style of Stripe](/experiments/001-awesome-design-md/stripe-screenshot.webp)

There's some power here, for sure. I need to find a way to get the DataCamp site into one and then try pulling my personal site into Aura. 