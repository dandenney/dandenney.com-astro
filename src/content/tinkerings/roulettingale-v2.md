---
thumb: "v1680747309/tinkerings/roulettingale-v2.png"
thumbAlt: "Screenshot of a visualization of roulette bets"
title: Roulettingale v2
date: 2015-02-10
summary: A deep dive into applying the Martingale betting system to roulette
tags:
  - tinkerings
---

<style>
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.group::after,.bucket::after{clear:both;content:"";display:table}.debug{background-color:pink !important}.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ir{background-color:transparent;border:0;overflow:hidden}.ir::before{content:"";display:block;width:0;height:150%}html{background:#fff;color:#535353;font-family:"merriweather", serif;font-size:18px;line-height:1.75}body{background:#fff;font-size:77%;font-weight:300}@media screen and (min-width: 44.44444em){body{font-size:100%}}ul,p{margin-bottom:1.11111em;margin-top:0}ul,li{list-style:none;padding:0}li{margin-bottom:0.55556em;margin-top:0}h1,.h1,h2,.h2,h3,.h3,h4,.h4{color:#535353;font-family:"merriweather", serif;font-weight:700;line-height:1.5;margin-bottom:0.27778em;margin-top:0}h1,.h1{font-size:200%}h2,.h2{font-size:150%}h3,.h3{font-size:125%}h4,.h4{font-size:110%}a{border-bottom:1px solid #fcf0f0;color:#b51f24;text-decoration:none}a:hover,a:focus{color:#df4247}strong{font-weight:900}img{height:auto;max-width:100%}.bucket--flag{display:table}.bucket--flag .bucket-content{vertical-align:middle}.bucket-content{display:table-cell;width:10000px}.bucket-media{float:left;margin-right:1.11111em}.bucket-media>img{display:block;max-width:none}.cell,.cell--s{margin-left:auto;margin-right:auto;max-width:56.88889em;position:relative}.cell--s{max-width:38.88889em}.row{overflow:hidden;padding:0 1.11111em}.row--a{background:#b51f24}.row--b{background:#bfbfbf}.well{margin-bottom:1.11111em;margin-top:1.11111em}.well--l{margin-bottom:2.22222em;margin-top:2.22222em}header{background:#fff;border-bottom:1px solid #d8d8d8;font-size:75%;padding-top:1.11111em;text-align:center}footer{border-top:1px solid #d8d8d8;font-size:75%;padding-top:1.11111em;text-align:center}.bch{background:#b51f24}.bci{background:#fff}.bcs{background:#bfbfbf}.db{display:block}.di{display:inline}.dib{display:inline-block}.dn{display:none}.maxs{margin:0.27778em}.mas{margin:0.55556em}.mam{margin:1.11111em}.mal{margin:2.22222em}.maxl{margin:4.44444em}.mbf{margin-bottom:0}.mbxs{margin-bottom:0.27778em}.mbs{margin-bottom:0.55556em}.mbm{margin-bottom:1.11111em}.mbl{margin-bottom:2.22222em}.mbxl{margin-bottom:4.44444em}.mhc{margin-left:auto;margin-right:auto}.mlf{margin-left:0}.mlxs{margin-left:0.27778em}.mls{margin-left:0.55556em}.mlm{margin-left:1.11111em}.mll{margin-left:2.22222em}.mrf{margin-right:0}.mrxs{margin-right:0.27778em}.mrs{margin-right:0.55556em}.mrm{margin-right:1.11111em}.mrl{margin-right:2.22222em}.mtf{margin-top:0}.mtxs{margin-top:0.27778em}.mts{margin-top:0.55556em}.mtm{margin-top:1.11111em}.mtl{margin-top:2.22222em}.mtxl{margin-top:4.44444em}.oh{overflow:hidden}.paxs{padding:0.27778em}.pas{padding:0.55556em}.pam{padding:1.11111em}.pal{padding:2.22222em}.paxl{padding:4.44444em}.pbf{padding-bottom:0}.pbxs{padding-bottom:0.27778em}.pbs{padding-bottom:0.55556em}.pbm{padding-bottom:1.11111em}.pbl{padding-bottom:2.22222em}.pbxl{padding-bottom:4.44444em}.plf{padding-left:0}.plxs{padding-left:0.27778em}.pls{padding-left:0.55556em}.plm{padding-left:1.11111em}.pll{padding-left:2.22222em}.prf{padding-right:0}.prxs{padding-right:0.27778em}.prs{padding-right:0.55556em}.prm{padding-right:1.11111em}.prl{padding-right:2.22222em}.ptf{padding-top:0}.ptxs{padding-top:0.27778em}.pts{padding-top:0.55556em}.ptm{padding-top:1.11111em}.ptl{padding-top:2.22222em}.ptxl{padding-top:4.44444em}.fl{float:left}.fr{float:right}.poa{position:absolute}.pof{position:fixed}.por{position:relative}.pos{position:static}.ra{border-radius:50%}.ram{border-radius:3px}.ran{border-radius:0}.tac{text-align:center}.tal{text-align:left}.tch{color:#b51f24}.tci{color:#fff}.tcs{color:#bfbfbf}.tct{color:#535353}.tcti{color:#fff}.tfb{font-family:"merriweather", serif}.tfh{font-family:"merriweather", serif}.tsxs{font-size:60%}.tss{font-size:75%}.tsm{font-size:90%}.tsl{font-size:115%}.tsxl{font-size:150%}.tsi{font-style:italic}.ttu,.h5,h5{text-transform:uppercase}.twn{font-weight:300}.twb{font-weight:700}.troubleshoot{box-shadow:0 0 0 1px pink}body{background:#ecf1ec;font-family:"adelle", "Helvetica Neue";font-weight:300}h1,h2,h3,h4,h5{color:#7a6952;font-family:"adelle", "Helvetica Neue";font-weight:400}.h5,h5{color:#7a6952;font-size:18px;margin-top:-0.55556em}dl,dt,dd{margin:0;padding:0}dd+dt{margin-top:0.55556em}ul,li{margin:0;padding:0}article{margin-top:2.22222em}.tsxl{font-size:200%}.tar{text-align:right}.tcgd{color:#728271}.tcyd{color:#ac9a51}.tcr{color:#c55842}.vaporize{display:none;height:0;overflow:hidden}.wheel{display:block;margin:2.22222em auto 0;width:240px}.vat{vertical-align:top}table{border-collapse:collapse}th{font-weight:400;text-align:left}th,td{padding:0.55556em;text-align:center}article{background:#f5f8f5;padding:1.11111em}.positive{color:#799985}.positive--a{color:#588067;border:2px solid #799985;border-radius:10px;color:#799985;display:inline-block;font-size:60%;height:16px;line-height:18px;text-align:center;width:16px}.positive--b{background:#799985;border:2px solid #588067;border-radius:10px;color:#ecf1ec;display:inline-block;font-size:60%;height:20px;line-height:20px;text-align:center;width:20px}.negative{color:#d07967}.negative--a{color:#c55842;background-color:#d07967;border:2px solid #c55842;border-radius:10px;color:#ecf1ec;display:inline-block;font-size:60%;height:16px;line-height:21px;text-align:center;width:16px}.dollars:before{content:"$";font-size:75%;opacity:0.6;position:relative;top:-1px;vertical-align:top}.card{background:#f7f9f7;border:1px solid #d7d2cb;padding:1.11111em;position:relative}.striped-v th{background:#ede3ba;color:#7a6952;border:1px solid #ecf1ec}.striped-v td{border:1px solid #ecf1ec}.striped-v td:nth-child(odd){background:#e2e9e2}.striped-v td:nth-child(even){background:#e6ece5}.striped-v.sub-heads td:first-child{background:#ede3ba;color:#7a6952;font-weight:400}.striped-v .bgn{background:none}.striped-h th{background:#ede3ba;border:1px solid #ecf1ec;color:#7a6952}.striped-h td{border:1px solid #ecf1ec}.striped-h tr:nth-child(even) td{background:#e2e9e2}.striped-h tr:nth-child(odd) td{background:#e6ece5}.striped-h .bgn{background:none}.bets td,.spins td{padding:0.27778em 0.55556em}.spins.golden td{opacity:0.2}.spins.golden tr:nth-child(4n+1) td:nth-child(2){background:#f3ecd1;opacity:1}.spins.golden tr:nth-child(4n+2) td:nth-child(5){background:#f3ecd1;opacity:1}.spins.golden tr:nth-child(4n+3) td:nth-child(3){background:#f3ecd1;opacity:1}.spins.golden tr:nth-child(4n+4) td:nth-child(4){background:#f3ecd1;opacity:1}.bordered-h td,.bordered-h th{border-bottom:1px solid #d1ddd0}.bordered-h td+td,.bordered-h th+th{border-left:1px solid #e5ebe4}.stakes .positive--b,.stakes .negative--a{border-radius:17px;font-size:75%;height:26px;line-height:26px;width:26px}.categories td{background:#e2e9e2;line-height:1;width:35px}.categories td:first-child{width:80px}.categories td+td{border-left:0}.categories .bgn{background:none}.meta-list{width:100%}.meta-list li{display:inline-block;font-size:120%;vertical-align:middle}.meta-list small{color:#7e7e7e}.meta-list-id{width:12%}.meta-list-wins{width:15%}.meta-list-spins{width:15%}.meta-list-maxBet{width:22%}.meta-list-minBankroll{width:22%}.meta-list-action{width:11%}.id{background:#e3eae3;border-radius:50%;color:#a4bba2;font-size:115%;height:60px;line-height:60px;position:relative;width:60px}.id .id-text{position:absolute;text-align:center;width:100%}.total-list{margin-top:1.11111em;line-height:1.2;text-align:center;width:100%}.total-list li{border-left:1px solid #dae3d9;display:inline-block;font-size:120%;vertical-align:middle;width:19.5%}.total-list li:last-child{border-right:1px solid #dae3d9}.total-list small{color:#7e7e7e;font-size:75%}.toggler{background:#d8c166;border:0;border-radius:50%;box-shadow:none;color:#7a6952;height:30px;line-height:28px;position:relative;transition:all 0.1s linear;top:2px;width:30px}.toggler:before{content:"+"}.toggler.is-toggled{background:#9d4634;color:#fff}.toggler.is-toggled:before{content:"-";position:relative;top:-1px}.toggler:focus{outline:0}.is-hidden{display:none}.ct-chart .ct-line{stroke-width:2px !important}.ct-chart .ct-series.ct-series-a .ct-line{stroke:#c55842 !important}.ct-chart .ct-series.ct-series-a .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-a .ct-area{fill:#d07967 !important}.ct-chart .ct-grid{stroke:#dae3d9 !important}.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118 td:nth-child(2){background:#c55842;border-color:#c55842}.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118+.js-l-118 td:nth-child(2) .negative--a{border-color:#9d4634}.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936 td:nth-child(5){background:#c55842;border-color:#c55842}.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936+.js-l-1936 td:nth-child(5) .negative--a{border-color:#9d4634}.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even td:nth-child(3){background:#c55842;border-color:#c55842}.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even+.js-l-even td:nth-child(3) .negative--a{border-color:#9d4634}.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd td:nth-child(6){background:#c55842;border-color:#c55842}.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd+.js-l-odd td:nth-child(6) .negative--a{border-color:#9d4634}.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red td:nth-child(7){background:#c55842;border-color:#c55842}.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red+.js-l-red td:nth-child(7) .negative--a{border-color:#9d4634}.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black td:nth-child(4){background:#c55842;border-color:#c55842}.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black+.js-l-black td:nth-child(4) .negative--a{border-color:#9d4634}
</style>

<section class='row'>
<img class="wheel" width="150" src="/img/tinkerings/roulettingale/roulette-wheel.svg" />
<h1 class='mts tac'>Roulettingale v2</h1>
<p class='tac'>
A data project testing the performance of the Martingale betting system in Roulette.
</p>
<!-- = data.roulettingale.map { |a| a["spins"].map { |b| b["result"] == "l"} } -->
</section>
<section class='row'>
<div class='cell well'>
<h2 class='tac'>Totals</h2>
<ul class='total-list'>
<li class='total-list-sessions'>
<span class='db tsxl tcgd'>60</span>
<small>Sessions</small>
</li>
<li class='total-list-wins'>
<span class='db tsxl tcgd'>1075</span>
<small>Wins</small>
</li>
<li class='total-list-spins'>
<span class='db tsxl tcr'>2232</span>
<small>Spins</small>
</li>
<li class='total-list-maxBet'>
<div class='db'>
<span class='tsxl tcr'>256</span>
<small class='tsxs'>(x)</small>
</div>
<small>Max Bet</small>
</li>
<li class='total-list-minBankroll'>
<div class='db'>
<span class='tsxl tcr'>511</span>
<small class='tsxs'>(x)</small>
</div>
<small>Min Bankroll</small>
</li>
</ul>
<h2 class='mtl tac'>Risk (Minimum Bankroll)</h2>
<div class='ct-chart'></div>
<h3 class='mtl tac'>Money</h3>
<table class='money striped-v sub-heads' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>10</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>Profit</td>
<td class='dollars tcgd'>10750</td>
<td class='dollars tcgd'>26875</td>
<td class='dollars tcgd'>32250</td>
<td class='dollars tcgd'>37625</td>
<td class='dollars tcgd'>43000</td>
<td class='dollars tcgd'>48375</td>
<td class='dollars tcgd'>53750</td>
<td class='dollars tcgd'>64500</td>
<td class='dollars tcgd'>80625</td>
</tr>
<tr>
<td>Max Bet</td>
<td class='dollars tcr'>2560</td>
<td class='dollars tcr'>6400</td>
<td class='dollars tcr'>7680</td>
<td class='dollars tcr'>8960</td>
<td class='dollars tcr'>10240</td>
<td class='dollars tcr'>11520</td>
<td class='dollars tcr'>12800</td>
<td class='dollars tcr'>15360</td>
<td class='dollars tcr'>19200</td>
</tr>
<tr>
<td>Min Bankroll</td>
<td class='dollars tcr'>5110</td>
<td class='dollars tcr'>12775</td>
<td class='dollars tcr'>15330</td>
<td class='dollars tcr'>17885</td>
<td class='dollars tcr'>20440</td>
<td class='dollars tcr'>22995</td>
<td class='dollars tcr'>25550</td>
<td class='dollars tcr'>30660</td>
<td class='dollars tcr'>38325</td>
</tr>
<tr>
<td>Pure Profit</td>
<td class='dollars tcgd'>5630</td>
<td class='dollars tcgd'>14075</td>
<td class='dollars tcgd'>16890</td>
<td class='dollars tcgd'>19705</td>
<td class='dollars tcgd'>22520</td>
<td class='dollars tcgd'>25335</td>
<td class='dollars tcgd'>28150</td>
<td class='dollars tcgd'>33780</td>
<td class='dollars tcgd'>42225</td>
</tr>
</table>
<h3 class='mtl tac'>Stakes</h3>
<table class='stakes striped-h' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>10</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
<th class='dollars'>80</th>
<th class='dollars'>90</th>
<th class='dollars'>100</th>
</thead>
<tr>
<td class='tal'>MGM ($25 - $10,000)</td>
<td>-</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
</tr>
<tr>
<td class='tal'>Beau Rivage ($10 - $10,000)</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
</tr>
<tr>
<td class='tal'>Mirage ($25 - $20,000)</td>
<td>-</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='positive--b'>&#10003;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
<td>
<div class='negative--a'>&#10005;</div>
</td>
</tr>
</table>
<h3 class='mtl tac'>Hours of Play</h3>
<table class='hours striped-h mbxl' width='100%'>
<thead>
<th>Players</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
</thead>
<tr>
<td>Hours</td>
<td class='tcr'>19</td>
<td class='tcr'>29</td>
<td class='tcr'>37</td>
<td class='tcr'>40</td>
<td class='tcr'>46</td>
<td class='tcr'>63</td>
</tr>
</table>
<article class='js-id060 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>060</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>67</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>blak</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id059 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>059</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>59</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id058 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>058</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>52</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id057 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>057</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>53</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id056 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>056</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>51</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>256</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
8960
</td>
<td class='dollars'>
10240
</td>
<td class='dollars'>
11520
</td>
<td class='dollars'>
12800
</td>
<td class='dollars'>
15360
</td>
<td class='dollars'>
19200
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id055 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>055</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>71</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>256</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>511</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
1280
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
6400
</td>
<td class='negative dollars'>
7680
</td>
<td class='negative dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
256
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
2560
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
12800
</td>
<td class='positive dollars'>
15360
</td>
<td class='positive dollars'>
19200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
8960
</td>
<td class='dollars'>
10240
</td>
<td class='dollars'>
11520
</td>
<td class='dollars'>
12800
</td>
<td class='dollars'>
15360
</td>
<td class='dollars'>
19200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
12775
</td>
<td class='dollars'>
15330
</td>
<td class='dollars'>
17885
</td>
<td class='dollars'>
20440
</td>
<td class='dollars'>
22995
</td>
<td class='dollars'>
25550
</td>
<td class='dollars'>
30660
</td>
<td class='dollars'>
38325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id054 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>054</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>70</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id053 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>053</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>55</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id052 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>052</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>72</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id051 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>051</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>30</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>61</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1050
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1350
</td>
<td class='dollars'>
1500
</td>
<td class='dollars'>
1800
</td>
<td class='dollars'>
2250
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id050 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>050</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>42</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id049 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>049</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>43</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id048 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>048</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>51</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>256</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>511</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
1280
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
6400
</td>
<td class='negative dollars'>
7680
</td>
<td class='negative dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
256
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
2560
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
12800
</td>
<td class='positive dollars'>
15360
</td>
<td class='positive dollars'>
19200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
8960
</td>
<td class='dollars'>
10240
</td>
<td class='dollars'>
11520
</td>
<td class='dollars'>
12800
</td>
<td class='dollars'>
15360
</td>
<td class='dollars'>
19200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
12775
</td>
<td class='dollars'>
15330
</td>
<td class='dollars'>
17885
</td>
<td class='dollars'>
20440
</td>
<td class='dollars'>
22995
</td>
<td class='dollars'>
25550
</td>
<td class='dollars'>
30660
</td>
<td class='dollars'>
38325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id047 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>047</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>52</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id046 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>046</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>31</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id045 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>045</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>47</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id044 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>044</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>44</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>64</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>127</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2240
</td>
<td class='dollars'>
2560
</td>
<td class='dollars'>
2880
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4800
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
3175
</td>
<td class='dollars'>
3810
</td>
<td class='dollars'>
4445
</td>
<td class='dollars'>
5080
</td>
<td class='dollars'>
5715
</td>
<td class='dollars'>
6350
</td>
<td class='dollars'>
7620
</td>
<td class='dollars'>
9525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id043 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>043</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>49</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id042 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>042</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>42</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id041 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>041</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>48</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id040 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>040</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>41</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id039 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>039</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>46</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>38</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>Even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>Odd</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id038 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>038</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>28</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>4</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>7</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
100
</td>
<td class='dollars'>
120
</td>
<td class='dollars'>
140
</td>
<td class='dollars'>
160
</td>
<td class='dollars'>
180
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
300
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
175
</td>
<td class='dollars'>
210
</td>
<td class='dollars'>
245
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
315
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
420
</td>
<td class='dollars'>
525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id037 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>037</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>31</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id036 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>036</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>43</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id035 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>035</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>43</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id034 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>034</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>41</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id033 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>033</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>54</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id032 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>032</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>44</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id031 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>031</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>20</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>39</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
700
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1000
</td>
<td class='dollars'>
1200
</td>
<td class='dollars'>
1500
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id030 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>030</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>39</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>64</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>127</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2240
</td>
<td class='dollars'>
2560
</td>
<td class='dollars'>
2880
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4800
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
3175
</td>
<td class='dollars'>
3810
</td>
<td class='dollars'>
4445
</td>
<td class='dollars'>
5080
</td>
<td class='dollars'>
5715
</td>
<td class='dollars'>
6350
</td>
<td class='dollars'>
7620
</td>
<td class='dollars'>
9525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id029 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>029</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>26</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id028 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>028</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>32</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>64</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>127</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'> even</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2240
</td>
<td class='dollars'>
2560
</td>
<td class='dollars'>
2880
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4800
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
3175
</td>
<td class='dollars'>
3810
</td>
<td class='dollars'>
4445
</td>
<td class='dollars'>
5080
</td>
<td class='dollars'>
5715
</td>
<td class='dollars'>
6350
</td>
<td class='dollars'>
7620
</td>
<td class='dollars'>
9525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id027 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>027</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>20</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>4</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>7</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
100
</td>
<td class='dollars'>
120
</td>
<td class='dollars'>
140
</td>
<td class='dollars'>
160
</td>
<td class='dollars'>
180
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
300
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
175
</td>
<td class='dollars'>
210
</td>
<td class='dollars'>
245
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
315
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
420
</td>
<td class='dollars'>
525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id026 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>026</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>49</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>256</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>511</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-38</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
1280
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
6400
</td>
<td class='negative dollars'>
7680
</td>
<td class='negative dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
256
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
2560
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
12800
</td>
<td class='positive dollars'>
15360
</td>
<td class='positive dollars'>
19200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
8960
</td>
<td class='dollars'>
10240
</td>
<td class='dollars'>
11520
</td>
<td class='dollars'>
12800
</td>
<td class='dollars'>
15360
</td>
<td class='dollars'>
19200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
12775
</td>
<td class='dollars'>
15330
</td>
<td class='dollars'>
17885
</td>
<td class='dollars'>
20440
</td>
<td class='dollars'>
22995
</td>
<td class='dollars'>
25550
</td>
<td class='dollars'>
30660
</td>
<td class='dollars'>
38325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id025 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>025</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>38</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
640
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
3840
</td>
<td class='positive dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id024 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>024</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>27</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id023 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>023</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>32</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id022 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>022</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>28</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id021 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>021</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>39</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id020 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>020</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>32</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id019 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>019</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>29</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id018 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>018</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>24</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id017 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>017</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>28</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id016 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>016</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>15</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>29</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id015 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>015</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>18</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id014 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>014</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>18</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id013 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>013</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>14</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>4</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>7</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
100
</td>
<td class='dollars'>
120
</td>
<td class='dollars'>
140
</td>
<td class='dollars'>
160
</td>
<td class='dollars'>
180
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
300
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
175
</td>
<td class='dollars'>
210
</td>
<td class='dollars'>
245
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
315
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
420
</td>
<td class='dollars'>
525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id012 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>012</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>25</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id011 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>011</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>16</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>8</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>15</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>17</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>31</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even </td>
<td class='tac'>17</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
320
</td>
<td class='dollars'>
360
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
375
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
525
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
675
</td>
<td class='dollars'>
750
</td>
<td class='dollars'>
900
</td>
<td class='dollars'>
1125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id010 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>010</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>15</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>4</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>7</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>red</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black </td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
100
</td>
<td class='dollars'>
120
</td>
<td class='dollars'>
140
</td>
<td class='dollars'>
160
</td>
<td class='dollars'>
180
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
300
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
175
</td>
<td class='dollars'>
210
</td>
<td class='dollars'>
245
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
315
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
420
</td>
<td class='dollars'>
525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id009 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>009</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>16</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>4</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>7</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
100
</td>
<td class='dollars'>
120
</td>
<td class='dollars'>
140
</td>
<td class='dollars'>
160
</td>
<td class='dollars'>
180
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
300
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
175
</td>
<td class='dollars'>
210
</td>
<td class='dollars'>
245
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
315
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
420
</td>
<td class='dollars'>
525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id008 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>008</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>21</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>32</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>63</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>black</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>34</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>10</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>33</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1120
</td>
<td class='dollars'>
1280
</td>
<td class='dollars'>
1440
</td>
<td class='dollars'>
1600
</td>
<td class='dollars'>
1920
</td>
<td class='dollars'>
2400
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
1575
</td>
<td class='dollars'>
1890
</td>
<td class='dollars'>
2205
</td>
<td class='dollars'>
2520
</td>
<td class='dollars'>
2835
</td>
<td class='dollars'>
3150
</td>
<td class='dollars'>
3780
</td>
<td class='dollars'>
4725
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id007 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>007</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>19</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>4</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>7</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>black</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>0</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
100
</td>
<td class='dollars'>
120
</td>
<td class='dollars'>
140
</td>
<td class='dollars'>
160
</td>
<td class='dollars'>
180
</td>
<td class='dollars'>
200
</td>
<td class='dollars'>
240
</td>
<td class='dollars'>
300
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
175
</td>
<td class='dollars'>
210
</td>
<td class='dollars'>
245
</td>
<td class='dollars'>
280
</td>
<td class='dollars'>
315
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
420
</td>
<td class='dollars'>
525
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id006 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>006</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>22</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>14</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>11</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>38</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>30</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id005 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>005</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>21</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>16</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>31</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>20</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
160
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
960
</td>
<td class='positive dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>12</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>24</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>19-36</td>
<td class='tac'>29</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>1-18</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
480
</td>
<td class='dollars'>
560
</td>
<td class='dollars'>
640
</td>
<td class='dollars'>
720
</td>
<td class='dollars'>
800
</td>
<td class='dollars'>
960
</td>
<td class='dollars'>
1200
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
775
</td>
<td class='dollars'>
930
</td>
<td class='dollars'>
1085
</td>
<td class='dollars'>
1240
</td>
<td class='dollars'>
1395
</td>
<td class='dollars'>
1550
</td>
<td class='dollars'>
1860
</td>
<td class='dollars'>
2325
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id004 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>004</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>31</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>128</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>255</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>black</td>
<td class='tac'>4</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>35</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>7</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>1</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>21</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
320
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
1920
</td>
<td class='negative dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
64
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
640
</td>
<td class='negative dollars'>
1600
</td>
<td class='negative dollars'>
3200
</td>
<td class='negative dollars'>
3840
</td>
<td class='negative dollars'>
4800
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>22</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
128
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
1280
</td>
<td class='positive dollars'>
3200
</td>
<td class='positive dollars'>
6400
</td>
<td class='positive dollars'>
7680
</td>
<td class='positive dollars'>
9600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>27</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>25</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>23</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>15</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>32</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
80
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
400
</td>
<td class='positive dollars'>
480
</td>
<td class='positive dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>8</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
40
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
240
</td>
<td class='negative dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>6</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
8
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
80
</td>
<td class='negative dollars'>
200
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
480
</td>
<td class='negative dollars'>
600
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>28</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
16
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
160
</td>
<td class='negative dollars'>
400
</td>
<td class='negative dollars'>
800
</td>
<td class='negative dollars'>
960
</td>
<td class='negative dollars'>
1200
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>36</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
32
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
320
</td>
<td class='positive dollars'>
800
</td>
<td class='positive dollars'>
1600
</td>
<td class='positive dollars'>
1920
</td>
<td class='positive dollars'>
2400
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>2</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>even </td>
<td class='tac'>13</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>26</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
</table>
<h3 class='mtm tac'>Money</h3>
<table class='money bordered-h mbs' width='100%'>
<thead>
<th class='bgn'>&nbsp;</th>
<th class='dollars'>25</th>
<th class='dollars'>30</th>
<th class='dollars'>35</th>
<th class='dollars'>40</th>
<th class='dollars'>45</th>
<th class='dollars'>50</th>
<th class='dollars'>60</th>
<th class='dollars'>75</th>
</thead>
<tr>
<td>
Winnings
</td>
<td class='dollars'>
250
</td>
<td class='dollars'>
300
</td>
<td class='dollars'>
350
</td>
<td class='dollars'>
400
</td>
<td class='dollars'>
450
</td>
<td class='dollars'>
500
</td>
<td class='dollars'>
600
</td>
<td class='dollars'>
750
</td>
</tr>
<tr>
<td>
Max Bet
</td>
<td class='dollars'>
3200
</td>
<td class='dollars'>
3840
</td>
<td class='dollars'>
4480
</td>
<td class='dollars'>
5120
</td>
<td class='dollars'>
5760
</td>
<td class='dollars'>
6400
</td>
<td class='dollars'>
7680
</td>
<td class='dollars'>
9600
</td>
</tr>
<tr>
<td>
Min Bankroll
</td>
<td class='dollars'>
6375
</td>
<td class='dollars'>
7650
</td>
<td class='dollars'>
8925
</td>
<td class='dollars'>
10200
</td>
<td class='dollars'>
11475
</td>
<td class='dollars'>
12750
</td>
<td class='dollars'>
15300
</td>
<td class='dollars'>
19125
</td>
</tr>
</table>
</div>
</section>
</article>
<article class='js-id003 session'>
<section class='session-stats'>
<ul class='meta-list'>
<li class='meta-list-id'>
<div class='id'>
<p class='id-text'>003</p>
</div>
</li>
<li class='meta-list-wins'>
<small>Wins:</small>
<span class='tsl tcgd'>10</span>
</li>
<li class='meta-list-spins'>
<small>Spins:</small>
<span class='tsl tcr'>17</span>
</li>
<li class='meta-list-maxBet'>
<small>Max Bet:</small>
<span class='tsl tcr'>4</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-minBankroll'>
<small>Min Bankroll:</small>
<span class='tsl tcr'>7</span>
<small class='tsxs'>(x)</small>
</li>
<li class='meta-list-action tar'>
<button class='toggler js-toggler'></button>
</li>
</ul>
<div class='js-toggle toggle is-hidden'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc' width='100%'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
<th>Amount</th>
<th>10</th>
<th>25</th>
<th>50</th>
<th>60</th>
<th>75</th>
</thead>
<tr>
<td class='ttc'>red</td>
<td class='tac'>9</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>18</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
20
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
100
</td>
<td class='negative dollars'>
120
</td>
<td class='negative dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>black </td>
<td class='tac'>24</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
4
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
40
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
200
</td>
<td class='positive dollars'>
240
</td>
<td class='positive dollars'>
300
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
<td class='negative dollars'>
60
</td>
<td class='negative dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>even</td>
<td class='tac'>16</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
2
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
20
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
100
</td>
<td class='positive dollars'>
120
</td>
<td class='positive dollars'>
150
</td>
</tr>
<tr>
<td class='ttc'>odd</td>
<td class='tac'>5</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>red</td>
<td class='tac'>3</td>
<td class='tac'>
<div class='positive--a'>&nbsp;</div>
</td>
<td class='positive'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='positive dollars'>
10
</td>
<td class='positive dollars'>
25
</td>
<td class='positive dollars'>
50
</td>
<td class='positive dollars'>
60
</td>
<td class='positive dollars'>
75
</td>
</tr>
<tr>
<td class='ttc'>black</td>
<td class='tac'>19</td>
<td class='tac'>
<div class='negative--a'>&nbsp;</div>
</td>
<td class='negative'>
1
<span class='tsxs'>
(x)
</span>
</td>
<td class='negative dollars'>
10
</td>
<td class='negative dollars'>
25
</td>
<td class='negative dollars'>
50
</td>
60
</td>
75
</td>
