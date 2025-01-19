---
title: How I analyzed Mr. Beast sponsor data
link: how-i-analyzed-mrbeast-sponsor-data
description: Mr. Beast has hundreds of videos and it would be infeasible to click through all of them manually. So I built some automations to help me with my analysis. Here's how I did it...
date: 2025-01-19
timeToRead: "5"
tags:
  - Programming
  - YouTube
---

This is a follow up to my previous posts about [analyzing Mr. Beast's old sponsorships](/posts/where-are-mrbeast-sponsors-now) and [how his new sponsors are different](/posts/why-does-mrbeast-cut-out-sponsors).

Mr. Beast videos go back super far. It's interesting that he doesn't seem to really delete any old videos from his past. He did Minecraft videos, Pokemon, a lot of "How much does X youtuber make?", how to be successful, etc. Honestly tried everything under the sun before finding the formula that worked - mainly doing things that no one else did at the time - like crazy giveaways and wasting a bunch of time doing pointless things like counting to 1 million.

I was curious to learn how his content evolved over the ages and specifically about his sponsorships. It's been at least 7 years since his videos starting going viral and sponsored. Have any of those sponsors panned out?

Now I could click through every single Mr. Beast video but that would take ages. So instead I automated fetching YouTube descriptions and other metadata. Typically the first line of the description links to a sponsor so I could figure it out that way instead of clicking on 100 links. Here was my process:
## 1. Fetching YouTube Data
Fortunately, YouTube provides a handy API for fetching the title, description, view count, and other details about a video. I wrote a quick script and let it run. Within about 5 minutes, I had all the metadata.
```
playlist_id = fetch_channel_uploads(channel_id: UCX6OQ3DkcsbYNE6H8uQQuVA)
videos = []
while True:
	next_videos, next_cursor = fetch_videos(playlist_id, cursor)
	videos.append(next_videos)
	if next_cursor:
		cursor = next_cursor
	else:
		break
videos_metadata = []
for video_id in videos:
	videos_metadata.append(fetch_video_meta(video_id, 
		['snippet', 
		'statistics',
		'title',
		'description',
		'publishedAt',
		'thumbnails',
		'viewCount',
		'duration])
	)

csv.writerows(videos_metadata)
```

A few caveats:
1. YouTube only lets you fetch 50 video_ids at a time when getting all the videos in a playlist so I had to do it in a loop
2. The Uploads playlist contains ALL uploads including shorts. So I filtered those out by checking the video duration
## 2. Google Sheets
Once I had all the metadata in a CSV file, I could easily import it into a spreadsheet. I was a bit worried how well it would work given how the video descriptions would have a bunch of special characters which might not be correctly escaped in the CSV but it worked on the first try.

Once everything was in Google Sheets, I could clean things up a bit:
1. using the IMAGE function to fetch the thumbnail URL. It was a lot more useful to actually see the videos that I was talking about instead of just a grid of text.
2. filtering out all the shorts. I was only interested in the sponsors on regular videos.
3. hiding columns that were irrelevant.
4. adding columns for "Sponsor" and "Spend" which I would use to categorize the sponsors and calculate how expensive a video was
5. creating a pivot table - grouped by sponsor and summing the view count and spend.
![The spreadsheet I created for analysis](/posts/how-i-analyzed-mrbeast-sponsor-data/spreadsheet.png)
## 3. Analysis
Once I had all the descriptions, I went row by row and categorized each video to a single sponsor. This process took a long time. For one, there were almost 300 videos to go through and categorize. Also, many of those videos weren't clear - for example, some didn't have a sponsor in the description - oftentimes those were charity videos which makes sense. Sometimes they would have multiple sponsors. And sometimes they would have a sponsor but it wasn't really clear how much the sponsor was actually involved - ie, did they pay for the video or just provide a location/special access.

In hindsight, I probably could have automated a lot of this - used GPT to take the first 5 lines of the description and categorize what type of video it was (ie, self promo, charity, sponsored, etc.) and who sponsored it. However, I'm actually glad I did it manually. At this point, I wasn't even sure what question I wanted to ask. So doing manual analysis actually helped me get a grasp of the data and figure out interesting things to talk about like the weird sponsors or the period of time where all the sponsors were cut out.
## 4. Analyzing edge cases
I hit a 2 year period where none of his videos mentioned a sponsor in the description. This perplexed me. There's no way that none of his videos in this time were sponsored. In fact I remember seeing some of his videos with sponsors from this exact time period.
![Period of time with no sponsors](/posts/how-i-analyzed-mrbeast-sponsor-data/no_sponsors.png)

That got me to do some more digging. Once again I wanted to automate it so I turned to another tool - [sponsorblock](https://sponsor.ajay.app/). This is a tool which allows users to categorize sponsored segments in YouTube videos. Fortunately it has an API which I could use to see which of these videos were actually sponsored.
```
for video_id in videos_ids:
	resp = requests.get('https://api.sponsor.ajay.app/api/skipSegments',
		{videoID: video_id, categories: '["sponsor"]'})
	start, end = get_segment_timestamps(resp)
	csv.writerow([video_id, start, end])
```

While most of the videos are missing sponsored segments (I'm guessing that users came back to these videos to delete those segments once Mr. Beast removed the sponsor from the videos), a few videos still had sponsored segments... according to sponsorblock at least because when I check the corresponding video, the segment is just regular content.

I talk more about this analysis [in my previous post](/posts/why-does-mrbeast-cut-out-sponsors#cutting-sponsors-out-of-his-videos) but the summary is that by cross verifying the uploads with archived versions of the video, I was able to see the sponsored segments from sponsorblock line up exactly with the removed segments from the original video.
# Conclusion
That concludes my series on Mr. Beast sponsor analysis. This post doesn't have a grand conclusion like the previous two but I found this exercise pretty enlightening and with more automations and perhaps leveraging the openai API to do more text analysis for me, I'll probably do this on other channels as well.