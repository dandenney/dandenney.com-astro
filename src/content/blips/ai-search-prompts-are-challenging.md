---
summary: Trying to get AI to search like me
title: AI search prompts are challenging
pubDate: '2024-07-29'
---

I've started playing catchup on my map of all of the True Crime Garage episodes. In the past, I would usually listen to the podcast, take notes, and add the entry. I've fallen off of all of my podcasts since I escaped NYC during the pandemic lockdown and the map has gone untouched.

I had the idea recently that I could use AI and search to help speed things up in order to get caught up. I used ChatGPT to make a little JS script to pull the necessary content from their website and I've been using Perplexity to search for the details. I use Perplexity for the search because while it's getting better, I don't fully trust ChatGPT not to hallucinate when it doesn't know an answer. Perplexity gives source links that I can click through to verify info.

My biggest challenge so far is one that makes sense with the current state of AI. They can execute, but they can't reason. If things are specifically within the prompt and the resulting article, they will find it. If not, they can't. But then I can with some searches. Either way, this is significantly faster, but I'd like to learn how to prompt it to follow the trail and get an answer.

## Quick learnings so far

I started with things like "what happened to" or "what happened with", but that meant that I often had to ask for dates and locations.\
\
I moved to "what are dates and locations around what happened to", but learned that I still had to be specific about wanting an address.\
\
I've found that "what are the dates and addresses related to what happened..." will give the address when it's in the related search results.

## Example of what I want it to do

"what are the dates and addresses related to what happened to Stephen Spina" [reference\
\
](https://www.perplexity.ai/search/what-are-the-dates-and-address-Cl88MYFgQeqG..glPVs0tQ)That prompt yielded results including "Location of the murder: Spina's 3rd-floor apartment in Mamaroneck, New York. The exact address is not provided in the search results."\
\
I googled "Stephen Spina apartment in Mamaroneck, New York", which had a result with " Spina's apartment on Richbell Road is in a busy neighborhood, near Boston Post Road and in a complex with dozens...."\
\
I googled "Stephen Spina apartment Richbell Road in Mamaroneck, New York" which led to an article that included "300 Richbell Rd, Mamaroneck, NY 10543" and "Stephen Spina was killed in the same building in 2007."

## To be continued...

I think this will be a matter of "role playing" with ChatGPT, telling it that it's a researcher and to come up with additional prompts. Maybe I'll try it with the search function on and see if it can do it. I don't think you can do prompts in that way with Perplexity, it's more about doing follow-up searches.
