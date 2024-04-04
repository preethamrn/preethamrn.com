---
title: "What to do when an airline website doesn't accept your legal name"
link: "southwest-flight-bug"
description: "Southwest usually has good customer service... but in this case it's completely broken, I can't fix it myself, and the company has no plans of fixing it"
date: 2024-04-04
timeToRead: 5
tags: ["Life"]
---

Southwest is a company that I used to respect for good customer service[^1]. Their fares are reasonable and not having to worry about extra fees for checked bags or carry-ons is nice. They also make canceling flights for a flight credit really simple. Flight credits can be applied to get a discount on future flights if booked for the same person. Or so I thought until I tried using it recently...

![The initial error](/posts/southwest-flight-bug/initial_error.png)

When I tried applying my flight credits, I was greeted by this error message. Refreshing the page, double checking all the details, trying to book a different date or time - nothing worked. Turns out this is a known bug and [it's existed for at least the last 4 years](https://community.southwest.com/t5/Travel-Policies/can-not-apply-for-my-travel-fund/td-p/99019#messageview_2).

Reading through the comments, it hit me. My legal first name has a space in it. Southwest doesn't like that. But the TSA doesn't like when the name on my ticket doesn't match the name on my ID ([it's illegal](https://www.tsa.gov/travel/frequently-asked-questions/does-name-my-airline-reservation-have-match-name-my-application)). I guessed that when storing my name for the flight credit, they truncated my first name so it only kept the first word (removing my "middle" name).

I tried different combinations of using my legal name and the truncated name in the flight credits input and the passenger information input. Nothing worked. It always either complained that my name didn't match the name of the flight credit or that the flight credit didn't match the name in the passenger information. The closest I got was being able to apply the flight credits by truncating my first name on the ticket but then I got an error when actually booking the ticket because I needed to change my first name back to my legal name and it no longer matched the flight credit.

::side-by-side{leftWidth="100%"}
#left
![Using the truncated name allows me to apply the flight credits](/posts/southwest-flight-bug/truncated_name.png)
Using the truncated name allows me to apply the flight credits

#right
![But after they're applied, I'm unable to book the flight anymore](/posts/southwest-flight-bug/truncated_name_error.png)
But after they're applied, I'm unable to book the flight anymore
::

Eventually I capitulated and contacted their support on Xitter[^2] as well as calling their customer support number. Here's what I found out.

::side-by-side
#left
1. The name on the flight credit actually is stored correctly on the backend so there's nothing they can update in the database that would help me.
2. There's probably some processing happening in the backend between getting the flight credits and booking the flight
3. The website doesn't allow me to apply the credits myself but customer service agents are.
4. I have to call them each time I want to book a flight using flight credits. They told me in no uncertain terms that they weren't planning on fixing it and that I'd have to call them each time.

#right
![Customer service response](/posts/southwest-flight-bug/solution.png)
::

Calling them wasn't the worst experience although it did still require a 10 minute hold. Eventually I got on the line and after giving them all the information I already entered, listening to their spiel about how I can upgrade my ticket or book rental cars through them, and giving another human my credit card details over the phone, I was able to book my flight with the credits. I still don't understand how they were able to when I wasn't.

Southwest.com isn't open source [unlike other applications I've used](https://www.preethamrn.com/posts/my-first-open-source-contribution/) so as much as I'd like to, I can't fix it myself. So what am I supposed to do?

::side-by-side
#left
Flight credits are one of the main features that they advertise on their homepage and the fact that they're not fixing this issue that's been known for over 4 years almost feels negligent. I feel like there's nothing I can do at this point short of accepting a job at Southwest and trying to fix it myself[^3]. Part of my hope writing this is that someone working there will see this and fix it.

#right
!["Change fees don't fly with us" - Southwest website](/posts/southwest-flight-bug/motto.png)
::

### Addendum
In my search for more details about this bug, I found a few more (albeit minor) bugs with their website.

::side-by-side
#left
Even their [help page](https://www.southwest.com/help/changes-and-cancellations/flight-credit) was buggy[^4]. There's content at the top of the page that you can't click on and then a copy of that content at the bottom of the page.

#right
![help page CSS is broken](/posts/southwest-flight-bug/help_page.png)
::

::side-by-side
#left
Also, when I contacted the Southwest account on Twitter and was asked to sign in and link my Southwest account to my Twitter profile.

#right
![twitter link](/posts/southwest-flight-bug/twitter.png)
![account verification page](/posts/southwest-flight-bug/twitter_verification.png)
::

::side-by-side
#left
When signing in, I kept getting an error saying my username and password don't match even though the exact same username and password work on southwest.com

#right
![account verification login fails even though the password should be correct](/posts/southwest-flight-bug/login_bug.png)
::

[^1]: Given my generally positive customer service experiences with them, my hope is that someone who can get this fixed sees it and actually cares to fix it.
[^2]: As much as I'm not a fan of using Twitter, it turns out it's still the best place to get customer support.
[^3]: I also don't think this would work because I doubt any single team owns the feature needed to fix this bug and even if they did, it wouldn't be a priority. It's probably a faulty assumption that just carried into multiple places in the codebase.
[^4]: It appears that they've fixed the help page since I last checked but I still have a screenshot of the weird CSS.
