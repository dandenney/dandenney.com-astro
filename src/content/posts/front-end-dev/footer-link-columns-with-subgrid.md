---
pubDate: "2024-05-15"
socialImageFilename: "og-footer-link-columns-with-subgrid.jpg"
summary: "New tech applied to an old problem"
tags:
  - front-end-dev
cloudinaryThumb: "posts/footer-link-columns-with-subgrid.png"
thumb: "/posts/front-end-dev/footer-link-columns-with-subgrid/footer-link-columns-with-subgrid-thumb.webp"
thumbAlt: "a wizard using a magic wand to create a website on a pedestal, cinematic, with shapes and colors flying around in the air --ar 3:2"
title: "Footer Link Columns With Subgrid"
---

<style>
  .blog-rich-text section + p {
    margin-top: 2rem;
  }

  pre {
    padding: 0;
  }
</style>

In this post, I'll provide some background on why I tried this and explain how a subgrid works. However, you can skip that and go straight to the <a href="#final-version">final implementation code</a> if you'd like.

At work, I recently received a design to clean up the footer of the DataCamp site. It's a large collection of links spread across six columns, with titles over each section. We're also adding localization throughout the site, so my first question was, "What should this look like when the titles wrap?"

<img class="full-to-half-bleed" height="652" src="/posts/front-end-dev/footer-link-columns-with-subgrid/footer-en-us.webp" alt="Screenshot of a footer with six columns of links in English" width="1008" />

The answer offered an opportunity to try something new. The intent behind the design is that if one of the top titles wrap, then all of the links shift down and start at the same vertical point. To achieve this, I either need to control the height of the first title in each column or I have to use some approach that "knows" it.

<img class="full-to-half-bleed" height="652" src="/posts/front-end-dev/footer-link-columns-with-subgrid/footer-pt-br.webp" alt="Screenshot of a footer with six columns of links in English" width="1008" />

Controlling the first titles via min-height is fragile and something I've done in the past, but the platform continues to evolve to make things like this natural. There's a way to do this with Grid itself, if I was to use `grid-area`, but it would be a lot of specific code. I'm going to share an example of the code for the full version, [based on CSS grid generator](https://cssgrid-generator.netlify.app), but I'd have to set these for when there's two, three, four, and then the six columns. Achievable, but gnarly.

```css
.parent {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 1 / 2 / 2 / 3; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
.div5 { grid-area: 1 / 3 / 2 / 4; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
.div7 { grid-area: 1 / 4 / 2 / 5; }
.div8 { grid-area: 2 / 4 / 3 / 5; }
.div9 { grid-area: 1 / 5 / 2 / 6; }
.div10 { grid-area: 2 / 5 / 3 / 6; }
.div11 { grid-area: 1 / 6 / 2 / 7; }
.div12 { grid-area: 2 / 6 / 3 / 7; }
```

## I heard subgrid is good

I've seen some interesting posts about subgrid, but this is the first time I have found a reason to use it. I went back over the [CSS Subgrid article on web.dev](https://web.dev/articles/css-subgrid) and tried applying it. I thought I'd need to use some form of `minmax`, on the first row, but I couldn't get it to behave how I wanted. So, I took to [Twitter, where Adam Argyle helped me out](https://x.com/dandenney/status/1788692385477570606).

## Span
The value that I was missing was `span`, which, in this case, will set how many rows the grid should "span" over. You can specify a starting row, but we're allowing it to default to the first row in this example. 

The [formal definition on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row#span_integer_custom-ident_) is:
> Contributes a grid span to the grid item's placement such that the corresponding edge of the grid item's grid area is n lines from the opposite edge.

Here's some code to visualize how it works. The `style` block here is real, so you can edit the code and see how it affects the UI. Or, here's a <a href="https://codepen.io/dandenney/pen/LYoNNjV">pen</a>.

<style>
  .example {
    background-color: #00081e;
    padding: 1rem;
  }

  .example h3 {
    color: #ffffff;
    font-size: 0.875rem;
    text-transform: uppercase;
    margin: 0;
  }

  .example a {
    border: 0;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25;
    opacity: 0.75;
    text-decoration: none;
  }

  .blog-rich-text .example a:active,
  .blog-rich-text .example a:focus,
  .blog-rich-text .example a:hover {
    color: #ffffff;
    opacity: 1;
  }

  .blog-rich-text .example ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .blog-rich-text .example li {
    line-height: 1.25;
  }

  .blog-rich-text div h3 {
    margin-block-start: 42px;
  }

  .blog-rich-text .example div h3 + ul {
    margin-block-start: 20px;
  }
</style>

<pre contenteditable><style style="display: block;">.example-grid {
  column-gap: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
}

@media screen and (min-width: 600px) {
  .example-grid {
    column-gap: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 16px;
  }
}

.example-subgrid {
  display: grid;
  grid-row: span 2; /* Change me to break things */
  grid-template-rows: subgrid;
}</style></pre>

<section class="example example-grid">
  <nav class="example-subgrid">
    <h3>Column One</h3>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid">
    <h3>Column Two's Title Is Longer</h3>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid">
    <h3>Column Three</h3>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid">
    <h3>Column Four</h3>
    <a href="#">Links should align vertically</a>
  </nav>
</section>

Adam's example worked perfectly for that initial example, but I made the example too simple. The columns are going to have multiple links, and technically each link is a row item with the way this markup was created.

If the markup looks something like this, I'd need to set a span value high enough to cover all of the links. That starts to feel fragile, in the way a min-height on the titles would. I'm not sure a future engineer would know to change that value. I could do something crazy like throw a high number that would likely never get hit, but I'm trying to avoid hacks and use the platform the best that I can.

```html
<section class="example-grid">
  <nav class="example-subgrid-multiple" role="navigation" aria-label="Column One Navigation">
    <h3>Column One</h3>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid-multiple" role="navigation" aria-label="Column Two Navigation">
    <h3>Column Two's Title Is Longer</h3>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid-multiple" role="navigation" aria-label="Column Three Navigation">
    <h3>Column Three</h3>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid-multiple" role="navigation" aria-label="Column Four Navigation">
    <h3>Column Four</h3>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
  </nav>
</section>
```

Here, if you change the value to less than 5 you'll that the links start to pile on top of each other and if you set it to anything higher than 5 you'll see that it starts to add space based on the `gap`.

<pre contenteditable>
<style style="display: block;">.example-subgrid-multiple {
  display: grid;
  grid-row: span 5; /* This has to match or be higher than the item count, try changing it */
  grid-template-rows: subgrid;
}</style></pre>

<section class="example example-grid">
  <nav class="example-subgrid-multiple">
    <h3>Column One</h3>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid-multiple">
    <h3>Column Two's Title Is Longer</h3>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid-multiple">
    <h3>Column Three</h3>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
  </nav>
  <nav class="example-subgrid-multiple">
    <h3>Column Four</h3>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
    <a href="#">Links should align vertically</a>
  </nav>
</section>

If we use another HTML element to wrap the links, we can reduce the rows that we need to span. To avoid using a `div`, we can wrap them in a `ul`. Here's the markup:

```html
<section class="example example-grid">
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column One Navigation">
    <h3>Column One</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column Two Navigation">
    <h3>Column Two's Title Is Longer</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column Three Navigation">
    <h3>Column Three</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column Four Navigation">
    <h3>Column Four</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
</section>
```

This allows us to achive the columns with two rows, which I set the `subgrid` to span over.

<pre class='language-css'><code class="language-css" contenteditable><style style="display: block;">.example-subgrid-ul {
  display: grid;
  grid-row: span 2; /* Span the h3 and ul rows */
  grid-template-rows: subgrid;
}</style></code></pre>

<section class="example example-grid">
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column One Navigation">
    <h3>Column One</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column Two Navigation">
    <h3>Column Two's Title Is Longer</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column Three Navigation">
    <h3>Column Three</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
  <nav class="example-subgrid-ul" role="navigation" aria-label="Column Four Navigation">
    <h3>Column Four</h3>
    <ul>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
      <li><a href="#">Links should align vertically</a></li>
    </ul>
  </nav>
</section>

<h2 id="final-version">Final Version</h2>

I had simplified the solution too far for the specific tweet, but either way the answer was correct and super helpful. I'm so thankful for the people in our community. Here, I'm showing a version that matches up what I need to do. (Unfortunately, mine got even more convoluted since it was a shared React component, but that just requires more refactoring because of our choices.)

I don't know of a way to avoid nesting a `div` here so I'm super open to ideas. I want to keep the `span` limited to the title row and the content row, so the `div` wraps all of the content. 

```html
<section class="example example-grid">
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column One Navigation">
    <h3>Column One</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
      <h3>This one has another set</h3>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column Two Navigation">
    <h3>Column Two's Title Is Longer</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
      <h3>This one has another set</h3>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column Three Navigation">
    <h3>Column Three</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column Four Navigation">
    <h3>Column Four</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
</section>
```

I'm including the original grid code here too, just so this could be copied.

<pre class='language-css'><code class="language-css" contenteditable><style style="display: block;"><style style="display: block;">.example-grid {
  column-gap: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
}

@media screen and (min-width: 600px) {
  .example-grid {
    column-gap: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 16px;
  }
}

.example-subgrid-sets {
  display: grid;
  grid-row: span 2; /* h3 and div rows */
  grid-template-rows: subgrid;
}</style></code></pre>

<section class="example example-grid">
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column One Navigation">
    <h3>Column One</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
      <h3>This one has another set</h3>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column Two Navigation">
    <h3>Column Two's Title Is Longer</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
      <h3>This one has another set</h3>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column Three Navigation">
    <h3>Column Three</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
  <nav class="example-subgrid-sets" role="navigation" aria-label="Column Four Navigation">
    <h3>Column Four</h3>
    <div>
      <ul>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
        <li><a href="#">Links should align vertically</a></li>
      </ul>
    </div>
  </nav>
</section>

Big thank you to [Adam](https://x.com/argyleink) for the tip! It helped me with figuring out the fix, learning something new, and inspired a blog post. 