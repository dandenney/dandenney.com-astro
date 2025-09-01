---
summary: Playing with something coming soon 
title: Fun With CSS Functions
pubDate: '2025-09-01'
---

I rarely play with platform features that have minimal support. I read articles so that I know what's coming, but then I typically wait until they land and I have a need to use them. However, this weekend I was intrigued by Una's article [5 Useful CSS functions using the new @function rule](https://una.im/5-css-functions). It reminded me of my SASS era (I still remember to use all caps), which was a fun time of CSS and front-end in general. 

Then, I was reading Reddit and I saw this post where someone was asking about great game sites that they could practice on for building websites. I like to link things, but I can't find it anymore so either I was experiencing a Delerium Tremen or the post got deleted. There was one site that had this awesome style and I wanted to know how they did it. This ended up being a fiasco because I opened it by clicking in the Reddit app so there was no browser history. I found it with Perplexity searching the top 100 games that start with 'C' in the last five years, but I digress. The [Calisto](https://callisto.sds.com/en-us) site has these cool accents on the corners of items and I was curious how they implemented it. I have built something in the past and I wanted to compare notes. 

## Playing in a Pen

After I reviewed their implementation, I thought I wanted to play with it a bit to consider what the most efficient way of building something like this. In my previous scenario, I did something very similar to theirs, but this time I figured we could get it down to two elements with pseudo elements, instead of four elements and a container. The container is a personal preference, but it can either be three or five elements. 

A little aha! moment hit and I realized that this would be the kind of thing that would be great for a function. We want a couple of scenarios and repeated behaviors, which can all be done programmatically. I'm not sure that this is a great function, but it works. It'll be interesting to start building these in the future.

<div class="full-to-half-bleed mt-8">

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YPyJbYd" data-pen-title="Untitled" data-user="dandenney" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dandenney/pen/YPyJbYd">
  Untitled</a> by Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

</div>