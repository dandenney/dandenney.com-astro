---
path: "/posts/front-end-dev/sass-and-compass-pairing-with-michael-parenteau"
title: Sass and Compass Pairing with Michael Parenteau
summary: Big thank you to Michael for showing me the ropes
pubDate: "2012-06-17"
codeHighlighting: true
tags:
  - front-end-dev
---

[Michael Parenteau](http://michaelparenteau.com), aka [@parenteau](http://twitter.com/parenteau) recently offered to show me the ropes of getting started with Sass and Compass on a project. He works for [Relevance](http://thinkrelevance.com) and does some really fun side projects so I jumped at the chance.

Prior to this, I have overanalyzed preprocessors. I've probably read 30 articles, glazed over at least that many repos of code and gotten a feel for which type my favorite people are using, if any. My only real experience was converting files to .scss so I could smoosh them with [Codekit](http://incident57.com/codekit) I had decided to go with Sass with the SCSS syntax and to master it before jumping into Compass. Michael changed all that pretty quickly.

I knew that my end goal was to get to Compass too, but I wanted to be sure I could write my own Sass mixins competently first. In this case, though, I think I'll learn more by using Compass and studying the [reference](http://compass-style.org/reference/compass) to learn how to write solid mixins. Plus, there are just so many great design patterns in there.

One big win is the automated handling of vendor prefixes. As a disclaimer, I don't write vendor prefixes. I either copy and paste them from things like [CSS3Please.com](http://css3please.com) or use [Prefixr](http://prefixr.com) (I've recently had loads of trouble with Prefixr if I have the super cross-browser gradient CSS in my file, though.) So, Compass helps by writing all of the prefixes for me. I can just write something that makes sense to me and then it goes and gets all the stuff to make me a competent front-end dev.

Here is a really basic conversion of code that is just so much more friendly to write. This button code was from this repo: [CSS3 Buttons](https://github.com/ubuwaits/css3-buttons)

    button {
      background-color: #7fbf4d;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#7fbf4d), to(#63a62f));
      /* Saf4+, Chrome */
      background-image: -webkit-linear-gradient(top, #7fbf4d, #63a62f);
      background-image: -moz-linear-gradient(top, #7fbf4d, #63a62f);
      background-image: -ms-linear-gradient(top, #7fbf4d, #63a62f);
      background-image: -o-linear-gradient(top, #7fbf4d, #63a62f);
      background-image: linear-gradient(top, #7fbf4d, #63a62f);
      border: 1px solid #63a62f;
      border-bottom: 1px solid #5b992b;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      -webkit-box-shadow: inset 0 1px 0 0 #96ca6d;
      -moz-box-shadow: inset 0 1px 0 0 #96ca6d;
      -ms-box-shadow: inset 0 1px 0 0 #96ca6d;
      -o-box-shadow: inset 0 1px 0 0 #96ca6d;
      box-shadow: inset 0 1px 0 0 #96ca6d;
      color: #fff;
      float: right;
      font-size: 1.5em;
      line-height: 1;
      padding: .75em 0 .8em 0;
      text-align: center;
      text-shadow: 0 -1px 0 #4c9021;
      width: 150px; }

    button.more_info {
      font-size: 1em;
      padding: .25em 0 .4em 0; }

     button:hover {
        background-color: #76b347;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#76b347), to(#5e9e2e));
        /* Saf4+, Chrome */
        background-image: -webkit-linear-gradient(top, #76b347, #5e9e2e);
        background-image: -moz-linear-gradient(top, #76b347, #5e9e2e);
        background-image: -ms-linear-gradient(top, #76b347, #5e9e2e);
        background-image: -o-linear-gradient(top, #76b347, #5e9e2e);
        background-image: linear-gradient(top, #76b347, #5e9e2e);
        -webkit-box-shadow: inset 0 1px 0 0 #8dbf67;
        -moz-box-shadow: inset 0 1px 0 0 #8dbf67;
        -ms-box-shadow: inset 0 1px 0 0 #8dbf67;
        -o-box-shadow: inset 0 1px 0 0 #8dbf67;
        box-shadow: inset 0 1px 0 0 #8dbf67;
        cursor: pointer; }

    button:active {
        border: 1px solid #5b992b;
        border-bottom: 1px solid #538c27;
        -webkit-box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee;
        -moz-box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee;
        -ms-box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee;
        -o-box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee;
        box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee; }

That's a whole lotta CSS, huh? Think I'm ever going back in there to pull those vendor prefixes once they're approved? Not likely. However, Compass stays on top of them so if I ever recompile the file it will irradicate unnecessary ones for me. Again, making me better than I am.

Now, we did some extra stuff to the new version of the button but here is the new code:

    button {
      @include button(#7fbf4d, #63a62f, 3px, 1px solid #63a62f);
      @include box-shadow(inset 0 1px 0 0 #96ca6d);
      border-bottom: 1px solid #5b992b;
      color: #fff;
      float: right;
      font-size: 1.5em;
      line-height: 1;
      padding: .75em 0 .8em 0;
      text-shadow: 0 -1px 0 #4c9021;
      width: 150px;
      &:hover {
        @include box-shadow(inset 0 1px 0 0 #8dbf67);
      }
      &:active {
        @include box-shadow(inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee);
        border: 1px solid #5b992b;
          border-bottom: 1px solid #538c27;
      }
    }

Not only is that more concise, it is waaaay more powerful and extendable. We made our own button mixin that sets the things that will be on every button to be written right away. I won't go into the full breakdown here but this is the kind of code that I want to be writing. Lean and mean, man.

Now, Compass writes all of the boring stuff for me and this is the end result:

    button {
      background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #7fbf4d), color-stop(100%, #63a62f));
      background-image: -webkit-linear-gradient(#7fbf4d, #63a62f);
      background-image: -moz-linear-gradient(#7fbf4d, #63a62f);
      background-image: -o-linear-gradient(#7fbf4d, #63a62f);
      background-image: -ms-linear-gradient(#7fbf4d, #63a62f);
      background-image: linear-gradient(#7fbf4d, #63a62f);
      *zoom: 1;
      filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FF7FBF4D', endColorstr='#FF63A62F');
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      border: 1px solid #63a62f;
      text-align: center;
      -webkit-box-shadow: inset 0 1px 0 0 #96ca6d;
      -moz-box-shadow: inset 0 1px 0 0 #96ca6d;
      box-shadow: inset 0 1px 0 0 #96ca6d;
      border-bottom: 1px solid #5b992b;
      color: #fff;
      float: right;
      font-size: 1.5em;
      line-height: 1;
      padding: .75em 0 .8em 0;
      text-shadow: 0 -1px 0 #4c9021;
      width: 150px;
    }
    button:hover {
      background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #72b240), color-stop(100%, #61a22e));
      background-image: -webkit-linear-gradient(#72b240, #61a22e);
      background-image: -moz-linear-gradient(#72b240, #61a22e);
      background-image: -o-linear-gradient(#72b240, #61a22e);
      background-image: -ms-linear-gradient(#72b240, #61a22e);
      background-image: linear-gradient(#72b240, #61a22e);
      *zoom: 1;
      filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FF72B240', endColorstr='#FF61A22E');
      cursor: pointer;
    }
    button:hover {
      -webkit-box-shadow: inset 0 1px 0 0 #8dbf67;
      -moz-box-shadow: inset 0 1px 0 0 #8dbf67;
      box-shadow: inset 0 1px 0 0 #8dbf67;
    }
    button:active {
      -webkit-box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee;
      -moz-box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee;
      box-shadow: inset 0 0 8px 4px #548c29, 0 1px 0 0 #eeeeee;
      border: 1px solid #5b992b;
      border-bottom: 1px solid #538c27;
    }

I want to give a huge thank you to Michael. We paired for a little over 2 hours but he also showed me a ton and gave me a breakdown of Ribbons. Plus, showed off a rad deploy script he set up. He gave me the nudge I needed to really dive into this stuff and learn it. I'm going to be a much better developer for it, too. If you want a nudge, he really digs sharing so you might want to [@ him on Twitter](http://twitter.com/parenteau) and see if he'd like to pair with you when he has some time.
