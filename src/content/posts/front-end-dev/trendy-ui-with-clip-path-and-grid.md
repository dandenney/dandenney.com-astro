---
pubDate: "2025-04-30"
socialImageFilename: "og-trendy-ui-with-clip-path-and-grid.jpg"
summary: "A line of CSS to make images scroll"
tags:
  - front-end-dev
cloudinaryThumb: "posts/trendy-ui-with-clip-path-and-grid.png"
thumb: "/posts/front-end-dev/trendy-ui-with-clip-path-and-grid/trendy-ui-with-clip-path-and-grid-thumb.webp"
thumbAlt: "a fun illustration of a trendy UI with rounded shapes, large typography, CSS grid pattern --ar 3:2"
title: "Trendy UI With Clip-Path and Grid"
---

I have been getting more exposure to custom rounding applied to UI elements,
with some of the beautiful work featured in [Animations.dev](http://Animations.dev) and in browsing a lot of mobile UI for inspiration. I was browsing Pinterest, as one does, and imagined the terror that I would have if I was handed a Figma to implement that [looked like this](https://www.pinterest.com/pin/213709944813086292). Then, I realized it's a real site: [mode.com](https://mode.com)

Overall, it's a striking design on mobile and desktop. Tablet sizes struggle a bit, but I think that's more about not focusing on them than it is that it was hard to pull off. It seems like mostly spacing issues.

## I wanna make it

So now, I need to know how to do it! It's been a loooooong time since I just grabbed a site and reverse engineered it to figure things out, but that is how I cut my teeth back in the day. 

In playing around with dev tools and looking at the styles, it wasn't clear to me how they pulled off some of the overlaps. I was expecting some complicated CSS Grid system and clip-path or SVG masks, but it seems like a lot of flexbox and inline-block. 

(In hindsight, I completely understand. It's a tremendous amount of work to try to make it responsive and maintain the look. Any letter change would require changing CSS values.)

## But I also wanna modernize it a little

Overall it looks amazing, but the semantics are a little rough. The h1 is splt into 3 pieces and ends up being 3 h1 elements. So I'd like to see if it's possible to avoid that and learn some new techniques. I also want to learn what is and isn't doable with clip-path.

## Mobile-first, of course

The overlay of a smaller image over a larger one is pretty straight forward, except for that inverted border-radius on the larger image. In their version, they are using some interesting techniques. The primary photo is duplicated and then put into sized divs with object-fit: cover;. I'm pretty impressed that I can never make the photo get out of sync, their math is mathing. For having the SVG animations spaced on the top, they're using absolute positioning. 

Let's get a basic thing working first and then improve upon it. I'm leaning towards CSS Grid here, because I know I can have those two elements overlay each other and and I think we may want more of that behavior as we move up to the desktop version as well.

I don't want to try to create an exact replica of this, so I generated an image and pulles some colors from it.

The pen has all the HTML and CSS, but here I'm going to focus on the key parts. First things first, we'll stack two items on top of each other. I always use Sarah Drasner's [CSS Grid Generator](https://cssgrid-generator.netlify.app) for these kinds of things.

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
.media-primary,
.media-secondary {
  grid-area: 1 / 1 / 2 / 2;
}

.media-primary,
.media-secondary {
  grid-area: 1 / 1 / 2 / 2;
}

.media-primary {
  aspect-ratio: 346 / 300;
  background-color: ;
  max-width: 100%;
}

.media-primary img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.media-secondary {
  aspect-ratio: 122 / 119;
  background-color: #465e5f;
  border-radius: 12px;
  justify-self: end;
  width: 35%;
}
```

</div><!-- Close Code UI -->

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<main>
  <section>
    <div class="media-primary">
      <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
    </div>
    <figure class="media-secondary">
      <!-- Secondary media will go here -->
    </figure>
  </section>
</main>
```

</div><!-- Close Code UI -->

<style>
  .full-bleed:last-of-type {
    margin-block-start: 1.5rem;
  }

  .preview-one {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-one main {
    background-color: #161617;
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
    max-width: 100%;
  }

  .preview-one .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-one .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }
</style>

<p class="mobile-heads-up">
  The demos are best viewed on a screen at least 1200px wide, on mobile they're going to appear the same each time from here.
</p>

<div class="full-bleed">
<div class="browser-preview preview-one">
  <main>
    <section>
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
    </section>
  </main>
</div>
</div>

## Clip it up, Becky, clip it upppp

I found some awesome resources around clip-path recently. Of course, there's the [OG generator](https://bennettfeely.com/clippy), but it isn't very easy to customize for complex rounded shapes. There's this awesome [post on using gradients](https://css-tip.com/inverted-radius), but this is what I really wanted and found it on Reddit: [Corner Inverter](https://corner-inverter.douiri.org). 

Using the pixel values of the real thing, I created a shape and exported the code. It offers a few options, but I really wanted to use `clip-path`. Here's what it gave me:

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
clip-path: path("M12,0H192A12,12 0,0,1 204,12L204,127A12,12 0,0,0 216,139L334,139A12,12 0,0,1 346,151V288A12,12 0,0,1 334,300H12A12,12 0,0,1 0,288V12A12,12 0,0,1 12,0Z");
```

</div><!-- Close Code UI -->

Technically speaking, that works, but it's not responsive. A little conversation with ChatGPT helped me learn what we need to do for a responsive approach. We need to make a SVG with the `clipPath` attribute and then use that as a responsive SVG that we're applying as the value of `clip-path`. Yo dawg, I heard you like clip-path...

There's a formula for the conversion, but it's complex. I'd suggest using some tool for it, but I have a ChatGPT thread I've been using for this. 

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<main>
  <section>
    <div class="media-primary">
      <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
    </div>
    <figure class="media-secondary">
      <!-- Secondary media will go here -->
    </figure>
  </section>
</main>

<svg width="0" height="0">
  <defs>
    <clipPath id="preview-two-clip-path" clipPathUnits="objectBoundingBox">
      <path d="M0.035,0 H0.555 A0.035,0.035 0,0,1 0.59,0.04 V0.423 A0.035,0.035 0,0,0 0.625,0.463 H0.965 A0.035,0.035 0,0,1 1.000,0.503 V0.96 A0.035,0.035 0,0,1 0.965,1 H0.035 A0.035,0.035 0,0,1 0,0.96 V0.04 A0.035,0.035 0,0,1 0.035,0 Z" />
    </clipPath>
  </defs>
</svg>

```

</div><!-- Close Code UI -->

With that HTML, I can then apply that `clip-path` in the CSS. 

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
.media-primary {
  aspect-ratio: 346 / 300
  clip-path: url(#preview-two-clip-path);
  max-width: 100%;
}
```

</div><!-- Close Code UI -->

<style>
  .preview-two {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-two main {
    background-color: #161617;
    padding: 16px;
  }

  .preview-two section {
    display: grid;
  }

  .preview-two .media-primary,
  .preview-two .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-two .media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#preview-two-clip-path);
    max-width: 100%;
  }

  .preview-two .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-two .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }
</style>

<div class="full-bleed">
<div class="browser-preview preview-two">
  <main>
    <section>
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-two-clip-path" clipPathUnits="objectBoundingBox">
        <path d="
        M0.035,0
        H0.555
        A0.035,0.035 0,0,1 0.59,0.04
        V0.423
        A0.035,0.035 0,0,0 0.625,0.463
        H0.965
        A0.035,0.035 0,0,1 1.000,0.503
        V0.96
        A0.035,0.035 0,0,1 0.965,1
        H0.035
        A0.035,0.035 0,0,1 0,0.96
        V0.04
        A0.035,0.035 0,0,1 0.035,0
        Z" />
      </clipPath>
    </defs>
  </svg>

</div>
</div>

There's some copy and CTAs in this area that we need to add in. I know that I'm going to end up using them in a Grid layout, so I'm going to wrap some extra `div`s around parts. They're not necessary for the mobile layout, so no new important CSS. I might as well add some classes to select them by as well.

Back to the generator for another clip-path for the heading. I thought it could be a pseudo element at first glance, but the side thingy is not equidistant from the edge of the rest. 

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<section>
  <div class="media-primary">
    <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
  </div>
  <figure class="media-secondary">
    <!-- Secondary media will go here -->
  </figure>
  <div class="text-content">
    <h1 class="text-heading">
      New knowledge built from shared work
    </h1>
    <div class="text-body">  
      <p>
        We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
      </p>
      <div class="ctas">
        <a class="cta cta-primary" href="https://mode.com">View the original</a>
        <a class="cta cta-secondary href="https://codepen.io/collection/KwKNaN">
          CodePen Collection
        </a>
      </div>
    </div>
  </div>
</section>

<svg width="0" height="0">
  <defs>
    <clipPath id="clip-heading" clipPathUnits="objectBoundingBox">
      <path d="
        M0.044,0 H0.852 A0.037,0.05 0,0,1 0.889,0.05 V0.25 A0.037,0.05 0,0,0 0.926,0.30 H0.963 A0.037,0.05 0,0,1 1.000,0.35 V0.70 A0.037,0.05 0,0,1 0.963,0.75 H0.926 A0.037,0.05 0,0,0 0.889,0.80 V0.95 A0.037,0.05 0,0,1 0.852,1 H0.044 A0.044,0.06 0,0,1 0,0.94 V0.06 A0.044,0.06 0,0,1 0.044,0 Z" />
    </clipPath>
  </defs>
</svg>

```

</div><!-- Close Code UI -->

<style>
  .preview-four {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-four main {
    background-color: #15272a;
    padding: 16px;
  }

  .preview-four section {
    display: grid;
  }

  .preview-four .media-primary,
  .preview-four .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-four .media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#preview-four-clip-path);
    position: relative;
  }

  .preview-four .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-four .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }

  .preview-four .media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-four .text-heading {
    background-color: #b6d2d3;
    border-radius: 0.75rem;
    clip-path: url(#clip-heading);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    max-inline-size: 85%;
    padding: 1rem 3rem 1rem 1rem;
    position: relative;
  }

  .preview-four .text-body {
    color: #fff;
    margin-block-start: 1.5rem;
  }

  .preview-four .ctas {
    display: flex;
    gap: 1rem;
    margin-block-start: 1.5rem;
  }

  .preview-four .cta {
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .preview-four .cta-primary {
    background-color: #fff;
    color: #15272a;
  }

  .preview-four .cta-secondary {
    color: #ffffff;
  }

</style>

<div class="full-bleed">
<div class="browser-preview preview-four">
  <main>
    <section class="content-container">
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
      <div class="text-content">
        <h1 class="text-heading">
          New knowledge built from shared work
        </h1>
        <div class="text-body">  
          <div class="text-body-container">
            <p>
              We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
            </p>
            <div class="ctas">
              <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
              <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
                CodePen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-four-clip-path" clipPathUnits="objectBoundingBox">
        <path d="
        M0.035,0
        H0.555
        A0.035,0.035 0,0,1 0.59,0.04
        V0.423
        A0.035,0.035 0,0,0 0.625,0.463
        H0.965
        A0.035,0.035 0,0,1 1.000,0.503
        V0.96
        A0.035,0.035 0,0,1 0.965,1
        H0.035
        A0.035,0.035 0,0,1 0,0.96
        V0.04
        A0.035,0.035 0,0,1 0.035,0
        Z" />
      </clipPath>
    </defs>
  </svg>

  <svg width="0" height="0">
    <defs>
      <clipPath id="clip-heading" clipPathUnits="objectBoundingBox">
        <path d="
          M0.044,0 H0.852 A0.037,0.05 0,0,1 0.889,0.05 V0.25 A0.037,0.05 0,0,0 0.926,0.30 H0.963 A0.037,0.05 0,0,1 1.000,0.35 V0.70 A0.037,0.05 0,0,1 0.963,0.75 H0.926 A0.037,0.05 0,0,0 0.889,0.80 V0.95 A0.037,0.05 0,0,1 0.852,1 H0.044 A0.044,0.06 0,0,1 0,0.94 V0.06 A0.044,0.06 0,0,1 0.044,0 Z" />
      </clipPath>
    </defs>
  </svg>

</div>
</div>

## Shifting to the full layout

The original version shifts to the full layout at 768px, but I think maybe this part got skipped during QA in the original. Nothing major, but there's some content overlaps and wrapping issues that we'll try to avoid with this version.

First things first, we're going to stack our text content on top of the other grid items. Now that we're doing responsive things, I made the section a container so that we can use container queries. The only new thing in the HTML is a class, but wanted to share it as a visual for what the CSS is doing.

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<section class="content-container">
  <div class="media-primary">
    <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
  </div>
  <figure class="media-secondary">
    <!-- Secondary media will go here -->
  </figure>
  <div class="text-content">
    <h1 class="text-heading">
      New knowledge built from shared work
    </h1>
    <div class="text-body">  
      <p>
        We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
      </p>
      <div class="ctas">
        <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
        <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
          CodePen
        </a>
      </div>
    </div>
  </div>
</section>
```

</div><!-- Close Code UI -->

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
.content-container {
  container-name: content-container;
  container-type: inline-size;
}

@container content-container (min-width: 768px) {
  .text-content {
    grid-area: 1 / 1 / 2 / 2;
    position: relative;
    z-index: 2;
  }
}
```

</div><!-- Close Code UI -->

<style>
  .preview-five {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-five main {
    background-color: #15272a;
    padding: 16px;
  }

  .preview-five section {
    display: grid;
  }

  .preview-five .media-primary,
  .preview-five .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-five .media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#preview-four-clip-path);
    position: relative;
  }

  .preview-five .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-five .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }

  .preview-five .media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-five .text-heading {
    background-color: #b6d2d3;
    border-radius: 0.75rem;
    clip-path: url(#clip-heading);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    max-inline-size: 85%;
    padding: 1rem 3rem 1rem 1rem;
    position: relative;
  }

  .preview-five .text-body {
    color: #fff;
    margin-block-start: 1.5rem;
  }

  .preview-five .ctas {
    display: flex;
    gap: 1rem;
    margin-block-start: 1.5rem;
  }

  .preview-five .cta {
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .preview-five .cta-primary {
    background-color: #fff;
    color: #15272a;
  }

  .preview-five .cta-secondary {
    color: #ffffff;
  }

  .preview-five .content-container {
    container-name: content-container;
    container-type: inline-size;
  }

  @container content-container (min-width: 768px) {
    .preview-five .text-content {
      grid-area: 1 / 1 / 2 / 2;
      position: relative;
      z-index: 2;
    }
  }

  @media screen and (min-width: 800px) {
    .browser-preview.preview-five {
      width: 810px;
    }
  }

</style>

<p class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative lg:hidden" role="alert">
  <strong class="font-bold">Small screen alert!</strong>
  <span class="block sm:inline">The demos are best viewed on a screen at least 1200px wide, on mobile they're going to appear the same each time from here.</span>
</p>

<div class="full-bleed">
<div class="browser-preview preview-five">
  <main>
    <section class="content-container">
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
      <div class="text-content">
        <h1 class="text-heading">
          New knowledge built from shared work
        </h1>
        <div class="text-body">  
          <div class="text-body-container">
            <p>
              We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
            </p>
            <div class="ctas">
              <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
              <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
                CodePen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-four-clip-path" clipPathUnits="objectBoundingBox">
        <path d="
        M0.035,0
        H0.555
        A0.035,0.035 0,0,1 0.59,0.04
        V0.423
        A0.035,0.035 0,0,0 0.625,0.463
        H0.965
        A0.035,0.035 0,0,1 1.000,0.503
        V0.96
        A0.035,0.035 0,0,1 0.965,1
        H0.035
        A0.035,0.035 0,0,1 0,0.96
        V0.04
        A0.035,0.035 0,0,1 0.035,0
        Z" />
      </clipPath>
    </defs>
  </svg>

</div>
</div>

### Just pretend

While I'm trying to use more flexible solutions for this version, it's still somewhat hacky. So, we're using Grid, and we're going to apply grid styles to things, but it's not a true grid. The items don't actually know about each other at all. There may be a way to achieve this with a real grid, but I certainly don't know it. We're just going to pretend that it's a real grid as we assign hardcoded values to control space.

We'll start with putting things in their respective areas first, then we'll work out styling. I'm loosely following the ratio of the original, so the primary media is around 60% and the secondary media is around 25%; 

The heading and text content with the CTAs will be a two-row grid, with the text and CTAs positioned at the bottom. That section will need a bonus div. If you know how to avoid, please @ me in any place you can, but it's just necessary evil as far as I know, to avoid individually adding widths to the paragraph and the button container. In those times, I err on the side of a bonus div over having to edit multiple widths if things change.

If you pretend real hard, you can see the layout taking shape!

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<div class="text-body">  
  <div class="text-body-container">
    <p>
      We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
    </p>
    <div class="ctas">
      <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
      <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
        CodePen
      </a>
    </div>
  </div>
</div>
```

</div>

<style>
  .preview-six {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-six main {
    background-color: #15272a;
    padding: 16px;
  }

  .preview-six section {
    display: grid;
  }

  .preview-six .media-primary,
  .preview-six .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-six .media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#preview-four-clip-path);
    position: relative;
  }

  .preview-six .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-six .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }

  .preview-six .media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-six .text-heading {
    background-color: #b6d2d3;
    border-radius: 0.75rem;
    clip-path: url(#clip-heading);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    max-inline-size: 85%;
    padding: 1rem 3rem 1rem 1rem;
    position: relative;
  }

  .preview-six .text-heading::after {
    background-color: #b6d2d3;
    border-radius: 0 0.75rem 0.75rem 0;
    content: "";
    height: 8rem;
    position: absolute;
    right: -2rem;
    width: 2rem;
    top: 20%;
  }

  .preview-six .text-body {
    color: #fff;
    margin-block-start: 1.5rem;
  }

  .preview-six .ctas {
    display: flex;
    gap: 1rem;
    margin-block-start: 1.5rem;
  }

  .preview-six .cta {
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .preview-six .cta-primary {
    background-color: #fff;
    color: #15272a;
  }

  .preview-six .cta-secondary {
    color: #ffffff;
  }

  .preview-six .content-container {
    container-name: content-container;
    container-type: inline-size;
  }

  @container content-container (min-width: 768px) {
    .preview-six .media-primary {
      width: 60%;
    }

    .preview-six .media-secondary {
      aspect-ratio: 240 / 230;
      width: 25%;
    }

    .preview-six .text-content {
      grid-area: 1 / 1 / 2 / 2;
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-rows: 1fr auto;
    }

    .preview-six .text-body {
      display: flex;
      justify-content: flex-end;
    }

    .preview-six .text-body-container {
      padding-inline-start: 1.5rem;
      width: 40%;
    }
  }

  @media screen and (min-width: 800px) {
    .browser-preview.preview-six {
      width: 810px;
    }
  }

</style>

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
@container content-container (min-width: 768px) {
  .media-primary {
    width: 60%;
  }

  .media-secondary {
    aspect-ratio: 240 / 230;
    width: 25%;
  }

  .text-content {
    grid-area: 1 / 1 / 2 / 2;
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .text-body {
    display: flex;
    justify-content: flex-end;
  }

  .text-body-container {
    padding-inline-start: 1.5rem;
    width: 40%;
  }
}
```

</div><!-- Close Code UI -->

<p class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative lg:hidden" role="alert">
  <strong class="font-bold">Small screen alert!</strong>
  <span class="block sm:inline">The demos are best viewed on a screen at least 1200px wide, on mobile they're going to appear the same each time from here.</span>
</p>

<div class="full-bleed">
<div class="browser-preview preview-six">
  <main>
    <section class="content-container">
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
      <div class="text-content">
        <h1 class="text-heading">
          New knowledge built from shared work
        </h1>
        <div class="text-body">  
          <div class="text-body-container">
            <p>
              We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
            </p>
            <div class="ctas">
              <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
              <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
                CodePen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-four-clip-path" clipPathUnits="objectBoundingBox">
        <path d="
        M0.035,0
        H0.555
        A0.035,0.035 0,0,1 0.59,0.04
        V0.423
        A0.035,0.035 0,0,0 0.625,0.463
        H0.965
        A0.035,0.035 0,0,1 1.000,0.503
        V0.96
        A0.035,0.035 0,0,1 0.965,1
        H0.035
        A0.035,0.035 0,0,1 0,0.96
        V0.04
        A0.035,0.035 0,0,1 0.035,0
        Z" />
      </clipPath>
    </defs>
  </svg>

  <svg width="0" height="0">
    <defs>
      <clipPath id="clip-heading" clipPathUnits="objectBoundingBox">
        <path d="
          M0.044,0 H0.852 A0.037,0.05 0,0,1 0.889,0.05 V0.25 A0.037,0.05 0,0,0 0.926,0.30 H0.963 A0.037,0.05 0,0,1 1.000,0.35 V0.70 A0.037,0.05 0,0,1 0.963,0.75 H0.926 A0.037,0.05 0,0,0 0.889,0.80 V0.95 A0.037,0.05 0,0,1 0.852,1 H0.044 A0.044,0.06 0,0,1 0,0.94 V0.06 A0.044,0.06 0,0,1 0.044,0 Z" />
      </clipPath>
    </defs>
  </svg>

</div>
</div>

### Putting lipstick on this "pretend"

The original uses widths and duplication to achieve thier effect, which does have some easier things for scaling. I could technically do a mid-size clip-path for some of the styles here and then a full-size, but I'm going to take the spirit of the full size and apply it from 768px up. 

First things first, we need a new clip path. On mobile, the "top" of the primary media is more thick. My process for that is: draw the shape in Corner Clipper, copy the mask, paste the mask into a ChatGPT thread, where it gives me a SVG equivalent, add that in CSS.

Next up, is the heading and this is a bit of a doozy. The original duplicated the h1 and I really want to avoid that so that a screenreader or a crawler could read the whole thing. I can't avoid peppering it with spans, though, to make it a grid. I'm using the same approach as the original and I want to keep it flexible for the background, so I had to add some SVGs to the h1 as well. The cool thing is that it's a single item that you can highlight the text on.

Reminder: the full code is in the pen, so here I'm just going to show the new SVG, the h1 spanification, and the CSS updates. 

<style>
  .preview-seven {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-seven main {
    background-color: #15272a;
    padding: 16px;
  }

  .preview-seven section {
    display: grid;
  }

  .preview-seven .media-primary,
  .preview-seven .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-seven .media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#preview-four-clip-path);
    position: relative;
  }

  .preview-seven .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-seven .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }

  .preview-seven .media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-seven .text-heading {
    background-color: #b6d2d3;
    border-radius: 0.75rem;
    clip-path: url(#clip-heading);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    max-inline-size: 85%;
    padding: 1rem 3rem 1rem 1rem;
    position: relative;
  }

  .preview-seven .text-body {
    color: #fff;
    margin-block-start: 1.5rem;
  }

  .preview-seven .ctas {
    display: flex;
    gap: 1rem;
    margin-block-start: 1.5rem;
  }

  .preview-seven .cta {
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .preview-seven .cta-primary {
    background-color: #fff;
    color: #15272a;
  }

  .preview-seven .cta-secondary {
    color: #ffffff;
  }

  .preview-seven .content-container {
    container-name: content-container;
    container-type: inline-size;
    margin-inline: auto;
    max-inline-size: 75rem;
  }

  .preview-seven .pseudo-corner {
    display: none;
  }

  @container content-container (min-width: 768px) {
    .preview-seven .media-primary {
      align-self: end;
      clip-path: url(#preview-seven-clip-path-full);
      width: 50%;
    }

    .preview-seven .media-secondary {
      aspect-ratio: 240 / 220;
      width: 20%;
    }

    .preview-seven .text-content {
      grid-area: 1 / 1 / 2 / 2;
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-rows: 1fr auto;
    }

    .preview-seven .text-heading {
      align-items: start;
      background-color: unset;
      display: grid;
      clip-path: unset;
      font-optical-sizing: auto;
      font-size: 7.125cqw;
      font-weight: 700;
      font-style: normal;
      justify-items: start;
      margin-block-start: 0;
      max-inline-size: 100%;
      padding: 0;
    }

    .preview-seven .pseudo-corner {
      color: #b6d2d3;
      height: 24px;
      pointer-events: none;
      position: absolute;
      width: 24px;
    }

    .preview-seven .text-heading-aligned {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    .preview-seven .span-1 { 
      border-radius: 0.75rem 0.75rem 0 0.75rem;
    }
    
    .preview-seven .span-2 { 
      align-self: end;
      border-radius: 0 0 0 0.75rem;
    }

    .preview-seven .pseudo-corner {
      display: block;
    }

    .preview-seven .span-2 .pseudo-corner:first-child,
    .preview-seven .span-3 .pseudo-corner {
      left: -24px;
      top: 0;
    }

    .preview-seven .span-2 .pseudo-corner:last-child {
      bottom: 0;
      right: -24px;
      transform: rotate(180deg);
    }
    
    .preview-seven .span-3 {
      border-radius: 0 0.75rem 0.75rem 0.75rem;
      justify-self: end;
    }
    
    .preview-seven .span-1, .preview-seven .span-2, .preview-seven .span-3 {
      background-color: #b6d2d3;
      padding: 0.25rem 1rem 0.75rem;
      position: relative;
    }

    .preview-seven .text-body {
      display: flex;
      justify-content: flex-end;
    }

    .preview-seven .text-body-container {
      padding-inline-start: 1.5rem;
      width: 50%;
    }
  }

  @media screen and (min-width: 820px) {
    .browser-preview.preview-seven {
      width: 810px;
    }
  }

</style>

<p class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative lg:hidden" role="alert">
  <strong class="font-bold">Small screen alert!</strong>
  <span class="block sm:inline">The demos are best viewed on a screen at least 1200px wide, on mobile they're going to appear the same each time from here.</span>
</p>

<div class="full-bleed">
<div class="browser-preview preview-seven">
  <main>
    <section class="content-container">
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
      <div class="text-content">
        <div>
          <h1 class="text-heading">
            <span class="text-heading-aligned">
              <span class="span-1" id="first-line">Gaining knowledge</span> 
              <span class="span-2">by building <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg><svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
            </span> 
            <span class="span-3">web things <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
          </h1>
        </div>
        <div class="text-body">  
          <div class="text-body-container">
            <p>
              We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
            </p>
            <div class="ctas">
              <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
              <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
                CodePen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-four-clip-path" clipPathUnits="objectBoundingBox">
        <path d="
        M0.035,0
        H0.555
        A0.035,0.035 0,0,1 0.59,0.04
        V0.423
        A0.035,0.035 0,0,0 0.625,0.463
        H0.965
        A0.035,0.035 0,0,1 1.000,0.503
        V0.96
        A0.035,0.035 0,0,1 0.965,1
        H0.035
        A0.035,0.035 0,0,1 0,0.96
        V0.04
        A0.035,0.035 0,0,1 0.035,0
        Z" />
      </clipPath>
    </defs>
  </svg>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-seven-clip-path-full" clipPathUnits="objectBoundingBox">
        <path d="M0.0312,0 H0.4987 A0.0312,0.0358 0,0,1 0.5300,0.0358 V0.2209 A0.0312,0.0358 0,0,0 0.5610,0.2567 H0.9688 A0.0312,0.0358 0,0,1 1,0.2925 V0.9642 A0.0312,0.0358 0,0,1 0.9688,1 H0.0312 A0.0312,0.0358 0,0,1 0,0.9642 V0.0358 A0.0312,0.0358 0,0,1 0.0312,0 Z" />
      </clipPath>
    </defs>
  </svg>

</div>
</div>

<style>
  .preview-eight {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-eight main {
    background-color: #15272a;
    padding: 16px;
  }

  .preview-eight section {
    display: grid;
  }

  .preview-eight .media-primary,
  .preview-eight .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-eight .media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#preview-four-clip-path);
    position: relative;
  }

  .preview-eight .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-eight .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }

  .preview-eight .media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-eight .text-heading {
    background-color: #b6d2d3;
    border-radius: 0.75rem;
    clip-path: url(#clip-heading);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    max-inline-size: 85%;
    padding: 1rem 3rem 1rem 1rem;
    position: relative;
  }

  .preview-eight .text-body {
    color: #fff;
    margin-block-start: 1.5rem;
  }

  .preview-eight .ctas {
    display: flex;
    gap: 1rem;
    margin-block-start: 1.5rem;
  }

  .preview-eight .cta {
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .preview-eight .cta-primary {
    background-color: #fff;
    color: #15272a;
  }

  .preview-eight .cta-secondary {
    color: #ffffff;
  }

  .preview-eight .content-container {
    container-name: content-container;
    container-type: inline-size;
    margin-inline: auto;
    max-inline-size: 75rem;
  }

  .preview-eight .pseudo-corner {
    display: none;
  }

  @container content-container (min-width: 768px) {
    .preview-eight .media-primary {
      align-self: end;
      clip-path: url(#preview-eight-clip-path-full);
      width: 50%;
    }

    .preview-eight .media-secondary {
      aspect-ratio: 240 / 220;
      width: 20%;
    }

    .preview-eight .text-content {
      grid-area: 1 / 1 / 2 / 2;
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-rows: 1fr auto;
    }

    .preview-eight .text-heading {
      align-items: start;
      background-color: unset;
      display: grid;
      clip-path: unset;
      font-optical-sizing: auto;
      font-size: 7.125cqw;
      font-weight: 700;
      font-style: normal;
      justify-items: start;
      margin-block-start: 0;
      max-inline-size: 100%;
      padding: 0;
    }

    .preview-eight .pseudo-corner {
      color: #b6d2d3;
      height: 24px;
      pointer-events: none;
      position: absolute;
      width: 24px;
    }

    .preview-eight .text-heading-aligned {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    .preview-eight .span-1 { 
      border-radius: 0.75rem 0.75rem 0 0.75rem;
    }
    
    .preview-eight .span-2 { 
      align-self: end;
      border-radius: 0 0 0 0.75rem;
    }

    .preview-eight .pseudo-corner {
      display: block;
    }

    .preview-eight .span-2 .pseudo-corner:first-child,
    .preview-eight .span-3 .pseudo-corner {
      left: -24px;
      top: 0;
    }

    .preview-eight .span-2 .pseudo-corner:last-child {
      bottom: 0;
      right: -24px;
      transform: rotate(180deg);
    }
    
    .preview-eight .span-3 {
      border-radius: 0 0.75rem 0.75rem 0.75rem;
      justify-self: end;
    }
    
    .preview-eight .span-1, .preview-eight .span-2, .preview-eight .span-3 {
      background-color: #b6d2d3;
      padding: 0.25rem 1rem 0.75rem;
      position: relative;
    }

    .preview-eight .text-body {
      display: flex;
      justify-content: flex-end;
    }

    .preview-eight .text-body-container {
      padding-inline-start: 1.5rem;
      width: 50%;
    }
  }

  @container content-container (min-width: 1000px) {
    .preview-eight .media-primary {
      clip-path: url(#preview-eight-clip-path-full);
      width: 45%;
    }

    .preview-eight .media-primary {
      aspect-ratio: 320 / 195;
      width: 53%;
    }

    .preview-eight .media-secondary {
      aspect-ratio: 250 / 195;
      width: 22%;
    }

    .preview-eight .text-body-container {
      font-size: 1.125rem;
      padding-inline-start: 1.5rem;
      width: 47%;
    }
  }

  @media screen and (min-width: 1280px) {
    .browser-preview.preview-eight {
      width: 1240px;
    }
  }

</style>

I originally started trying to shift this responsively and I can definitely why they made the choices that they mode on mode.com. So, for this version, it's only the full size version styles. One thing I kept running into issues with has having the `h1` as a direct Grid child, so we ended up with another bonus `div`. 

Seems like overkill to display all of this, but here we go...

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<div>
  <h1 class="text-heading">
    <span class="text-heading-aligned">
      <span class="span-1" id="first-line">Gaining knowledge</span> 
      <span class="span-2">by building <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg><svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
    </span> 
    <span class="span-3">web things <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
  </h1>
</div>
```

</div>

Then, here is the new SVG for the full screen `clip-path`.

```html
<svg width="0" height="0">
  <defs>
    <clipPath id="preview-eight-clip-path-full" clipPathUnits="objectBoundingBox">
      <path d="M0.0188,0 H0.5203 A0.0188,0.0308 0,0,1 0.5391,0.0308 V0.2769 A0.0188,0.0308 0,0,0 0.5578,0.3077 H0.9813 A0.0188,0.0308 0,0,1 1,0.3385 V0.9692 A0.0188,0.0308 0,0,1 0.9813,1 H0.0188 A0.0188,0.0308 0,0,1 0,0.9692 V0.0308 A0.0188,0.0308 0,0,1 0.0188,0 Z" />
    </clipPath>
  </defs>
</svg>
```

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
@container content-container (min-width: 1000px) {
  .preview-eight .media-primary {
    clip-path: url(#preview-eight-clip-path-full);
    width: 45%;
  }

  .preview-eight .media-primary {
    aspect-ratio: 320 / 195;
    width: 53%;
  }

  .preview-eight .media-secondary {
    aspect-ratio: 250 / 205;
    width: 21%;
  }

  .preview-eight .text-body-container {
    font-size: 1.125rem;
    padding-inline-start: 1.5rem;
    width: 47%;
  }
}
```

</div>

<p class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative xl:hidden" role="alert">
  <strong class="font-bold">Small screen alert!</strong>
  <span class="block sm:inline">The demos are best viewed on a screen at least 1200px wide, on mobile they're going to appear the same each time from here.</span>
</p>

<div class="full-bleed">
<div class="browser-preview preview-eight">
  <main>
    <section class="content-container">
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
      <div class="text-content">
        <div>
          <h1 class="text-heading">
            <span class="text-heading-aligned">
              <span class="span-1" id="first-line">Gaining knowledge</span> 
              <span class="span-2">by building <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg><svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
            </span> 
            <span class="span-3">web things <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
          </h1>
        </div>
        <div class="text-body">  
          <div class="text-body-container">
            <p>
              We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
            </p>
            <div class="ctas">
              <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
              <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
                CodePen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-four-clip-path" clipPathUnits="objectBoundingBox">
        <path d="
        M0.035,0
        H0.555
        A0.035,0.035 0,0,1 0.59,0.04
        V0.423
        A0.035,0.035 0,0,0 0.625,0.463
        H0.965
        A0.035,0.035 0,0,1 1.000,0.503
        V0.96
        A0.035,0.035 0,0,1 0.965,1
        H0.035
        A0.035,0.035 0,0,1 0,0.96
        V0.04
        A0.035,0.035 0,0,1 0.035,0
        Z" />
      </clipPath>
    </defs>
  </svg>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-eight-clip-path-full" clipPathUnits="objectBoundingBox">
        <path d="M0.0188,0 H0.5203 A0.0188,0.0308 0,0,1 0.5391,0.0308 V0.2769 A0.0188,0.0308 0,0,0 0.5578,0.3077 H0.9813 A0.0188,0.0308 0,0,1 1,0.3385 V0.9692 A0.0188,0.0308 0,0,1 0.9813,1 H0.0188 A0.0188,0.0308 0,0,1 0,0.9692 V0.0308 A0.0188,0.0308 0,0,1 0.0188,0 Z" />
      </clipPath>
    </defs>
  </svg>
</div>
</div>

## A small break for fun

The responsive bit is challenging, but the full screen looked so good that I wanted to add the animation in the top right and get this so fresh and so clean, clean. Then, I will get back to wrangling four sections to play with each other across resolutions.

I used a combination of Midjourney and ChatGPT to make some icons and style them like the main image. I'm not going to go crazy and match the animation from the original, but I thought we should at least have something. 

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<div class="media-secondary">
  <figure class="animated-icon">
    <img alt="illustration of a laptop" src="https://assets.codepen.io/140/laptop.webp" />
  </figure>
  <figure class="animated-icon">
    <img alt="illustration of a grid" src="https://assets.codepen.io/140/grid.webp" />
  </figure>
  <figure class="animated-icon">
    <img alt="illustration respresenting a clip-path" src="https://assets.codepen.io/140/clip-path.webp" />
  </figure>
</div>
```

</div>

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
.media-secondary {
  display: grid;
  position: relative;
  overflow: hidden;
}

.animated-icon {
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: 1 / 1 / 2 / 2;
}

.animated-icon img {
  height: auto;
  opacity: 0;
  width: 80%;
  animation: rotateImages 9s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

.animated-icon:nth-child(1) img {
  animation-delay: 0s;
}

.animated-icon:nth-child(2) img {
  animation-delay: 3s;
}

.animated-icon:nth-child(3) img {
  animation-delay: 6s;
}

@keyframes rotateImages {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  5% {
    opacity: 1;
    transform: scale(1.1);
  }
  10% {
    transform: scale(1);
  }
  30% {
    opacity: 1;
    transform: scale(1);
  }
  33% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
```

</div>

<style>
.has-animation .media-secondary {
  display: grid;
  position: relative;
  overflow: hidden;
}

.has-animation .animated-icon {
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: 1 / 1 / 2 / 2;
}

.has-animation .animated-icon img {
  height: auto;
  opacity: 0;
  width: 80%;
  animation: rotateImages 9s infinite cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
}

.has-animation .animated-icon:nth-child(1) img {
  animation-delay: 0s;
}

.has-animation .animated-icon:nth-child(2) img {
  animation-delay: 3s;
  animation-name: rotateImagesReverse;
}

.has-animation .animated-icon:nth-child(3) img {
  animation-delay: 6s;
}

@keyframes rotateImages {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-15deg);
  }
  5% {
    opacity: 1;
    transform: scale(1.1) rotate(5deg);
  }
  10% {
    transform: scale(1) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  33% {
    opacity: 0;
    transform: scale(0.8) rotate(15deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.8) rotate(15deg);
  }
}

@keyframes rotateImagesReverse {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(15deg);
  }
  5% {
    opacity: 1;
    transform: scale(1.1) rotate(-5deg);
  }
  10% {
    transform: scale(1) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  33% {
    opacity: 0;
    transform: scale(0.8) rotate(-15deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.8) rotate(-15deg);
  }
}
</style>

<p class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative xl:hidden" role="alert">
  <strong class="font-bold">Small screen alert!</strong>
  <span class="block sm:inline">The demos are best viewed on a screen at least 1200px wide, on mobile they're going to appear the same each time from here.</span>
</p>

<div class="full-bleed">
<div class="browser-preview preview-eight has-animation">
  <main>
    <section class="content-container">
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer and we're hoping they find the typos" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <div class="media-secondary">
        <figure class="animated-icon">
          <img alt="illustration of a laptop" src="https://assets.codepen.io/140/laptop.webp" />
        </figure>
        <figure class="animated-icon">
          <img alt="illustration of a grid" src="https://assets.codepen.io/140/grid.webp" />
        </figure>
        <figure class="animated-icon">
          <img alt="illustration respresenting a clip-path" src="https://assets.codepen.io/140/clip-path.webp" />
        </figure>
      </div>
      <div class="text-content">
        <div>
          <h1 class="text-heading">
            <span class="text-heading-aligned">
              <span class="span-1" id="first-line">Gaining knowledge</span> 
              <span class="span-2">by building <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg><svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
            </span> 
            <span class="span-3">web things <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z"/></svg></span>
          </h1>
        </div>
        <div class="text-body">  
          <div class="text-body-container">
            <p>
              We're building an example that shares code created while learning from others, showing how collaboration and exploration can lead to enhanced outcomes.
            </p>
            <div class="ctas">
              <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
              <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
                CodePen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-four-clip-path" clipPathUnits="objectBoundingBox">
        <path d="
        M0.035,0
        H0.555
        A0.035,0.035 0,0,1 0.59,0.04
        V0.423
        A0.035,0.035 0,0,0 0.625,0.463
        H0.965
        A0.035,0.035 0,0,1 1.000,0.503
        V0.96
        A0.035,0.035 0,0,1 0.965,1
        H0.035
        A0.035,0.035 0,0,1 0,0.96
        V0.04
        A0.035,0.035 0,0,1 0.035,0
        Z" />
      </clipPath>
    </defs>
  </svg>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-eight-clip-path-full" clipPathUnits="objectBoundingBox">
        <path d="M0.0188,0 H0.5203 A0.0188,0.0308 0,0,1 0.5391,0.0308 V0.2769 A0.0188,0.0308 0,0,0 0.5578,0.3077 H0.9813 A0.0188,0.0308 0,0,1 1,0.3385 V0.9692 A0.0188,0.0308 0,0,1 0.9813,1 H0.0188 A0.0188,0.0308 0,0,1 0,0.9692 V0.0308 A0.0188,0.0308 0,0,1 0.0188,0 Z" />
      </clipPath>
    </defs>
  </svg>
</div>
</div>

## Back to the Grind

Back in my day, I'd have made this work on an 800x600 and a 1024x768 monitor and called it a day, but instead we'll get this thing working across viewport sizes. I blame [Ethan](https://alistapart.com/article/responsive-web-design). If I was going to be shipping this for prod, I'd put a lot more work into this, but I'm going to target specifically the things that look a little janky when you hit them.

<style>
  .preview-nine {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-nine main {
    background-color: #15272a;
    padding: 16px;
  }

  .preview-nine section {
    display: grid;
  }

  .preview-nine .media-primary,
  .preview-nine .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-nine .media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#preview-four-clip-path);
    position: relative;
  }

  .preview-nine .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-nine .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }

  .preview-nine .media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-nine .text-heading {
    background-color: #b6d2d3;
    border-radius: 0.75rem;
    clip-path: url(#clip-heading);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    padding: 1rem 3rem 1rem 1rem;
    position: relative;
  }

  .preview-nine .text-body {
    color: #fff;
    margin-block-start: 1.5rem;
  }

  .preview-nine .ctas {
    display: flex;
    gap: 1rem;
    margin-block-start: 1.5rem;
  }

  .preview-nine .cta {
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .preview-nine .cta-primary {
    background-color: #fff;
    color: #15272a;
  }

  .preview-nine .cta-secondary {
    color: #ffffff;
  }

  .preview-nine .content-container {
    container-name: content-container;
    container-type: inline-size;
    margin-inline: auto;
    max-inline-size: 30rem;
  }

  .preview-nine .pseudo-corner {
    display: none;
  }

  @container content-container (min-width: 375px) {
    .preview-nine .text-heading {
      max-inline-size: 85%;
    }
  }

  @media screen and (min-width: 768px) {
     .preview-nine .content-container {
      max-inline-size: 75rem;
    }
  }

  @container content-container (min-width: 768px) {
    .preview-nine .media-primary {
      align-self: end;
      clip-path: url(#preview-nine-clip-path-full);
      width: 50%;
    }

    .preview-nine .media-secondary {
      aspect-ratio: 240 / 220;
      width: 20%;
    }

    .preview-nine .text-content {
      grid-area: 1 / 1 / 2 / 2;
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-rows: 1fr auto;
    }

    .preview-nine .text-heading {
      align-items: start;
      background-color: unset;
      display: grid;
      clip-path: unset;
      font-optical-sizing: auto;
      font-size: 7.125cqw;
      font-weight: 700;
      font-style: normal;
      justify-items: start;
      margin-block-start: 0;
      max-inline-size: 100%;
      padding: 0;
    }

    .preview-nine .pseudo-corner {
      color: #b6d2d3;
      height: 24px;
      pointer-events: none;
      position: absolute;
      width: 24px;
    }

    .preview-nine .text-heading-aligned {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    .preview-nine .span-1 { 
      border-radius: 0.75rem 0.75rem 0 0.75rem;
    }
    
    .preview-nine .span-2 { 
      align-self: end;
      border-radius: 0 0 0 0.75rem;
    }

    .preview-nine .pseudo-corner {
      display: block;
    }

    .preview-nine .span-2 .pseudo-corner:first-child,
    .preview-nine .span-3 .pseudo-corner {
      left: -24px;
      top: 0;
    }

    .preview-nine .span-2 .pseudo-corner:last-child {
      bottom: 0;
      right: -24px;
      transform: rotate(180deg);
    }
    
    .preview-nine .span-3 {
      border-radius: 0 0.75rem 0.75rem 0.75rem;
      justify-self: end;
    }
    
    .preview-nine .span-1, .preview-nine .span-2, .preview-nine .span-3 {
      background-color: #b6d2d3;
      padding: 0.25rem 1rem 0.75rem;
      position: relative;
    }

    .preview-nine .text-body {
      display: flex;
      justify-content: flex-end;
    }

    .preview-nine .text-body-container {
      padding-inline-start: 1.5rem;
      width: 50%;
    }
  }

  @container content-container (min-width: 820px) {
    .preview-nine .text-body-container {
      padding-inline-start: 1.5rem;
      width: 48%;
    }

    .preview-nine .media-secondary {
      aspect-ratio: 260 / 215;
      width: 22%;
    }
  }

  @container content-container (min-width: 1020px) {
    .preview-nine .text-body-container {
      padding-inline-start: 1.5rem;
      width: 45%;
    }

    .preview-nine .media-primary {
      aspect-ratio: 320 / 195;
      width: 54%;
    }

    .preview-nine .media-secondary {
      aspect-ratio: 270 / 215;
      width: 22%;
    }
  }

  @container content-container (min-width: 1200px) {
    .preview-nine .media-primary {
      clip-path: url(#preview-eight-clip-path-full);
      width: 45%;
    }

    .preview-nine .media-primary {
      aspect-ratio: 320 / 195;
      width: 53%;
    }

    .preview-nine .media-secondary {
      aspect-ratio: 250 / 195;
      width: 22%;
    }

    .preview-nine .text-body-container {
      font-size: 1.125rem;
      padding-inline-start: 1.5rem;
      width: 46%;
    }
  }

  @media screen and (min-width: 1280px) {
    .browser-preview.preview-nine {
      width: 1240px;
    }
  }

</style>

This doesn't get it perfect, but no size that you'd load in has glaring jankiness. If you do front-end or design, the variance in the gaps will drive you nuts, but I'll save those kinf of fixes for when this would be a real thing.

I don't love some of the issues still and I think I could find some creative solutions for it, but the real goal was learning the clip-path part. I've learned a good amount about that and will now know the respnsive challenges for UIs like this. 

If you're interested in fixing it, fork this pen and show me your tricks!

<p class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative xl:hidden" role="alert">
  <strong class="font-bold">Small screen alert!</strong>
  <span class="block sm:inline">The demos are best viewed on a screen at least 1200px wide, on mobile they're going to appear the same each time from here.</span>
</p>

<div class="full-bleed">

<p class="codepen" data-height="700" data-slug-hash="vEEbLJe" data-pen-title="Trendy UI with Clip-Path and Grid" data-user="dandenney" style="height: 700px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 2em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dandenney/pen/vEEbLJe">
  Trendy UI with Clip-Path and Grid</a> by Dan Denney (<a href="https://codepen.io/dandenney">@dandenney</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

</div>