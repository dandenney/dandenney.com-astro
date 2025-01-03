---
path: "/posts/true-crime/mapping-the-long-island-murder-victims"
cloudinaryThumb: posts/mapping-long-island-victims.png
title: "Mapping the Long Island Murder Victims"
summary: "A map of a series of unsolved murders in Long Island from the 1990s until the 2010s"
pubDate: "2020-03-07"
tags:
  - true-crime
---

<style>
  html {
    overflow-x: unset;
  }

  #scrolly {    
    margin-block-start: 1.5rem;
    margin-left: 50%;
    max-width: 100rem;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    transform: translateX(-50%);
    width: 100vw;
  }

  #scrolly + .longform > p:first-of-type {
    margin-block-start: 1.5rem !important;
  }

  .story {
    padding: 0;
    position: relative;
  }

  .step {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
    padding: 1rem;
  }

  .step:last-child {
    margin: 0;
  }

  .right {
    align-items: flex-end;
  }

  figure {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    width: 100%;
    margin: 0;
    top: 80px !important;
    transform: translate3d(0, 0, 0);
    z-index: 0;
  }

  .details {
    max-width: 468px;
  }

  .details img {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 5px 5px 10px rgba(202, 210, 211, 0.5);
    border: 0.5rem solid rgba(255, 255, 255, 0.9);
    display: block;
    margin: 0 auto;
    min-width: 1px;
    position: relative;
    width: 220px !important;
    z-index: 1;
  }

  .details p {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 5px 5px 10px rgba(202, 210, 211, 0.5);
    font-size: 1rem;
    margin: 0 1rem;
    padding: 1rem;
  }

  .details h3 {
    background: rgba(181, 31, 36, 0.9);
    box-shadow: 5px 5px 10px rgba(202, 210, 211, 0.5);
    color: #ffffff;
    margin: -1rem 0 0;
    padding: 1rem;
    font-size: 1.125rem;
    -webkit-text-fill-color: #ffffff;
  }

  .dark .details p,
  .dark .details h3 {
    background: rgba(15, 23, 42, 0.9);
  }

  .dark .details h3 {
    -webkit-text-fill-color: #ffffff;
  }

  .details img + h3 {
    padding-top: 1.5rem;
  }

  .text-container {
    margin: 0 auto;
    max-width: 700px;
    padding: 2rem;
  }

  h1 {
    margin-top: 0;
    text-align: center;
  }

  .update p:first-of-type {
    margin-top: 0 !important;
  }

  .update + p {
    margin-block-start: 1.5rem !important;
  }

  @media screen and (min-width: 768px) {
    .details h3 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1000px) {
    .details h3 {
      font-size: 28px;
    }
  }

  #map { position: absolute; top: 0; bottom: 0; width: 100%; }

  header > img {
    display: none !important;
  }

  .update {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }

  .update p:last-of-type {
    margin-bottom: 0;
  }

  .story {
    z-index: 10;
  }

</style>

<div>

<div class="update">

On July 13, 2023, there was an arrest in relation to the Gilgo Four. [Rex Heuermann](https://www.cnn.com/2023/07/14/us/gilgo-beach-murders-suspect-arrest/index.html) was arrested and is currently facing charges for three of the murders, with ongoing work in the Maureen Brainard-Barnes investigation.

The [bail documentation](https://drive.google.com/file/d/1UAyHSO_aEYDE4aE_ajIoxxxRKccALx-u/view) has extensive information about the evidence against him, including a list of searches and articles that were viewed. In what I can only describe as surreal, this article is in that list.

On June 6, 2024, Suffolk County confirmed that Rex Heuermann was [charged with two more of the murders](https://www.cnn.com/2024/06/06/us/gilgo-beach-killings-rex-heuermann-indictment/index.html): Jessica Taylor and Sandra Costilla.

On December 17, 2024, it was announced that he is charged with the murder of Valerie Mack. [Gilgo Beach serial killer suspect Rex Heuermann charged in killing of seventh woman
](https://www.cnn.com/2024/12/17/us/gilgo-beach-killings-rex-heuermann-charges/index.html)

</div>

"The Long Island Serial Killer," aka "LISK," is a misnomer. The more that you look at Long Island from the early 90s until the 2010s, the worse it gets. [Joel Rifkin](https://en.wikipedia.org/wiki/Joel_Rifkin) lived in the Hempstead area and killed at least nine, but up to seventeen people from 1989 - 1993. [Robert Shulman](<https://en.wikipedia.org/wiki/Robert_Shulman_(serial_killer)>) killed at least five people from 1991 - 1996 while living in the Hicksville area.

There is another person guilty of two murders in the early 90s, [John Bittrolff](https://en.wikipedia.org/wiki/John_Bittrolff). While two murders don't qualify him as a serial killer, he is a suspect in a third. If he were proven guilty of that, he would meet the technical classification of three. More importantly, he wasn't connected and arrested for the two murders until 2014. There are twenty years between the last murder he is convicted of and his arrest.

## There are ten more murder victims, and one highly debated death, without answers.

While authorities have named John Bittrolff as a person of interest in the other murders, there are enough differences in them that many people believe that one to three killers are responsible for them. It's hard to know what the local authorities believe or are investigating because they release mixed messages. The Long Island Serial Killers is likely more accurate, but they only matter because we want to bring them to justice. The most important thing that we can do is find the answer to who some of the victims are and ensure that the killers of the others are apprehended, to bring the next step of recovery to their loved ones.

The map below is going to focus on specific details, mostly the location of the victims. It is essential to remember that they are people, like you and me. Their stories deserve to be told, and they have been. If you haven't yet heard the stories of the Long Island victims, I strongly recommend watching [The Killing Season](https://www.aetv.com/shows/the-killing-season), where you'll meet family and friends of many of the people mentioned below. Their stories have also been covered in podcasts, on [True Crime Garage](https://truecrimegarage.com/podcast/blog/long-island-serial-killer-04), [Thinking Sideways](http://www.thinkingsidewayspodcast.com/the-long-island-serial-killer/), [Voices from Gilgo](https://www.voicesfromgilgo.com), and on the Youtube show [BrainScratch](https://www.youtube.com/watch?v=li3jTbkhBuw&feature=youtu.be).

The sad truth is that these victims are part of a series of circumstances that are popular in unsolved homicides. These cases include lackluster police work with [criminal behavior](https://www.nytimes.com/2016/11/03/nyregion/james-burke-ex-suffolk-county-police-chief-is-sentenced.html) amongst those involved, a high-risk lifestyle that leads to gaps of time in missing person reports, and the need for public pressure to prioritize the cases.

The following is a timeline of events, with their locations, intending to show how the circumstances may be related.

<section id="scrolly">
  <figure>
    <div id="map"></div>
  </figure>

<ol class="relative z-10 story">
    <li class="step" data-step="1" data-zoom="9">
      <div class="details">
        <h3>This part of the story begins on November 1, 1993</h3>
        <p>On that evening, a woman had been seen hitchhiking in East Patchogue, NY. Her name was Rita Tangredi.</p>
      </div>
    </li>
    <li class="step" data-step="2" data-zoom="9">
      <div class="details">
        <img alt="Rita Tangredi" src="/posts/true-crime/mapping-the-long-island-murder-victims/rita-tangredi.jpg" width="220" />
        <h3>Rita Tangredi's remains were found in wooded area on November 2, 1993</h3>
        <p>The details are an important part of identifying her killer: she had been beaten, strangled, a specific item of her clothing was missing, and her body was found in a distinct pose, and wood chips were used to cover her.</p>
      </div>
    </li>
    <li class="step" data-step="3" data-zoom="9">
      <div class="details">
        <img alt="Sandra Costilla" src="/posts/true-crime/mapping-the-long-island-murder-victims/sandra-costilla.jpg" width="220" />
        <h3>Sandra Costilla's remains were found on November 20, 1993</h3>
        <p>She was found in a wooded area by a group of hunters and she was strangled, but reports don't state that the same level of violence was present as with Rita Tangredi.</p>
      </div>
    </li>
    <li class="step right" data-step="4" data-zoom="9">
      <div class="details">
        <img alt="Colleen McNamee" src="/posts/true-crime/mapping-the-long-island-murder-victims/colleen-mcnamee.jpg" width="220" />
        <h3>Colleen McNamee was last seen on January 5, 1994</h3>
        <p>She was getting into a small blue car at the Blue Dawn Diner.</p>
      </div>
    </li>
    <li class="step right" data-step="5" data-zoom="9">
      <div class="details">
        <h3>Colleen's remains were found on January 30, 1994</h3>
        <p>Similarly to Rita Tangredi, she was found in the woods. She, too, was beaten, strangled, and left in the same pose.</p>
      </div>
    </li>
    <li class="step" data-step="6" data-zoom="9">
      <div class="details">
        <img alt="Karen Vergata" src="/posts/true-crime/mapping-the-long-island-murder-victims/karen-vergata.jpg" width="220" />
        <h3>Partial remains of Karen Vergata are found on April 20, 1996</h3>
        <p>Along Blue Point Beach, people found her legs wrapped in plastic. (Formerly known as Jane Doe No. 7)</p>
      </div>
    </li>
    <li class="step right" data-step="7" data-zoom="9">
      <div class="details">
        <img alt="Peaches tattoo" src="/posts/true-crime/mapping-the-long-island-murder-victims/jane-doe-no-3.jpg" width="220" />
        <h3>Partial remains of Jane Doe No. 3, aka "Peaches", are found on June 28, 1997</h3>
        <p>Authorities released the information about her tattoo in hopes of identifying her, but there still is not an official match. Her torso was discovered in a green Rubbermaid container.</p>
      </div>
    </li>
    <li class="step" data-step="8" data-zoom="9">
      <div class="details">
        <img alt="Valerie Mack sketch" src="/posts/true-crime/mapping-the-long-island-murder-victims/valerie-mack.jpg" width="220" />
        <h3>Partial remains of Valerie Mack are found on November 19, 2000</h3>
        <p>Her torso was found, wrapped in garbage bags. In addition to her head and hands like the others, her right foot was removed, assumedly to hide a distinguishing mark.</p>
      </div>
    </li>
    <li class="step" data-step="9" data-zoom="9">
      <div class="details">
        <img alt="Jessica Taylor" src="/posts/true-crime/mapping-the-long-island-murder-victims/jessica-taylor.jpg" width="220" />
        <h3>Partial remains of Jessica Taylor are found on July 26, 2003</h3>
        <p>She was on a plastic sheet, and the killer had removed her head, hands, and attempted to obscure a tattoo.</p>
      </div>
    </li>
    <li class="step right" data-step="10" data-zoom="9">
      <div class="details">
        <img alt="Maureen Brainard-Barnes" src="/posts/true-crime/mapping-the-long-island-murder-victims/maureen-brainard-barnes.jpg" width="220" />
        <h3>Maureen Brainard-Barnes is last seen by a friend on July 9, 2007</h3>
        <p>Her friend, Sara, left her at the Super 8 Midtown. Maureen said that she would stay until that Wednesday, July 11.</p>
      </div>
    </li>
    <li class="step right" data-step="11" data-zoom="9">
      <div class="details">
        <img alt="Melissa Barthelemy" src="/posts/true-crime/mapping-the-long-island-murder-victims/melissa-barthelemy.jpg" width="220" />
        <h3>Melissa Barthelemy is last seen by neighbors on July 10, 2009</h3>
        <p>The last known sighting of Melissa was her on her porch, talking on her phone.</p>
      </div>
    </li>
    <li class="step" data-step="12" data-zoom="9">
      <div class="details">
        <img alt="Shannan Gilbert" src="/posts/true-crime/mapping-the-long-island-murder-victims/shannan-gilbert.jpg" width="220" />
        <h3>Shannan Gilbert called 911 at 4:51 a.m. on May 1, 2010</h3>
        <p>She ran from a client's house and away from her driver, knocking on doors and calling 911. She went missing and searches for her led to many of the following events.</p>
      </div>
    </li>
    <li class="step" data-step="13" data-zoom="9">
      <div class="details">
        <img alt="Megan Waterman" src="/posts/true-crime/mapping-the-long-island-murder-victims/megan-waterman.jpg" width="220" />
        <h3>Megan Waterman is last seen on hotel camera footage on June 6, 2010</h3>
        <p>She had been staying at a motel, placing ads on Craiglist, and was last seen walking towards a gas station.</p>
      </div>
    </li>
    <li class="step right" data-step="14" data-zoom="9">
      <div class="details">
        <img alt="Amber Costello" src="/posts/true-crime/mapping-the-long-island-murder-victims/amber-lynn-costello.jpg" width="220" />
        <h3>Amber Costello was last seen on September 2, 2010</h3>
        <p>A friend, and roommate, walked her towards the car of a client, down the street from their home.</p>
      </div>
    </li>
    <li class="step right" data-step="15" data-zoom="9">
      <div class="details">
        <h3>Police find the remains of Melissa Barthelemy on December 11, 2010</h3>
        <p>A cadaver dog reacted and an officer found her partially decomposed remains, wrapped in burlap.</p>
      </div>
    </li>
    <li class="step right" data-step="16" data-zoom="9">
      <div class="details">
        <h3>Police find three more sets of remains on December 13, 2010</h3>
        <p>They were later identified to be Maureen Brainard-Barnes, Megan Waterman, and Amber Costello. Like Melissa, they were each in a burlap sack and spaced apart pretty evenly. The group became known as The Gilgo Four.</p>
      </div>
    </li>
    <li class="step" data-step="17" data-zoom="9">
      <div class="details">
        <h3>Police find Jessica Taylor's remains on March 29, 2011</h3>
        <p>Her skull and forearm were matched with her prior remains.</p>
      </div>
    </li>
    <li class="step" data-step="18" data-zoom="9">
      <div class="details">
        <h3>Police find three more sets of remains on April 4, 2011</h3>
        <p>One set of remains was later matched to Jane Doe No. 6</p>
      </div>
    </li>
    <li class="step right" data-step="19" data-zoom="9">
      <div class="details">
        <h3>Baby Doe is discovered as part of the group found on April 4, 2011</h3>
        <p>While she was laid close to one of the other victims, she was later found to be the daughter of Jane Doe No. 3, aka "Peaches". There were no signs of trauma.</p>
      </div>
    </li>
    <li class="step right" data-step="20" data-zoom="9">
      <div class="details">
        <img alt="John Doe" src="/posts/true-crime/mapping-the-long-island-murder-victims/john-doe-asian-male.jpg" width="220" />
        <h3>John Doe, aka "Asian Male", is discovered as part of the group on April 4, 2011</h3>
        <p>The only male victim in this group, he died of blunt-force trauma, and was wearing women's clothing.</p>
      </div>
    </li>
    <li class="step" data-step="21" data-zoom="9">
      <div class="details">
        <h3>Police find two more sets of remains on April 11, 2011</h3>
        <p>These remains were later matched to Karen Vergata and Jane Doe No. 3, aka "Peaches".</p>
      </div>
    </li>
    <li class="step right" data-step="22" data-zoom="9">
      <div class="details">
        <h3>Police find the remains of Shannan Gilbert on December 13, 2011</h3>
        <p>She was found in a marsh not far from where she had called 911. The findings of her autopsy have been debated, with the original ruling of "death by misadventure".</p>
      </div>
    </li>
    <li class="step" data-step="23" data-zoom="9">
      <div class="details">
        <h3>Police arrest John Bittrolff on July 21, 2014, for two of the murders</h3>
        <p>He lived in Manorville and DNA connected him to two of the victims, Rita Tangredi and Colleen McNamee.</p>
      </div>
    </li>
    <li class="step" data-step="24" data-zoom="9">
      <div class="details">
        <h3>John Bittrolff is convicted of the murders of Rita Tangredi and Colleen McNamee on July 5, 2017</h3>
        <p>There was physical evidence linking him to the two victims.</p>
      </div>
    </li>
    <li class="step" data-step="25" data-zoom="11">
      <div class="details">
        <h3>Rex Heuermann is charged with the murder of seven victims as of December 17, 2024</h3>
        <p>He has been charged with the murder of Sandra Costillo, Jessica Taylor, Amber Costello, Megan Waterman, Melissa Barthelemy,Maureen Brainard-Barnes, and Valerie Mack.</p>
      </div>
    </li>
    <li class="step" data-step="26" data-zoom="9"></li>
  </ol>
</section>

<div class="longform max-w-2xl mx-auto pb-16">

There are many more persons of interest and/or suspects in these cases. John Bittrolff is the only one included because he is the only one with any charges against him. To be clear, the Suffolk County District Attorney has said ["There is no evidentiary or investigative link between this case and Gilgo."](https://pix11.com/2017/09/12/convicted-killer-may-be-tied-to-gilgo-beach-murders-prosecutor)

## Yet to be solved

One of the many reasons that these cases are yet to be solved is the mix of behaviors by the killer. Historically speaking, the action taken by a killer maintains some consistency and/or escalates over time. It is vital to remember that the public does not have all of the information about the crimes.

What is known is that the early victims were subjected to aggressive violence, strangled, and were left in a specific pose. The next four victims (by order of when they were found) were dismembered and discovered in multiple locations. The Gilgo Four follow a different pattern, in that they were found in a single place and were all laid to rest in a similar way. The outliers in the victims who were found in the ensuing searches are "John Doe" and "Baby Doe". "John Doe" was subject to violence, but found in a single location, and "Baby Doe" was found in a single location with no indication of violence.

The patterns changed, which only leads to questions. Was there one killer who escalated over time and then de-escalated? Or were there multiple killers acting in the same area? Multiple peole killing at the same time has happened in Long Island, as Joel Rifkin, Robert Shulman, and John Bittrolff were each killing people between 1991 and 1993. As for whether or not a single killer would change patterns significantly over time, another killer gives us some insight into that. There's a dramatization in Mindhunters of Robert Ressler's interview with Ed Kemper, where Kemper says, "It seems to me everything you know about serial killers has been gleaned from the ones who've been caught." We won't know the answers to the questions until the killer of at least one of the victims is apprehended.

If you'd like more information around the involved cases, I have compiled more details and links about [The Gilgo Four](https://www.truecrimeresearchers.com/cases/the-gilgo-four), the [Long Island Victims](https://www.truecrimeresearchers.com/cases/long-island-victims), and [Shannan Gilbert](https://www.truecrimeresearchers.com/cases/shannan-gilbert).

If you have any information about these victims, please share on the [Gilgo News tip site](https://www.gilgonews.com/SubmitATip).

</div>

</div>

<script src="https://unpkg.com/d3@5.9.1/dist/d3.min.js"></script>
<script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>
<script src="/js/posts/true-crime/mapping-the-long-island-murder-victims/stickyfill.min.js"></script>
<script src="/js/posts/true-crime/mapping-the-long-island-murder-victims/scrollama.min.js"></script>
<script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />
<script src="/js/posts/true-crime/mapping-the-long-island-murder-victims/main.js"></script>
