---
title: "2020 Year in Review"
link: "2020-year-in-review"
description: "My yearly flex under the guise of reflection. Here's a summary of everything I did in 2020 alongside a few things I learned along the way. The year's theme was the \"Year of Doing\""
date: 2021-01-01
timeToRead: 13
tags: ["Life", "Programming"]
---
Time for my yearly flex under the guise of reflection.

Every year I've tried resolutions, they've never worked for me. Resolutions are easy to fail and they're not flexible enough to accommodate changing circumstances. 2020, more than ever, has proven that. So last year, [inspired by CGP Grey](https://www.youtube.com/watch?v=NVGuFdX5guE), I tried something different[^1]. I gave my year a ***✨theme✨***. While I suggest you watch his video, the gist is that you set a theme for the entire year and instead of dealing with single goals or resolutions, you work towards where you want to be at the end without knowing what the exact path to get there is going to look like.

2020 was my **Year of Doing**. And here's how it went.

## Pokemon Dens

If you wait for the new year before starting then you're off to a bad start. Which is why I started this project 3 days before the new year.

![Pokemon Dens - First Commit](/posts/2020-year-in-review/pokemondens-commit.png)

Inspiration struck when I was playing Pokemon Sword/Shield with my friends over winter break and realized how difficult it was to find information about raids and the new wild area that was added. Since this was the majority of end game content, it was where I spent most of my time with friends.

I wanted to build a tool that would make this process more efficient. So I built an interactive map of the Pokemon Sword/Shield wild area.

While it's always fun to build things for myself, I'd be lying if I said I didn't care about other's opinions. Usually when I build something, it's met with positive reception but only like 3 people end up using it. So when I posted a GIF of my half finished app on reddit before taking a nap, I was surprised to say the least when I woke up to [over 1000 upvotes](https://www.reddit.com/r/PokemonSwordAndShield/comments/eqn6h4/interactive_map_of_the_wild_area_with_list_of/).

A [few](https://www.dexerto.com/pokemon/interactive-sword-shield-map-makes-finding-wild-area-pokemon-a-breeze-1322324/)&nbsp;[gaming](https://dotesports.com/pokemon/news/pokemon-fan-creates-interactive-map-of-sword-and-shields-wild-area) "[news](https://piunikaweb.com/2020/02/03/pokemon-sword-and-shield-interactive-map-all-pokemon-locations-in-the-wild-area/)" [websites](https://www.imore.com/fan-made-interactive-map-pokemon-sword-and-shield-wild-area-going-be-exactly-what-you-needed) picked it up which was cool (although I wish they did this when the website was actually live instead of just linking the GIF). I then spent the next 2 days scrambling to finish building it. Although it was partially working when I made the GIF, I still needed to scrape data for all the remaining sections of the wild area and integrate it into the website. I bought a domain, uploaded it to a github page, and then made [an update post on reddit](https://www.reddit.com/r/PokemonSwordAndShield/comments/es50l6/update_interactive_map_of_the_wild_area_with_list/) which also blew up... for about 10 hours after which point the subreddit was made private.

![Pokemon Dens - Reddit Post](/posts/2020-year-in-review/pokemondens-reddit.png)

![Pokemon Dens - Analytics](/posts/2020-year-in-review/pokemondens-analytics.png)

Unbeknownst to me, there was some unrelated drama going on between the mods of the subreddit. I still don't fully understand the reason[^2] but as a result, the post that I made fell off the face of the earth (notice the extremely sharp drop in users after the first day it was live). When the subreddit was reinstated, my post was no longer at the top. Who knows what would have happened if the subreddit didn't go down for 2 days. Despite this I still got a pretty good response and it gave me a lot of confidence that the year was going to go great!

Then the coronavirus happened...

---

## CubersLive

CubersLive was a website I built all the way back in 2018 because I wanted to be able to host Rubik's Cube races against my friends over summer break. It took so long to build that when I eventually did release it, summer break was almost over so no one really used it. Fast forward 2 years and a series of (unfortunate?) events occurred which led to this application being a lot more useful than I could have ever anticipated.

1. Due to the Coronavirus all World Cube Association competitions were canceled.
2. A group of cubers get together to announce an online competition instead called Cubing At Home which would be streamed on Twitch.
3. I decided to create a Twitch account and start streaming too.
4. On Twitch I notice [Lazer0Monkey](https://www.youtube.com/user/LaZer0MonKey) (a relatively popular cubing YouTuber) using my website.
5. I message him and after a bit of back and forth, he mentions another online cubing competition that he's hosting - the MonkeyLeague - which he might use my website for.

After much refactoring, implementing new features, improving the user experience, and fixing bugs at 5am in the morning while the competition was already live, I got to witness this

<YoutubeEmbed src="https://www.youtube.com/embed/Z-2Zznk4vk4?start=5423"></YoutubeEmbed>

It's a cubing competition between Feliks Zemdegs and Tymon Kolasiński. Feliks is the [world record holder of many Rubik's cube categories](https://www.worldcubeassociation.org/persons/2009ZEMD01). That was live streamed on Twitch with a peak of 1000+ concurrent viewers (and many more watching it after the fact). And the CubersLive logo is right there in the bottom left corner.

## TwistyPuzzleCup

The above story concurrently takes a different path at step 4.

4. Me and a few friends ([Manu](https://www.worldcubeassociation.org/persons/2013SING12) and [Michael](https://www.worldcubeassociation.org/persons/2016CHAI03)) decide to start our own online cubing competition.

Before jumping into it and coding a full fledged application we did a test run with Google Sheets, Google Forms and a super basic StreamLabs setup[^3]. [It went way better than I could have ever imagined](https://www.youtube.com/watch?v=eR9VmV4n_Oc) and so I went on a massive coding binge as I implemented a completely new frontend and backend in CubersLive (while simultaneously implementing new features required for MonkeyLeague) to support this competition while also not breaking any existing functionality. This ended up being some of the best Javascript code I've written so far[^4]. Finally we unveiled the [Twisty Puzzle Cup](https://www.cuberslive.com/tpc).

We managed to get sponsored by SpeedCubeShop and were able to have a prize pool of $600 where we decided to do a full segment with four events - 3x3, 2x2, Pyraminx, and 3BLD. While the turnout wasn't as much as Cubing At Home or the MonkeyLeague, I felt ecstatic regardless because for the first I finally felt like a part of the cubing community instead of just an outside spectator[^5].

A month later we did a second segment partnering with SpeedCubeShop and the American Cancer Society [where we raised over $1700](https://tiltify.com/@cuberslive/cuberslive-vs-cancer) for charity. PogChamp

I also have to thank people like Dan, Evan, Ben, Tazzlyn, Tiffany, and any one else who help cast or participate in the stream or competition[^6]. It wouldn't have been possible without them.

## Twitch Affiliate

Another branch happens at step 3 in the story.

3. I decided to create a Twitch account and start streaming too.

If it seemed like I glossed over that point above, it's for good reason. It deserves its own section. At first I only played with friends and they kept me company on discord but then I started getting a few random people watching me regularly. Partly because they knew me from CubersLive and the Twisty Puzzle Cup, partly from me hanging out in other streamers' chats, and partly from me being lucky and people finding me on their own.

A few notable moments. Getting a random viewer out of nowhere on my first day streaming who ended up following and continues to watch me to this day. [Getting a huge raid followed by a personal best in a Super Mario 64 speedrun](https://www.youtube.com/watch?v=CkuTit7uLc4). And then [it happened again](https://www.youtube.com/watch?v=O06n_YQiF8w) on another stream weeks later. Doing almost 400 pushups in a single stream. Building a Bluetooth cube algorithm trainer. Beating the hardest game known to man[^7] - Pogostuck. And then beating an even harder Pogostuck map that fewer than 1000 people have beaten in the world.

Sometime in the middle of playing Pogostuck I ended up getting affiliate by meeting all the requirements.

![Twitch - Analytics](/posts/2020-year-in-review/twitch-analytics.png)

Looks like I'm still growing so I don't plan on stopping anytime soon. If you're interested, find me on [https://twitch.tv/preethamrn](https://twitch.tv/preethamrn) 🙂

## Rubik's Cube Alg Trainer

A fundamental part of solving a Rubik's cube is using algorithms to go from one state of the cube to a simpler state. The size of these alg sets range from 20 to 400 or even over 1000 depending on how much of the cube you'd like to solve in a single step. The best way to learn these algorithms is by simply practicing them over and over until they're in your muscle memory.

Usually this is done by scrambling the cube and then solving it a bunch of times, however, scrambling is long and time consuming. So naturally when I bought a Bluetooth cube, the first thing I wanted to do was build [my own alg trainer](https://www.preethamrn.com/cubing/algtrainer) which allowed you to continuously solve by simulating a virtual cube that would be automatically scrambled for you.

Through this I learned a lot about the cubing.js library, got another 2 weeks of content for my Twitch stream, and met a few people working on really interesting projects in the Rubik's cube space.

## Personal Website

The more I learn about web development, the more my personal website evolves. 5 years ago, I just copy and pasted a template that I found online. A few year later, I learned about Vue and built my own website from the ground up. It looked nice but as I started integrating more packages and utilities, the bundle size starting growing. Most people visiting my portfolio didn't need the code for Bluetooth cube interfaces, but since I built a single page application, they downloaded it anyway. Even though I hacked together a way to solve this, I figured

1. it's been long enough and I've learned a few new skills[^8]
2. I want to add a blog posts section to my website

so I rewrote it using [Gridsome](https://gridsome.org/). It's nice to use and makes writing efficient websites simple, however, whenever I had issues, it was difficult for me to debug them because the documentation was pretty lacking and the community is a lot smaller. Once I got everything working however, it's been pretty nice to work with and I think [the new website is a lot better than the old one](https://www.preethamrn.com/posts/test-post/).

## Other notable "doings"

### Stanz Sheet

I built a few webapps for a [Twitch streamer](https://www.twitch.tv/stanz).

1. [Valorant Player History](https://www.preethamrn.com/twitch-apps/valorant/) - A visualization of Valorant players and the other teams/players they are connected to ([Video](https://twitter.com/preethamrn/status/1298500209236795392)).
2. [The Stanz Sheet](https://www.preethamrn.com/twitch-apps/stanzsheet/) - A tool for taking notes about live Valorant matches ([Video](https://twitter.com/preethamrn/status/1298500210667134977?)).

### YouTube

I experimented with a few new YouTube video formats. I didn't upload as much this year as I did last year but I think the 100s of hours spend streaming on Twitch makes up for that. Additionally, I'd rather upload quality videos on YouTube. At the end of the day, it's not my career so the numbers don't really matter. Instead I prefer posting things that I can show to others as something I'm proud of[^9]. If they also get popular as a result, then that's even better.

### Notion

I switched from Todoist to Notion in July and it has already paid off multiple times when I needed to take notes but was at a different device or had to look back at what I was doing 2 months ago. My few gripes with it are that there are many simple bugs that aren't being fixed[^10], it doesn't have good support for recurring tasks or habit tracking, and the Android app is extremely slow and doesn't have offline support. I might talk about this in the future but I don't have enough to say to warrant a full post.

---

## Coronavirus

I'd be remiss if I didn't mention the one thing that I'm sure affected every single person reading this. Regardless of whether you had a great or horrible year, the pandemic probably contributed to a major part of that. I can't help but feel a little guilty when I have something good happen amidst such a terrible event for most people.

On one hand, I haven't met any friends in person for almost a year. On the other hand, I regularly speak with people from high school and college that I rarely talked to beforehand.

Communication is harder at work but I've also gotten much more time to work on coding and design, not to mention the fact that I also still have a job.

Without a commute I've lost a sense of schedule which has caused problems for work life balance and thrown a lot of my habits out of whack but I now have a few extra hours to work on personal projects and live streaming which led to me becoming a Twitch affiliate.

I don't have a way to end this section other than to say that I hope everyone stays safe and things get back to normal soon.

## Theme for 2021

In selecting my theme for 2021, I had two simple goals.

1. Continue building things just like I did this year.
2. Set myself up for 2022 - Year of Independence.

I think a good transition year would be the **Year of Habits**. Each of my goals supports a different category of habits. The "continue building things" habit would involve being more consistent with the time I spend working. Instead of having massive bursts of productivity every few weeks that end up dying before I'm able to publish, I'd prefer to slowly iterate on a few ideas that I think have promise. The "set myself up for 2022" habits would involve being less reliant on external factors like a rigid schedule or commute. If I can fix my sleep schedule, work out regularly, and read more (audiobooks count) while still living through a pandemic then things will only get better as the world goes back to normal.

## Conclusion

If there's one takeaway from this, it's to give themes a shot if New Year's Resolutions don't work for you. And if a year long theme is too much then just try it for a season. Like the Winter of Health.

It's probably a bad idea to write this much for my first blog post but on the bright side that means my writing is only going to get better and hopefully the 2021 Year in Review post will show that.

I'll end this off with a photo from the start of the year vs. the end of the year.
![Year Start versus End Pics](/posts/2020-year-in-review/pics.png)

[^1]: I did something sort of like themes before this but it wasn't until I was introduced to this idea that I actually put it in words. Before I had quarterly goals like learn cooking, make friends, and work out more whereas now I would call that Year/Season of Health.

[^2]: I think it had something to do with the original mod trying to sell the subreddit and discord. In order to regain access the other mods had to organize a coup and petition access with the reddit admins. Since I don't know all the details I don't want to say more at risk of butchering the story.

[^3]: If there's one thing I learned for this experience, it's the importance of testing an MVP. After the test run, we nailed down a lot of details that we weren't sure of and those design decisions fed into the final application. Also, if the test run didn't work out as well as we expected, then it would have been smarter to give up or try something different instead of wasting weeks on an idea that was doomed to fail.

[^4]: This isn't saying much considering it's my latest big Javascript project and as long as I keep learning new things, my newer code is going to naturally get better.

[^5]: Something that my intro programming class professor told that I always try to keep to heart is to be a creator and not just a consumer. I leaned a lot in that class but this is the one thing that I remember the most.

[^6]: If I missed your name let me know and I'll be happy to add you.

[^7]: hyperbole

[^8]: see above projects.

[^9]: I've actually had people I meet mention my YouTube channel without me bringing it up (they probably Googled my name) and said some of the videos were interesting.

[^10]: For example, you can't change the text color of captions to be black. Horizontal dividers disappear when there is a content block preceding them. These seem like one line CSS fixes but it seems like no one in the Notion team is taking ownership of these bug fixes.
