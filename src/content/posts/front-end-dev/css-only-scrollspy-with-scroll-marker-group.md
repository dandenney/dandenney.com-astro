---
pubDate: 2025-08-30
summary: "Sara Soueidan shows us how to create a scrollspy navigation effect using pure CSS with the new scroll-marker-group property and :target-current pseudo-selector."
title: "CSS-Only Scrollspy with scroll-marker-group"
tags: ["CSS", "Navigation", "Accessibility"]
cloudinaryThumb: "posts/slackin"
thumb: "/posts/slackin.png"
thumbAlt: "CSS code snippet showing scrollspy implementation"
---

I just read Sara Soueidan's excellent post on [CSS-only Scrollspy Effect Using scroll-marker-group and :target-current](https://www.sarasoueidan.com/blog/css-scrollspy/) and it's exactly the kind of CSS advancement that gets me excited about the web platform.

## The Problem

Traditional scrollspy navigation (highlighting which section you're currently viewing) has always required JavaScript to:
- Track scroll position
- Calculate which section is in view
- Update the active navigation link

This meant extra code, performance considerations, and accessibility concerns.

## The Solution

With the new CSS properties `scroll-marker-group` and `:target-current`, we can now achieve this entirely with CSS:

```css
nav[aria-labelledby=toc-label] {
    scroll-marker-group: auto;
}

a:target-current {
    font-weight: bold;
    text-decoration-thickness: 2px;
}
```

That's it! The browser handles:
- Tracking which section is currently in view
- Automatically applying the `:target-current` pseudo-class to the corresponding link
- Updating as the user scrolls

## How It Works

1. Set `scroll-marker-group: auto` on the container of your navigation links
2. Use the `:target-current` pseudo-selector to style the active link
3. The browser natively tracks scroll position and applies styling

## Accessibility Considerations

Sara points out important accessibility considerations:
- Add `aria-current="true"` to the active link for screen readers
- Ensure sufficient color contrast for active link styling  
- Currently requires JavaScript for full screen reader support

## Browser Support

This is cutting-edge CSS, so browser support is limited. But it's a perfect example of how the web platform continues to evolve to handle common patterns natively.

## Why This Matters

This technique represents a broader trend in modern CSS - taking JavaScript-dependent patterns and making them declarative. We've seen this with:
- CSS Grid replacing complex layout JavaScript
- CSS custom properties reducing JS-based theming
- Container queries eliminating resize listeners

Now scrollspy joins that list. The web platform keeps getting better at handling the things we commonly need to do, with better performance and fewer moving parts.

Great work as always, Sara! 🎉