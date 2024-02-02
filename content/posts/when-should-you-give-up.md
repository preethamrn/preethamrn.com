---
title: "When should you give up on a project that doesn't work?"
link: "when-should-you-give-up"
description: "I spent most of my free time after work over the last month working on a project and today I'm giving up."
date: 2024-02-01
timeToRead: 5
tags: ["Programming"]
---

I spent a lot of my free time after work over the last month working on a project and today I'm giving up.

The idea was based on a simple hypothesis. People enjoy surfing Wikipedia to find interesting articles by randomly clicking on links. What if there was a way to search for articles by clicking on locations? In fact, Wikipedia used to have this feature built into their apps (they still have it but now it's only a [website](https://en.wikipedia.org/wiki/Special:Nearby)). There are a few issues with Wikipedia's solution though:
1. They don't show the points on a map so you'd have to guess where the articles are in relation to each other (or plug the coordinates into a map separately)
2. They sort articles by distance and not by popularity or some other heuristic.

My hypothesis was that if you could drag around a map to search for articles nearby and sort them by pageviews it would be more fun and could potentially help with vacation planning. I was wrong and here's how I found out.

#### 1. Initial passion
The first week of the project was great. Day 1, I was able to integrate OpenStreetMaps and the Wikipedia API to list all the articles in the area with their view counts.
![Day 1 progress](/posts/when-should-you-give-up/day1.png)

By Day 3, I supported fetching articles progressively as you moved the map around, added a page view filter, and added popups which linked to the Wikipedia page.
![Day 3 progress](/posts/when-should-you-give-up/day3.png)

By the end of the first week, I had finished most of the basic UI. The map takes up the full screen, it's possible to collapse the list of articles, and you can sort by views. By this point I had everything I needed to validate my hypothesis. Instead I decided to keep adding more random features without having a clear vision in mind until...
![Week 1 progress](/posts/when-should-you-give-up/week1.png)

#### 2. Excuses
After the first week, I ended up getting busier with various tasks at work while also having to travel around. I told myself I would try to get some work done on the project if I got free time but somehow that never ended up happening. At the time I figured I couldn't be so hard on myself because I did actually have other stuff to do, but in hindsight I think this is where my lack of motivation started to kick in. Was I subconsciously afraid that the project wasn't going to work out the way I thought it would?

#### 3. Fake productivity
After one week of not getting much done, I decided to kick it into high gear and make a bunch of changes.
1. Changing UI libraries to naive-ui and again to Quasar
2. Changing the color of map markers based on how popular an article is
3. Using the Navigator.geolocation property to search for articles near the user's location
4. Loading more details when clicking a popup
6. Adding a crosshair to the center of the map so you know where you're loading from
7. A bunch of different CSS tweaks

A week passed and here's what I ended up with. It certainly looks a lot better, although what you don't see is the horrible lag that happens when you first load the page (and whenever you move around the map), the fact that the popups often don't load until all the page views are fetched (I'm assuming because of some rate limiting on Wikipedia's side), and how the table on the right breaks down and becomes practically useless after moving around the map for a while and accumulating thousands of articles in the list. Don't get me started on how it looks on a phone.
![Final result](/posts/when-should-you-give-up/final-result.png)

#### 4. Pushing tasks back by days
Once the low effort tasks dried up I wasn't sure what to do next. I started to realize that a lot of things would need to be built from the ground up and had to confront the fact that what I was doing just wasn't working.

The website was laggy, the most viewed articles were just the city pages (which aren't particularly interesting coordinates to visit on a vacation), and many of the prominent articles that showed up were things like [YouTube headquarters shooting](https://en.wikipedia.org/wiki/YouTube_headquarters_shooting)" and "[Death of Jeffrey Epstein](https://en.wikipedia.org/wiki/Death_of_Jeffrey_Epstein)" while more interesting places like "[Pittock Mansion](https://en.wikipedia.org/wiki/Pittock_Mansion)" and "[Ghirardelli Square](https://en.wikipedia.org/wiki/Ghirardelli_Square)" were hard to come by. I'm surprised the first two even had coordinates to begin with.

What I really needed to do was overhaul the algorithm that I used to sort and display articles to users, improve the map controls to be less laggy, make the page more responsive on first load, and set a better zoom level which helped highlight the articles that were loaded.

But still, I spent the next few days continuing to mess around with the CSS, add mobile UI support, and improve the popup and table displays. None of these solved the core problem and here's what I have today - [Wikimaps](https://wikimaps.vercel.app/).

#### 5. Giving up
The reason it was so hard to get to this stage was the fear that I was wrong with my hypothesis. I tricked myself into believing that if I just kept making these small incremental changes that I'd make it fun to use again. But in reality, I think I probably should have quit after week 1... or at least drastically changed how I approached things. Maybe I'll come back to this project some other day, but for now, it'll go back on the shelf.

Why am I writing this? Partially as a cautionary tale to myself and others so in the future I won't make the same mistake. Partially because I spent the last month making something and I didn't want that to go to waste. And partially in the hope that sharing this idea with others[^1] might reignite some of that initial passion that I had.

I think the biggest takeaway from this is that if something is worth building, you'll know right away. A barely functional prototype from [another project I worked on almost 4 years ago](/posts/2020-year-in-review#pokemon-dens) got over [1000 upvotes on Reddit](https://www.reddit.com/r/PokemonSwordAndShield/comments/eqn6h4/interactive_map_of_the_wild_area_with_list_of/) in a day just based off of a gif.

For now I'm on to bigger and brighter pastures. I have another project in the works and this time I'll make sure to test my hypothesis as early as possible.

[^1]: I already posted this on [Reddit](https://www.reddit.com/r/InternetIsBeautiful/comments/1af6odr/a_website_which_lists_popular_wikipedia_articles/) and got some interest. However most of the suggested changes were "fake productivity" things like supporting showing distance in meters, supporting non-English articles, and fixing minor bugs with geolocation so I probably won't get back to it
