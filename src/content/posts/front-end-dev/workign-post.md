---
pubDate: "2025-04-30"
socialImageFilename: "og-css-scrolling-images.jpg"
summary: "A line of CSS to make images scroll"
tags:
  - front-end-dev
cloudinaryThumb: "posts/css-scrolling-images.png"
thumb: "/posts/front-end-dev/css-scrolling-images/css-scrolling-images-thumb.webp"
thumbAlt: "a playful illustration of rows and rows of photos of various food items, with the illustion of motion --ar 3:2"
title: "Working Post"
---

I have been getting more exposure to custom rounding applied to UI elements,
with some of the beautiful work featured in [Animations.dev](http: //Animations.dev) and in browsing a lot of mobile UI for inspiration. I was browsing Pinterest, as one does, and imagined the terror that I would have if I was handed a Figma to implement that [looked like this](https://www.pinterest.com/pin/213709944813086292). Then, I realized it's a real site: [https://mode.com](https://mode.com/)

Overall, it's a striking design on mobile and desktop. Tablet sizes struggle a bit, but I think that's more about not focusing on them than it is that it was hard to pull off. It seems like mostly spacing issues.

## I wanna make it

So now, I need to know how to do it! It’s been a loooooong time since I just grabbed a site and reverse engineered it to figure things out, but that is how I cut my teeth back in the day. 

In playing around with dev tools and looking at the styles, it wasn’t clear to me how they pulled off some of the overlaps. I was expecting some complicated CSS Grid system and clip-path or SVG masks, but it seems like a lot of flexbox and inline-block. 

## But I also wanna improve it a little

Overall it looks amazing, but the semantics are a little rough. The h1 is splt into 3 pieces and ends up being 3 h1 elements. So I’d like to see if it’s possible to avoid that and learn some new techniques. 

## Mobile-first, of course

The overlay of a smaller image over a larger one is pretty straight forward, except for that inverted border-radius on the larger image. In their version, they are using some interesting techniques. The primary photo is duplicated and then put into sized divs with object-fit: cover;. I’m pretty impressed that I can never make the photo get out of sync, their math is mathing. For having the SVG animations spaced on the top, they’re using absolute positioning. 

Let’s get a basic thing working first and then improve upon it. I’m leaning towards CSS Grid here, because I know I can have those two elements overlay each other and and I think we may want more of that behavior as we move up to the desktop version as well.

```css
@media (prefers-reduced-motion: no-preference) {
  ...
}
```

<style>
  .preview-one {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-one main {
    padding: 16px;
  }

  .preview-one section {
    display: grid;
  }

  .preview-one .media-primary,
  .preview-one .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-one .media-primary {
    aspect-ratio: 346 / 300;
    background-color: #000;
    clip-path: url(#clip-rounded-preview-one);
    max-width: 100%;
  }

  .preview-one .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #555;
    border-radius: 12px;
    justify-self: end;
    transform: translateX(-3px);
    width: 35%;
  }
</style>

<div class="full-bleed">
<div class="browser-preview preview-one">
  <main>
    <section>
      <div class="media-primary">
        <!-- Secondary media will go here -->
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="clip-rounded-preview-one" clipPathUnits="objectBoundingBox">
        <path d="M0.017,0H0.575A0.017,0.017 0,0,1 0.592,0.02L0.592,0.43A0.017,0.017 0,0,0 0.61,0.45L0.975,0.45A0.017,0.017 0,0,1 0.992,0.47V0.98A0.017,0.017 0,0,1 0.975,1H0.017A0.017,0.017 0,0,1 0,0.98V0.02A0.017,0.017 0,0,1 0.017,0Z" />
      </clipPath>
    </defs>
  </svg>
</div>
</div>