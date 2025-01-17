---
title: Why does Mr. Beast cut out sponsors from his older videos?
link: why-does-mrbeast-cut-out-sponsors
description: Most YouTubers don't have the luxury of removing ads from their older videos but Mr. Beast sets his own rules. How does he get away with it and what else is unique about his sponsorships?
date: 2025-01-04
timeToRead: 6
tags:
  - Programming
  - YouTube
---

Most YouTubers don't have the luxury of removing ads from their older videos but Mr. Beast sets his own rules. How does he get away with it and what else is unique about his sponsorships?

In [my last post](https://www.preethamrn.com/posts/where-are-mrbeast-sponsors-now) I talked about the return on investment received by many of Mr. Beast's early sponsors. But his later sponsors are quite different. In fact, it's significantly harder to get data for many of his newer videos because they've been edited out. You won't find a link to them in the description and you won't find a shoutout anywhere in the video.
![Spreadsheet with a bunch of Mr. Beast videos. None of them seem to have any sponsors](/posts/why-does-mrbeast-cut-out-sponsors/descriptions.png)

Editing videos isn't some special feature that only Mr. Beast and other top creators can do. I can edit my videos too and I have a double digit number of subscribers.
![YouTube studio showing that anyone (even myself) can edit videos](/posts/why-does-mrbeast-cut-out-sponsors/youtube_studio.png)

What's unique is that most creators leave sponsors in their video forever but Mr. Beast doesn't.

Each of his videos easily gets over 150M views. That's more than a Superbowl every video. He has mentioned in the past that because of this [it's very difficult for brands to sponsor his videos](https://youtu.be/9IQ_ldV9z_A?si=nQ3ABDp8P0eJA91h&t=3483) - a single video often exceeds the company's total YouTube marketing budget for the year. He has a lot more leverage which means he can set the terms of the brand deal. Doing things like:

#### Cutting sponsors out of his videos
Almost every video from 2019-01-08 to 2021-09-04 is missing a sponsor. It would be easy to assume that no one wanted to sponsor him or that he didn't accept any sponsors during that period. But there's no way a channel that's spending hundreds of thousands of dollars per video could sustain itself for almost 3 years without a sponsor. And turns out my hunch was right.

Using the [sponsorblock API](https://sponsor.ajay.app/), I was able to find some examples of ads in his videos like [this one](https://youtu.be/wMuYiLby3-s?si=rjVFTKYwWV8DhMhs&t=289) which says there should be an ad read from 4:44 to 5:39. However, in the current version of the video no ad exists besides the "honey" signs in the background of the set throughout the video. When I check the [wayback machine](https://web.archive.org/web/20210420145348/https://www.youtube.com/watch?v=wMuYiLby3-s) however, the length of the video is 57 seconds longer - the length of the ad that was cut out.

::side-by-side{leftWidth="50%"}
#left
![Latest video with sponsor cut out](/posts/why-does-mrbeast-cut-out-sponsors/new_vid.png)
Current version of the video doesn't have a sponsorship.

#right
![When first uploaded the sponsor was there](/posts/why-does-mrbeast-cut-out-sponsors/old_vid.png)
When it was first uploaded, the sponsor was present.

::

It's hard to say exactly when the ad read was removed, but the first archive that doesn't have it is from [April 2022](https://web.archive.org/web/20220417234537/https://www.youtube.com/watch?v=wMuYiLby3-s) - around 2.5 years after the video was uploaded.
![The sponsor was removed from the description in April 2022](/posts/why-does-mrbeast-cut-out-sponsors/edited_vid.png)

#### Taking multiple sponsors in a single video
A handful of videos ([this](https://www.youtube.com/watch?v=erLbbextvlY) and [this](https://www.youtube.com/watch?v=mKdjycj-7eE)) link to a Fortnite map in the description on top of the actual video sponsor. It's not clear if Epic Games is paying for these links but given they've sponsored Mr. Beast in the past, it's not a huge leap to take.

The Western Union ad in the first link is especially interesting because although they are the main video sponsor, they don't have a link or call to action anywhere in the video or description but Fortnite does.

#### Advertising his own products more than his sponsors'
I can't point to every single example of this because it happens in almost every video. But there are some that are a bit more egregious than others. For example, [this video](https://www.youtube.com/watch?v=mKdjycj-7eE) has a link to a Mr. Beast Fortnite map, multiple mentions of Feastables - his chocolate bar company - throughout the video, and a 1.5 minute ad for Samsung only towards the end of the video.

# Sponsors
As part of my analysis, I wanted to see if there was any common thread I could find with Mr. Beast's newer sponsorships compared to his older ones. One major distinction is that his newer videos are sponsored by significantly more legitimate companies. Although I'm not sure how much of that has to do with the companies just having more money (so they by definition have to have some level of scale and legitimacy) and how much is because Mr. Beast's team is vetting their sponsors better.

#### Adult Companies
A lot of his sponsors these days are from adult companies. And no I'm not talking about those kinds of "adult" companies. Although those companies might actually make sense and appeal more to the average audience of Mr. Beast - 15 year old teenage boys.

Instead, I'm talking about companies like TurboTax, ZipRecruiter, Western Union, Acrons, Wix, Shopify, and Experian. For whatever reason, these companies think that they'll be able to recoup a multi-million dollar investment from a Mr. Beast video. In fact Experian has sponsored two whole videos so clearly they found the publicity worth it.

#### How do they even have money for this?
Then there are videos like [this](https://www.youtube.com/watch?v=J_z-W4UVHkw), [this](https://youtube.com/v/jdMNoQE3mIQ), or [this](https://www.youtube.com/watch?v=J_z-W4UVHkw) which are sponsored by the International Fencing Federation, the US Coast Guard, and a bunker company called SurvivalCondo respectively. I assume they didn't pay much because I can't imagine them having the money to sponsor a Mr. Beast video, but in that case I also don't see why Mr. Beast would name them in the video. Heck, one of them was for the [.store top level domain](https://youtube.com/v/fuhE6PYnRMc) - yeah you heard that right - not a registrar; just the TLD.

#### Some things are still the same
That said, you still see the occasional video game ad like for Monster Hunter[^1], Stumble Guys, and Immortals of Aveum. There are also the classic VPN sponsors that you find often on other YouTube channels like SurfShark. And lastly we see 3 videos sponsored by Cirkul - a beverage company that seeks to "Transform your water with the turn of a dial." It's nice to see that some direct to consumer, VC backed companies are still spending absurd amounts of money on YouTube.

# Conclusion
Without actually reading a contract between Mr. Beast and his sponsors, it's hard to tell what his strategy is. How does he determine which sponsors to take? Is it just the highest bidder? Do all his sponsors allow him to remove any trace of them from the video after 2 years? Many of his newer videos have the sponsors so tightly integrated with the content that it would be hard to cut them out video[^2]. On one hand this is great for the brand because it's hard for viewers to skip over ads without missing content. On the other hand, it points to a shift in priorities - maybe newer videos won't be edited with the ads removed after the fact.

In my next and final post of this series I'll talk about how I captured all this data, ways I automated some of the analysis, and plans for analyzing other YouTubers' sponsors.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Wrote a follow up post to my previous analysis of Mr. Beast sponsors where I look into the sponsorships on some of his newer videos<a href="https://t.co/SnuALc12YS">https://t.co/SnuALc12YS</a></p>&mdash; preethamrn (@preethamrn) <a href="https://twitter.com/preethamrn/status/1875464467997454430?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

[^1]: This ad got some heat because there is a [progress bar](https://youtu.be/UPrkC1LdlLY?si=Jxfb7DXCJ54RQJsE&t=1279)  at the bottom which shows how much more of the ad is left however the bar moves extremely quickly at the start (halfway within 10 seconds) even though it's more than a minute long.

[^2]: For example, in [this video](https://youtu.be/2isYuQZMbdU?si=UJHtQ6myLNvUuQXP&t=391), he shouts out the sponsor 6 times in a 3 minute period while the contestants are doing the challenge in the background - do you skip the sponsor and miss the content or watch the content while also hearing the ad read?
