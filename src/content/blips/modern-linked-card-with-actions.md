---
summary: Minimum viable repeat of Eric's example
title: Modern linked card with actions
pubDate: "2026-02-09"
---

Eric Bailey wrote a great article for Piccalilli, [Accessible faux-nested interactive controls
](https://piccalil.li/blog/accessible-faux-nested-interactive-controls). When it comes to wordsmithing, I'm no Eric Bailey, so I'm saving it here on my site as "Modern linked card with actions". 

I recommend reading the article for all the thought behind this, both from Eric and from Andy's original solution. I've implemented this in a handful of ways and I dig this one, so I thought I'd stash it here.

If BEM is something you're into, here's the basics:

```html
<article class="clickable-card">
  <h3>
    <a class="card-link" href="/destination">
      Card title
    </a>
  </h3>

  <p>Optional supporting content.</p>

  <div class="card-actions">
    <button type="button">Action</button>
    <a href="/secondary">Secondary link</a>
  </div>
</article>
```

```css
/* Establish positioning context */
.clickable-card {
  position: relative;
}

/* Stretch the primary link */
.card-link {
  position: static;
}

.card-link::before {
  content: "";
  position: absolute;
  inset: 0;
}

/* Keep nested interactive elements clickable */
.clickable-card
  :is(
    a,
    button,
    input,
    select,
    textarea,
    summary,
    [role="button"],
    [tabindex]:not([tabindex="-1"])
  ):not(.card-link) {
  position: relative;
  z-index: 1;
}

/* Optional focus ring */
.clickable-card:focus-within {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```
If you're trudging your way through the React ecosystem, here's a way to handle it with JSX.

```jsx
function ClickableCard({ href, title, children, actions }) {
  return (
    <article className="clickable-card">
      <h3>
        <a className="card-link" href={href}>
          {title}
        </a>
      </h3>

      {children}

      {actions && (
        <div className="card-actions">
          {actions}
        </div>
      )}
    </article>
  );
}
```

And some example usage:

```jsx
<ClickableCard
  href="/destination"
  title="Card title"
  actions={
    <>
      <button type="button">Action</button>
      <a href="/secondary">Secondary</a>
    </>
  }
>
  <p>Supporting content lives here.</p>
</ClickableCard>
```