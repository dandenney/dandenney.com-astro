---
title: Playing With Relume Layouts
pubDate: '2024-07-08'
tags:
  - front-end-dev
summary: Building a layout with Greensock
socialImageFilename: og-playing-with-relume-layouts.jpg
cloudinaryThumb: posts/playing-with-relume-layouts.webp
thumb: "/posts/front-end-dev/playing-with-relume-layouts/playing-with-relume-layouts-thumb.webp"
thumbAlt: "playful illustration of a green sock being illuminated --ar 3:2"
---

I'm a huge fan of Relume and enjoy their release posts. In the [most recent one](https://www.relume.io/whats-new/july-2024-component-day), I saw [this layout](https://www.relume.io/components/layout-513 "this layout") and thought it was a lot of fun. I wanted to use it, but my personal site is in Astro, and I'm not using React or Webflow (anymore). So, I figured it was a good opportunity to learn how I'd build it. Once I did, I thought it might be cool to share it and make my own examples, like their release posts.

This layout seems so fun for anything where you have an item that needs a heavy focus on the content but has some superfluous information associated with it. I'm not sure it works as well when the extra information is important, but I have used it that way for my [most recent reviews on No Reserv-AI-tions](/no-reserv-ai-tions "most recent reviews on No Reserv-AI-tions").

## No Peeking, At First

To make it interesting, I didn't want to look at their code. I've played with similar things before, so I dove into creating it with [GSAP](https://gsap.com/docs/v3/GSAP/). I think it won't be long before you can pull off something like this without it, but I knew it would be straightforward and smooth for now. I implemented a version on my site and made my own rules for things, but I did peek at a couple of things to get them close to the original for this post.

There's nothing too complicated with the HTML/CSS, but there is one thing that I couldn't figure out how to avoid. The images seem to have to be duplicated in the HTML, once for the non-scroll version and once for the scrolling version. For accessibility, I think we'd want to keep the alt text of the non-scroll versions readable and ignore the separate list. 

I also use an unordered list, but you could achive this with just the images. I do it so that there's additional options for controlling the style of the images with a parent element. The Relume team decided it would change to the scrolling view at 768px, so I followed that.

Once the scrolling version is active, there are a couple of small considerations: you need to apply sticky to the primary content, and you need to handle the spacing between images within the containing `li`. The `sticky` need results in an extra `div`, which is lame, but I couldn't work out a way to avoid it. The space between the images I learned as I went along, adding margin to the `li` itself will result in times when no content is displayed.

## GSAP Deets

The first step is to include the main GSAP script and the ScrollTrigger one, including registering the plugin. One odd thing is that I was asking Phind and ChatGPT for these and even though they say they're updated through July, they were both multiple versions behind in their script sources. The ones in the Pen are based on using CodePen's solution for embedding third-party scripts. It's important to be up-to-date because MatchMedia was released in 3.11. 

<div class="full-to-half-bleed">

```html
<script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);
</script>
```

</div>

The two lists need to be in sync with each other, so the next step is selecting them. 

<div class="full-to-half-bleed">

```javascript
const imagesContentItems = document.querySelectorAll("#gsapImagesContent li");
const imagesItems = document.querySelectorAll("#gsapImages li");
```

</div>

The next bit is a big block and it takes some GSAP knowledge to really grok it, so I'm going to put comments in the code. The gist is that we use `matchMedia` to control what viewport size the rest should execute, and then we loop over the lists. We watch for the position of the top and bottom of the image in relation to the center of the viewport and use the index to show the content. The animation is pretty simple, it's a combo of opacity and translate, and I do it a little differently than the Relume one. I prefer the text to fade out in the inverse direction of the scroll, so I do a positive and a negative translate. The `pointer-events` is not completely necessary, but is when you want to be able to copy the text or if you would have any interactive items in the content area. 

<div class="full-to-half-bleed">

```javascript
// Check the viewport width and they handle resize checking
gsap.matchMedia().add("(min-width: 768px)", function() {
  // Loop over the list of images and apply scrollTrigger to them
  imagesItems.forEach((image, index) => {
    ScrollTrigger.create({
      trigger: image,
      // Trigger an event when the top of the image is the center of the viewport
      start: "top center",
      // Trigger an event when the bottom of the image is the center of the viewport
      end: "bottom center",
      // When the img li enters, set the styles to display the same index li in the content
      onEnter: () => {
        gsap.to(imagesContentItems\[index], { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.5 });
      },
      // When the img li exits, set the styles to hide the same index li in the content
      onLeave: () => {
        gsap.to(imagesContentItems\[index], { opacity: 0, y: -48, pointerEvents: "none", duration: 0.5 });
      },
      // When the img li enters in reverse, set the styles to display the same index li in the content
      onEnterBack: () => {
        gsap.to(imagesContentItems\[index], { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.5 });
      },
      // When the img li exits in reverse, set the styles to hide the same index li in the content
      onLeaveBack: () => {
        gsap.to(imagesContentItems\[index], { opacity: 0, y: 48, pointerEvents: "none", duration: 0.5 });
      },
    });
  });
});
```

</div>

With all that said, here is the full CodePen version. This was fun cause I wanted to make sure you can see the scrolling part if your viewport is large enough, so I played with the embed settings. I'd recommend clicking through to CodePen itselt to see it, though.  

<div class="full-to-half-bleed">

<style>
  @media screen and (min-width: 800px) {
    .cp_embed_wrapper iframe { min-height: 90dvh; }
  }
  .cp_embed_wrapper {
    margin-block-start: 1.5rem;
  }
</style>

<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="rNENLya" data-pen-title="Relume Feature Sections Layout 513" data-user="dandenney" style="height: 90dvh !important; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dandenney/pen/rNENLya">
  Relume Feature Sections Layout 513</a> by Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

</div>

So, that covers the basics, but the best part of their components is that they're mainly for the base styles and functionality. So, you could take that Webflow version, paste it in, and then customize it to your styles. My version was pretty close to the original style, but now we can have some fun with it.

## Some Ideas

The first thing that popped into mind was a series of generated images, with their corresponding prompts. I'm a big midjourney fan and I have a goto prompt that I use for testing different styles: "an evil skeleton playing lead guitar on stage". I use that consistently, so I can see how the style affects it.

A "happy little accident" happened with the gradient background. Since it's applying a large body that's scrolling, it changes with the scroll. We could avoid that by "attaching" it, but I think it's kinda cool to have it change over a small amount of items. If this was a longer list, we'd have to change it.

<div class="full-to-half-bleed">

<p class="codepen" data-height="600" data-slug-hash="LYKYxGR" data-pen-title="Relume Feature Sections Layout 513" data-user="dandenney" style="height: 90dvh !important; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dandenney/pen/LYKYxGR">
  Relume Feature Sections Layout 513</a> by Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

</div>

The content doesn't have to be images. It could Reels, Spotify tracks, Youtube Shorts, etc. Of course, as soon as I went to do this I realized my naming was shortsighted, but such is front-end work. The two hardest things in computer science are cache invalidation, naming things, and off-by-1 errors.

This one feels like a great example because the description of a short is somewhat helpful, but mainly superfluous. It takes 2 clicks to get to them in Youtube's view, for example.

If you were to shift the "full" version to a larger viewport size, I think it'd be fine to do regular Youtube embeds as well. The one thing you may want to do is add like scroll-snap or something to reduce the longer scroll for a horiztonal aspect ratio.

This one could use some focus on details to try to make it interesting looking, I just grabbed the Youtube colors and font.

<div class="full-to-half-bleed">

<p class="codepen" data-height="600" data-slug-hash="JjQjEpE" data-pen-title="Relume Feature Sections Layout 513" data-user="dandenney" style="height: 90dvh; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dandenney/pen/JjQjEpE">
  Relume Feature Sections Layout 513</a> by Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

</div>

It could also be for things that are coded. I've been digging the [gradients on MSHR](https://www.mshr.app) lately and showcased a few in this pen. I wanted to have the gradient change in the background but they're pretty advanced so it ended up being a little jarring. If I was reallllly trying to make it, I'd probably to a multi-stage transition and cover the background temporarily to avoid the circles transitioning around. While this is showing just basic divs, I figure it could be to show off small coded items as well.

<div class="full-to-half-bleed">

<p class="codepen" data-height="600" data-slug-hash="JjQjmEz" data-pen-title="Relume Feature Sections Layout 513" data-user="dandenney" style="height: 90dvh; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dandenney/pen/JjQjmEz">
  Relume Feature Sections Layout 513</a> by Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

</div>

That's a wrap for this post! I'll probably try some more because I really enjoyed the learnings behidn getting the UI to work by default and the intracacies involved with getting it to work with other styles.

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

