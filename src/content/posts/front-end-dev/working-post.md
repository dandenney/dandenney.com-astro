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
with some of the beautiful work featured in [Animations.dev](http://Animations.dev) and in browsing a lot of mobile UI for inspiration. I was browsing Pinterest, as one does, and imagined the terror that I would have if I was handed a Figma to implement that [looked like this](https://www.pinterest.com/pin/213709944813086292). Then, I realized it's a real site: [mode.com](https://mode.com)

Overall, it's a striking design on mobile and desktop. Tablet sizes struggle a bit, but I think that's more about not focusing on them than it is that it was hard to pull off. It seems like mostly spacing issues.

## I wanna make it

So now, I need to know how to do it! It's been a loooooong time since I just grabbed a site and reverse engineered it to figure things out, but that is how I cut my teeth back in the day. 

In playing around with dev tools and looking at the styles, it wasn't clear to me how they pulled off some of the overlaps. I was expecting some complicated CSS Grid system and clip-path or SVG masks, but it seems like a lot of flexbox and inline-block. 

## But I also wanna improve it a little

Overall it looks amazing, but the semantics are a little rough. The h1 is splt into 3 pieces and ends up being 3 h1 elements. So I'd like to see if it's possible to avoid that and learn some new techniques. 

## Mobile-first, of course

The overlay of a smaller image over a larger one is pretty straight forward, except for that inverted border-radius on the larger image. In their version, they are using some interesting techniques. The primary photo is duplicated and then put into sized divs with object-fit: cover;. I'm pretty impressed that I can never make the photo get out of sync, their math is mathing. For having the SVG animations spaced on the top, they're using absolute positioning. 

Let's get a basic thing working first and then improve upon it. I'm leaning towards CSS Grid here, because I know I can have those two elements overlay each other and and I think we may want more of that behavior as we move up to the desktop version as well.

I don't want to try to create an exact replica of this, so while they did a series of greens, I'll do a series of purple: #161617, #bf8fce, #666248 from [Color Slurp](https://colorslurp.com/blog/purple-color-palette-ideas).

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

.media-secondary {
  aspect-ratio: 122 / 119;
  background-color: #666248;
  border-radius: 12px;
  justify-self: end;
  width: 35%;
}
```

</div><!-- Close Code UI -->

<style>
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
    background-color: #bf8fce;
    max-width: 100%;
  }

  .preview-one .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #666248;
    border-radius: 12px;
    justify-self: end;
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
      <!-- Secondary media will go here -->
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
  aspect-ratio: 346 / 300;
  background-color: #bf8fce;
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
    background-color: #bf8fce;
    clip-path: url(#preview-two-clip-path);
    max-width: 100%;
  }

  .preview-two .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #666248;
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
        <!-- Secondary media will go here -->
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

To get that closer to the original, we'll pop an image into the `media-primary` and free up that shade of purple for our next step with the text.

The important additions here are adding an image in the HTML and having it set to `cover` its parent element.

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<div class="media-primary">
  <img alt="Generated image of some people working at a computer" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
</div>
```

</div><!-- Close Code UI -->

<div class="code-ui-wrapper"><div class="code-ui-header">CSS</div>

```css
.media-primary img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

</div><!-- Close Code UI -->

<style>
  .preview-three {
    margin-inline: auto;
    max-width: 100%;
    width: 400px;
  }

  .preview-three main {
    background-color: #161617;
    padding: 16px;
  }

  .preview-three section {
    display: grid;
  }

  .preview-three .media-primary,
  .preview-three .media-secondary {
    grid-area: 1 / 1 / 2 / 2;
  }

  .preview-three .media-primary {
    aspect-ratio: 346 / 300;
    background-color: #bf8fce;
    clip-path: url(#preview-three-clip-path);
    position: relative;
  }

  .preview-three .media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .preview-three .media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #666248;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
  }

  .preview-three .media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>

<div class="full-bleed">
<div class="browser-preview preview-three">
  <main>
    <section>
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
    </section>
  </main>

  <svg width="0" height="0">
    <defs>
      <clipPath id="preview-three-clip-path" clipPathUnits="objectBoundingBox">
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

I didn't give the heading all the clip-path love that it deserves to match the original, but honestly I'd prefer it to not be in a blob at all.

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<section>
  <div class="media-primary">
    <img alt="Generated image of some people working at a computer" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
  </div>
  <figure class="media-secondary">
    <!-- Secondary media will go here -->
  </figure>
  <div class="text-content">
    <h1 class="text-heading">
      Shared knowledge built from shared work
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
    background-color: #bf8fce;
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
    background-color: #7f999a;
    border-radius: 0.75rem;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    max-inline-size: 75%;
    padding: 1rem;
    position: relative;
  }

  .preview-four .text-heading::after {
    background-color: #7f999a;
    border-radius: 0 0.75rem 0.75rem 0;
    content: "";
    height: 8rem;
    position: absolute;
    right: -2rem;
    width: 2rem;
    top: 20%;
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
        <img alt="Generated image of some people working at a computer" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
      <div class="text-content">
        <h1 class="text-heading">
          Shared knowledge built from shared work
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

## Shifting to the full layout

The original version shifts to the full layout at 768px, but I think maybe this part got skipped in later QA. Nothing major, but there’s some content overlaps and wrapping issues that we’ll try to avoid with this version.

First things first, we're going to stack our text content on top of the other grid items. Now that we're doing responsive things, I made the section a container so that we can use container queries. 

<div class="code-ui-wrapper"><div class="code-ui-header">HTML</div>

```html
<section class="content-container">
  <div class="media-primary">
    <img alt="Generated image of some people working at a computer" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
  </div>
  <figure class="media-secondary">
    <!-- Secondary media will go here -->
  </figure>
  <div class="text-content">
    <h1 class="text-heading">
      Shared knowledge built from shared work
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
    background-color: #bf8fce;
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
    background-color: #7f999a;
    border-radius: 0.75rem;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    max-inline-size: 75%;
    padding: 1rem;
    position: relative;
  }

  .preview-five .text-heading::after {
    background-color: #7f999a;
    border-radius: 0 0.75rem 0.75rem 0;
    content: "";
    height: 8rem;
    position: absolute;
    right: -2rem;
    width: 2rem;
    top: 20%;
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
    .browser-preview {
      width: 810px;
    }
  }

</style>

<div class="full-bleed">
<div class="browser-preview preview-five">
  <main>
    <section class="content-container">
      <div class="media-primary">
        <img alt="Generated image of some people working at a computer" src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
      </div>
      <figure class="media-secondary">
        <!-- Secondary media will go here -->
      </figure>
      <div class="text-content">
        <h1 class="text-heading">
          Shared knowledge built from shared work
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