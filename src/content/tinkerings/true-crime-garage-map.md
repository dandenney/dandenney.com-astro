---
title: "Map of True Crime Garage Episodes"
pubDate: 2020-02-17
thumb: "v1680746810/tinkerings/tcg-map.png"
thumbAlt: "Screenshot of a map with a lot of circles in the US"
summary: A map with a location from each episode of True Crime Garage
tags:
  - tinkerings
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet">

<style>

html {
  scroll-snap-type: y mandatory;
}

body {
  background-color: #100e11;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% auto;
  color: #f0eeeb;
  font-family: 'Montserrat', Verdana;
  font-size: 1.25rem;
  line-height: 1.4;
}

section {
  scroll-snap-align: start;
  min-height: 100dvh;
}

h1, h2, h3, h4, h5 {
  font-weight: 900;
}

#map {
  height: 50vh;
}

img {
  max-width: 100%;
}

.listings {
  font-size: 1rem;
  margin-top: 1rem;
  overflow-y: scroll;
  height: 200px;
  width: 100%;
}

.sort {
  padding: 1rem;
}

.map {
  flex-grow: 1;
}

ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.intro a,
.post-body a,
.item a,
.mapboxgl-popup-content a,
.scroll {
  color: #ff5960;
  transition: opacity 0.3s;
}

.intro a:hover, a:active, a:focus,
.post-body a:hover, a:active, a:focus,
.item a:hover, a:active, a:focus,
.mapboxgl-popup-content a:hover, a:active, a:focus,
.scroll {
  opacity: 0.65;
}

.post-body {
  margin: 0 auto;
  max-width: 700px;
  padding: 2rem;
}

h1,
h3 {
  margin-top: 0;
  font-weight: 900;
}

h3 {
  color: #ffffff;
  margin-bottom: 0;
}

h1 {
  font-size: 1.5rem;
}

h1 span {
  color: #ffffff;
  display: block;
  font-size: 2rem;
}

.item {
  padding: 1rem;
  transition: box-shadow 0.3s;
}

.item:nth-child(even) {
  background-color: #211e21;
}

.item.active {
  box-shadow: inset 0 0 0 1px #f0eeeb;
}

.item p {
  margin: 0.5rem 0;
}

.item p + p {
  margin-top: 0.25rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  width: 100%;
}

.title {
  display: flex;
  flex-direction: column;
}

.fly {
  align-items: center;
  align-self: flex-end;
  background: linear-gradient(to bottom, #ff5960, #be082c);
  border: 1px solid #980120;
  border-radius: 1rem;
  box-shadow: none;
  color: #ffffff;
  display: flex;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  height: 1.75rem;
  justify-content: center;
  width: 1.75rem;
  transition: transform 0.3s;
  outline: #443f44;
}

.fly:active,
.fly:focus,
.fly:hover {
  transform: scale(1.1);
}

.fly svg {
  height: 1rem;
  width: 1rem;
}

.scroll {
  font-size: 1.5rem;
}

.u-ta-c {
  margin-top: 2rem;
  text-align: center;
}

.radios {
  display: flex;
  margin-top: 1rem;
}

.fieldset {
  background-color: #201e21;
  border-radius: 1rem;
  display: flex;
  padding: 0.25rem;
  width: 100%;
}

.fieldset > * {
  width: 50%;
}

h5 {
  margin: 0;
}

p {
  font-size: 1rem;
}

label {
  border-radius: 4px;
  border: 1px solid transparent;
  display: block;
  text-align: center;
}

input {
  display: none;
}

label {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0;
}

input:checked + label {
  background: linear-gradient(to bottom, #ff5960, #be082c);
  border: 1px solid #980120;
  border-radius: 1rem;
}

svg {
  height: auto;
  width: 100%;
}

.mapboxgl-popup-content {
  background: #2a262a !important;
  color: #ffffff;
  font-family: 'Montserrat', Verdana;
  font-size: 1rem;
  padding: 1rem !important;
}

.mapboxgl-popup-content p {
  margin-block: 0.5rem;
}

.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
  border-top-color: #2a262a !important;
}

.mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
  border-bottom-color: #2a262a !important;
}

.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
  border-right-color: #2a262a !important;
}

.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
  border-left-color: #2a262a !important;
}

.mapboxgl-popup-close-button {
  padding: 0.5rem;
}

.mapboxgl-popup-content-wrapper {
  padding: 1%;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  h1 span {
    color: #ffffff;
    display: block;
    font-size: 2rem;
  }

  .listings {
    height: 400px;
  }
}

@media screen and (min-width: 1200px) {
  .intro {
    align-items: flex-start;
    display: flex;
  }

  .intro img {
    width: 70%;
    order: 1;
  }

  .intro div {
    margin-right: -4rem;
    padding-left: 1rem;
    position: relative;
    z-index: 1;
  }

  .flex {
    display: flex;
    height: 100vh;
    padding: 1rem;
  }

  #map {
    height: 100vh;
    order: 1;
  }

  .listings {
    font-size: 1rem;
    margin-top: 1rem;
    overflow-y: scroll;
    height: calc(100vh - 132px);
    width: 300px;
  }
}

@media screen and (min-width: 1400px) {
  .intro div {
    margin-right: -8rem;
  }

  .intro img {
    width: 75%;
  }
}

.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.intro * + p,
.post-body * + p {
  margin-block-start: 1rem;
}

.intro h2,
.post-body h2,
.post-body h3 {
  margin-block-start: 1.5rem;
}

</style>

<section class="intro">

<img alt="Nic and The Captain from True Crime Garage" src="/tinkerings/true-crime-garage-map/true-crime-garage.jpg" />

<div>

<h1 class="u-ta-c">Locations of <span>True Crime Garage</span> Episodes</h1>

[True Crime Garage](https://truecrimegarage.com) is a podcast that started in November 2015. I came across it sometime in 2016, and it quickly became my fave. Nic and The Captain have a great mix of personality and skills, which make for an entertaining show as they share vital information about many cases that need more attention. This map is a way of honoring the work that they've done.

## The Data

This map shows one location from each episode that covers a specific case. Episodes that covered multiple cases or were more about the podcast were skipped. These are listed in the [anomalies section](#anomalies) section.

It's important to know that many cases have multiple victims and that even ones with a single victim can have multiple important locations. I'd love to map them all and maybe one day I will, but it will be a gigantic task.

Some episodes also span large amounts of time, even decades. The mapped location and the year is based on the earliest known event in an episode.

All of the data was compiled via a combination of listening, Google searches, and multiple coordinates helpers. The data is an an [Airtable database](https://airtable.com/shrf6r9IRsfjfsS9r), including notes about the location choices. The point accuracy is as good as the tools that I used and the available information.

</div>

</section>

<section class="flex">

  <div class="map" id="map"></div>
  <div class="sort">
  <h5>Sort by:</h5>
  <div class="radios">
  <div class="fieldset">
  <input type="radio" id="release" name="sortType" value="release"
  checked>
  <label for="release">Release</label>
  <input type="radio" id="event" name="sortType" value="event">
  <label for="event">Event</label>
  </div>
  </div>

  <div class="radios">
  <div class="fieldset">
  <input type="radio" id="newest" name="sortRange" value="newest"
  checked>
  <label for="newest">Newest</label>
  <input type="radio" id="oldest" name="sortRange" value="oldest">
  <label for="oldest">Oldest</label>
  </div>
  </div>

  <div class="listings" id="list"></div>

  </div>
</section>

<section class="post-body">

## First Event Years

Again, this only covers the initial event, but this gives an idea of the range of years that the podcast has covered as well as the number of episodes in ranges of event years. One of the challenges that they often share in with creating episodes is the availability of information. It seems that cases within the past 15 years have enough available info to cover.

<!-- https://codepen.io/dandenney/pen/vYOrxbZ -->

<svg height="360" width="600" role="figure" tabindex="0"><title>Histogram looking at the distribution of humidity in 2016</title><g style="transform: translate(50px, 30px);"><g tabindex="0" role="list" aria-label="histogram bars"><g tabindex="0" role="listitem" aria-label="There were 1 days between 1940 and 1945 humidity levels"><rect x="0.5" y="273" width="27.888888888888886" height="7" fill="#ff5960"></rect><text x="14.444444444444443" y="268" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">1</text></g><g tabindex="0" role="listitem" aria-label="There were 2 days between 1945 and 1950 humidity levels"><rect x="29.388888888888886" y="266" width="27.888888888888886" height="14" fill="#ff5960"></rect><text x="43.33333333333333" y="261" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">2</text></g><g tabindex="0" role="listitem" aria-label="There were 2 days between 1950 and 1955 humidity levels"><rect x="58.27777777777777" y="266" width="27.888888888888886" height="14" fill="#ff5960"></rect><text x="72.22222222222221" y="261" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">2</text></g><g tabindex="0" role="listitem" aria-label="There were 3 days between 1955 and 1960 humidity levels"><rect x="87.16666666666666" y="259" width="27.888888888888886" height="21" fill="#ff5960"></rect><text x="101.1111111111111" y="254" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">3</text></g><g tabindex="0" role="listitem" aria-label="There were 4 days between 1960 and 1965 humidity levels"><rect x="116.05555555555554" y="252" width="27.888888888888914" height="28" fill="#ff5960"></rect><text x="130" y="247" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">4</text></g><g tabindex="0" role="listitem" aria-label="There were 7 days between 1965 and 1970 humidity levels"><rect x="144.94444444444446" y="231" width="27.888888888888857" height="49" fill="#ff5960"></rect><text x="158.88888888888889" y="226" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">7</text></g><g tabindex="0" role="listitem" aria-label="There were 15 days between 1970 and 1975 humidity levels"><rect x="173.83333333333331" y="175" width="27.888888888888914" height="105" fill="#ff5960"></rect><text x="187.77777777777777" y="170" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">15</text></g><g tabindex="0" role="listitem" aria-label="There were 16 days between 1975 and 1980 humidity levels"><rect x="202.72222222222223" y="168" width="27.888888888888857" height="112" fill="#ff5960"></rect><text x="216.66666666666666" y="163" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">16</text></g><g tabindex="0" role="listitem" aria-label="There were 19 days between 1980 and 1985 humidity levels"><rect x="231.6111111111111" y="147" width="27.888888888888914" height="133" fill="#ff5960"></rect><text x="245.55555555555554" y="142" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">19</text></g><g tabindex="0" role="listitem" aria-label="There were 16 days between 1985 and 1990 humidity levels"><rect x="260.5" y="168" width="27.888888888888914" height="112" fill="#ff5960"></rect><text x="274.44444444444446" y="163" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">16</text></g><g tabindex="0" role="listitem" aria-label="There were 23 days between 1990 and 1995 humidity levels"><rect x="289.3888888888889" y="119.00000000000001" width="27.888888888888914" height="161" fill="#ff5960"></rect><text x="303.33333333333337" y="114.00000000000001" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">23</text></g><g tabindex="0" role="listitem" aria-label="There were 18 days between 1995 and 2000 humidity levels"><rect x="318.2777777777778" y="154" width="27.8888888888888" height="126" fill="#ff5960"></rect><text x="332.22222222222223" y="149" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">18</text></g><g tabindex="0" role="listitem" aria-label="There were 24 days between 2000 and 2005 humidity levels"><rect x="347.16666666666663" y="112" width="27.888888888888914" height="168" fill="#ff5960"></rect><text x="361.1111111111111" y="107" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">24</text></g><g tabindex="0" role="listitem" aria-label="There were 34 days between 2005 and 2010 humidity levels"><rect x="376.05555555555554" y="42.00000000000001" width="27.888888888888914" height="238" fill="#ff5960"></rect><text x="390" y="37.00000000000001" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">34</text></g><g tabindex="0" role="listitem" aria-label="There were 36 days between 2010 and 2015 humidity levels"><rect x="404.94444444444446" y="27.999999999999993" width="27.888888888888914" height="252" fill="#ff5960"></rect><text x="418.8888888888889" y="22.999999999999993" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">36</text></g><g tabindex="0" role="listitem" aria-label="There were 35 days between 2015 and 2020 humidity levels"><rect x="433.83333333333337" y="35" width="27.8888888888888" height="245" fill="#ff5960"></rect><text x="447.77777777777777" y="30" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">35</text></g><g tabindex="0" role="listitem" aria-label="There were 3 days between 2020 and 2025 humidity levels"><rect x="462.7222222222222" y="259" width="27.888888888888914" height="21" fill="#ff5960"></rect><text x="476.66666666666663" y="254" fill="#f0eeeb" font-size="12px" role="presentation" aria-hidden="true" style="text-anchor: middle;">3</text></g><g tabindex="0" role="listitem" aria-label="There were 0 days between 2025 and 2030 humidity levels"><rect x="491.6111111111111" y="280" width="27.888888888888914" height="0" fill="#ff5960"></rect></g></g><g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" class="axis" style="transform: translateY(280px);"><path class="domain" stroke="currentColor" d="M0.5,6V0.5H520.5V6"></path><g class="tick" opacity="1" transform="translate(0.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,940</text></g><g class="tick" opacity="1" transform="translate(58.27777777777777,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,950</text></g><g class="tick" opacity="1" transform="translate(116.05555555555554,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,960</text></g><g class="tick" opacity="1" transform="translate(173.83333333333331,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,970</text></g><g class="tick" opacity="1" transform="translate(231.6111111111111,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,980</text></g><g class="tick" opacity="1" transform="translate(289.3888888888889,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">1,990</text></g><g class="tick" opacity="1" transform="translate(347.16666666666663,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">2,000</text></g><g class="tick" opacity="1" transform="translate(404.94444444444446,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">2,010</text></g><g class="tick" opacity="1" transform="translate(462.7222222222222,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">2,020</text></g><g class="tick" opacity="1" transform="translate(520.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em" role="presentation" aria-hidden="true">2,030</text></g><text x="260" y="40" fill="#f0eeeb" role="presentation" aria-hidden="true" style="font-size: 1.4em;">Years</text></g></g></svg>

## Anomalies

While many of the cases have multiple locations, most are focused on a general area. The primary exception is [Murdered Joggers /// Karina Ventrano & Venessa Marcotte](https://truecrimegarage.com/home/blog/murdered-joggers-karina-ventrano-venessa-marcotte), which compares the murders of joggers in New York and Massachusetts. For this one, I mapped Karina Ventrano's location because her attack was first.

### Skipped Episodes

These were skipped, because they cover a range of cases or podcast-specific info.

- [Off The Record /// 155 /// CrimeCon 2022](https://www.truecrimegarage.com/home/blog/off-the-record-155-crimecon-2022)
- [Best of 2021 ////// 546](https://www.truecrimegarage.com/home/blog/best-of-2021-546)
- [Must Watch True Crime ////// 545](https://www.truecrimegarage.com/home/blog/must-watch-true-crime-545)
- [Garage Party /// 499 /// 500](https://truecrimegarage.com/home/blog/garage-party-499-500)
- [The Very Best of True Crime Garage ////// 453](https://truecrimegarage.com/home/blog/the-very-best-of-true-crime-garage-453)
- [Best of 2020 ////// 452](https://truecrimegarage.com/home/blog/best-of-2020-452)
- [Mind Hunter: John Douglas /// 445 /// 446 ](https://truecrimegarage.com/home/blog/mind-hunter-john-douglas-445-446)
- [Must See True Crime /// 420 ](https://truecrimegarage.com/home/blog/must-see-true-crime-420)
- [John Douglas - The Mind Hunter ////// 302](https://truecrimegarage.com/home/blog/john-douglas-the-mind-hunter-302)
- [Must See True Crime ////// 197](https://truecrimegarage.com/home/blog/must-see-true-crime-197)
- [Most Wanted /// 130 /// 131](https://truecrimegarage.com/home/blog/most-wanted-130-131-2ec8209d-b3aa-4807-80f2-84833428b213)
- [Q&A ////// 109](https://truecrimegarage.com/home/blog/q-a-109)
- [Happy 100th Episode!!!](https://truecrimegarage.com/home/blog/happy-100th-episode)
- [Killing Season ////// 61](https://truecrimegarage.com/home/blog/killing-season-61)
- [Halloween Show ////// 59](https://truecrimegarage.com/home/blog/halloween-show-59)
- [TRUE CRIME GARAGE Q&A ////// 15](https://truecrimegarage.com/home/blog/true-crime-garage-q-a-15)
- [NYE 2015 /// TOP 5 ////// 08 ](https://truecrimegarage.com/home/blog/nye-2015-top-5-08)

</section>

<script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />
<script src="/js/tinkerings/true-crime-garage-map/main.js"></script>
