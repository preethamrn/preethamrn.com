---
title: "Piver - The reason TeX is on version 3.141592653..."
link: "piver"
description: "You've heard of semver. You might have heard of zero ver. But what about piver?"
date: 2023-12-17
timeToRead: 4
tags: ["Programming"]
---

You've heard of semver. You've heard of calver. But what about piver[^1]?

For any versioning system to work,  it needs to increase as new versions are released. So in theory, instead of going from v1 to v2, you could go v1 -> v1.2 -> v1.23 -> v1.234 -> v1.2345 and so on. 
Now this wouldn't be a good versioning system and it's definitely not scalable, but it works.

Now imagine a system where instead of simply counting up the digits in numerical order, you instead chose to go by the digits of pi. And imagine if that system was used by a piece of software that was being used by millions of people around the world - you've probably even heard of it. It's called TeX.

You're probably in one of two camps right now. Either you've heard of this fact before and it's nothing new. Or you're like me and wondering all sorts of questions. For example:
#### 1. Did it start of like this or did this versioning system emerge sometime after the initial release?
There is no comprehensive list of TeX versions[^2] however it seems that after envisioning the idea for TeX in 1977, Donald Knuth released the first version called TeX82 in 1982. And then the next version of TeX with breaking changes[^3] was called TeX90 (I wonder when this was released). At this point, the version number 3.0 was assigned and it was decided that future versions of TeX would asymptotically approach the value of pi, digit by digit.

#### 2. How does this work with other pieces of software like Github?
Github releases are based on git tags. So this system should work as long as it never exceeds the length limit of a git tag[^4]. In any case, it doesn't matter because TeX isn't hosted on Github. Most TeX packages that I can find are listed on [CTAN](https://ctan.org/tex-archive) - the Comprehensive TeX Archive Network[^5]. The project predates Github by decades and will probably stay alive well past Github's shelf life.

#### 3. What version is TeX on right now?
When I first found out that TeX was using piver, I assumed that, like a lot of software, it would have had hundreds of releases by now and the current version would be hundreds of digits long.

But turns out, TeX is only on version [3.141592653](https://ctan.org/pkg/plain).

Bug reports are analyzed every few years and a new version is released thereafter. This has happened in 1992, 1993, 1995, 1998, 2002, 2007, 2013, and 2020[^6]. Following the pattern, the next change is expected in 2028 and the pattern will continue up until Donald Knuth's death, at which point, the final version of pi will be released, presumably indicating that the TeX has approached the asymptote and no future versions will be released. All bugs will becomes "features".

#### 4. and most importantly... Why?!
Knuth says it best in the [11:4 issue of TUGboat](https://tug.org/TUGboat/Articles/tb11-4/tb30knut.pdf)
> "I strongly believe
that an unchanging system has great value, even
though it is axiomatic that any complex system can
be improved. Therefore I believe that it is unwise to
make further "improvements" to the systems called
TeX and METAFONT. Let us regard these systems
as fixed points, which should give the same results
100 years from now that they produce today."

Originally I thought you'd have to be crazy to use a system like this, but after reading about it and learning the history of TeX, I realized that most software should actually strive to be more like it - instead of trying to do everything, solve a problem, solve it well, and try to make it compatible with other systems to enable extensibility without needing many future changes.

---

A few other notably wacky versioning systems:
 - **e-ver**: (like piver but using e instead of pi). Used by Metafont (a companion to TeX, also developed by Donald Knuth) and it's currently on v2.71828182. Similar to TeX, after Knuth's death, the final version of e will be assigned and this will receive no further releases.
 - **[0ver](https://0ver.org/)**: Not sure if this is to be taken seriously or not (given how widespread its usage is) but as the name suggests, in 0ver you never increment the major version and use 0.x.y.z.... forever.
 - **[SenVer](https://archive.ph/NjRQl)**[^7]: Not to be confused with SemVer, SenVer stands for Sentimental Versioning - where you get to decide what the version means using a vibes based approach.

Appendix: If this interested you, you can read more about the history of TeX, as well as how all the different softwares interface on the TeX User Group communications. A few links to get you started:

1. Overview of TeX, its children and their friends - Arno Trautmann: https://github.com/alt/tex-overview/blob/master/tex-overview.pdf
2. LaTeX vs MiKTeX vs TeX: https://tug.org/levels.html
3. TUGboat issues: https://tug.org/TUGboat/contents.html
4. A list of errata/corrections written by Donald Knuth, dating back to 1989: https://ctan.org/tex-archive/systems/knuth/dist/errata
5. Tuneups to TeX and Metafont in [2008](https://tug.org/TUGboat/tb29-2/tb92knut.pdf), [2014](https://tug.org/TUGboat/tb35-1/tb109knut.pdf), and [2021](https://tug.org/TUGboat/tb42-1/tb130knuth-tuneup21.pdf). Select communications between TeX implementers between 1987-1993 [here](https://ctan.org/pkg/tex-implementors). 

[^1]: piver isn't technically a real name. I made it up. I'm not sure this versioning system even has a real name.
[^2]: You could probably make a comprehensive list by going through all the issues of the TUGboat collection [here](https://tug.org/TUGboat/contents.html).
[^3]: The primary reason for a breaking change was in order to support larger 8-bit character sets that were common in Europe and Asia (https://tug.org/TUGboat/Articles/tb10-3/tb25knut.pdf). Presumably if TeX had started with an 8-bit character set, there would never have been any breaking changes.
[^4]: On my machine this is <span style='word-wrap: break-word'>3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190</span>. Any longer and I get an error "File name too long".
[^5]: Other TeX software however can be found on Github (with more sensible versioning systems). For example, LaTeX is released both on [CTAN](https://ctan.org/pkg/latex) as well as [Github](https://github.com/latex3).
[^6]: https://www-cs-faculty.stanford.edu/~knuth/abcde.html#bugs. The bugfixes in the latest release can be found [here](https://tug.org/texmfbug/tuneup21bugs.html).
[^7]: Unfortunately it appears that this link has succumbed to link rot - a topic that I think about a lot and will probably write about in the near future. The original sentimentalversioning.org page leads to something else now.
