---
title: "Who actually even uses is-odd and is-even?"
link: "who-actually-uses-is-odd"
description: "People love to make fun of Javascript dependency bloat by talking about packages like is-even and is-odd but that got me wondering... Who actually uses them?"
date: 2024-01-13
timeToRead: 5
tags: ["Programming"]
---

People love to make fun of Javascript dependency bloat[^1] by talking about packages like is-even and is-odd but that got me wondering... Who actually uses them?

### What are is-even and is-odd?
Most applications use shared packages to perform common tasks so developers don't need to rewrite code that someone else has already taken care of. These packages are often distributed through a package manager (in the case of Javascript this is npm - node package manager).

is-even and is-odd are npm packages which check if a number is even or odd. If that's all you know about them, then it does seem a bit silly that these exist considering you can usually do that using just one line of code: `n % 2 === 0`. Javascript however will happily allow you to check if a string is even or odd, in which case you now have to worry about whether the code is returning false because of some error or because the number is actually not even.

is-even and is-odd take care of this by adding a bit of extra error checking. Specifically by:
1. converting `n` to a positive number
2. `n` is actually a number
3. and `n` is within the bounds of a "Safe Integer" because otherwise we'll find that `12345678978901233 % 2 === 0`  returns true even though it ends in a 3.

### Who uses is-even and is-odd?
Considering how infamous it is, I expected it to have found its way into a ton of everyday packages and it would be super easy to write this section. However I was pleasantly surprised to find it used almost no where.
The first thing I made sure of was that I wasn't using the packages by searching through the node_modules of the projects that I worked on. I wasn't.

Then I looked through [npmgraph](https://npmgraph.js.org/?q=is-odd#deps=devDependencies)[^2]. Turns out this shows the packages that is-odd uses and not the other way around. Interestingly (although perhaps I shouldn't be surprised), the author of is-even and is-odd uses a lot of his own packages. If you click on a few random packages on that page, there's a good chance you'll find the name jonschlinkert there.

I then tackled this problem from two angles:

First by doing a broad code search through github to see which packages depend on it. Searching for all versions of is-odd results in [36 thousand](https://github.com/search?q=registry.npmjs.org%2Fis-odd%2F-%2Fis-odd+AND+%28path%3Apackage-lock.json+OR+path%3Ayarn.lock+OR+path%3Abun.lock%29&type=code) results which I don't think I could go through on my own. Limiting it to the latest version released over 6 years ago (3.0.1) gives me only [98 results](https://github.com/search?q=registry.npmjs.org%2Fis-odd%2F-%2Fis-odd-3.0.1.tgz+AND+%28path%3Apackage-lock.json+OR+path%3Ayarn.lock+OR+path%3Abun.lock%29&type=code), all of which are just small personal projects.
The downside of this is that I'm limiting my search to only Github, only the latest versions of repositories, only repositories that commit the lock file, and only ones using v3.0.1. The upside is that I don't have to go through 36 thousand repositories.

I also tried searching the repositories in the frameworks of popular organizations like React and Vuejs. Although I did find one reference to it in Vue, it's a [transitive dependency](https://github.com/vuejs/vue-test-utils-mocha-webpack-example/blob/master/package-lock.json#L6183) through and old version of [nyc](https://github.com/istanbuljs/nyc) in a deprecated [example repository](https://github.com/vuejs/vue-test-utils-mocha-webpack-example) of how to do unit testing. So I'm happy to say React, Next, Vue, Nuxt, and Svelte are all safe. But what I've learned is that if you really want to be sure then you'd need to check for yourself because anything could happen with older versions and lesser known packages which aren't as careful with their dependencies.

Most of the downloads seem to be from an old version of [micromatch](https://github.com/micromatch/micromatch) also written by jonschlinkert.

These methods aren't perfect but I can pretty confidently say that if you're using anything written within the last 3 years, you probably don't depend on either of these packages. If I really wanted to figure out where is-odd is used, I'd probably have to download a list of every single package from npm and their dependencies and build a dependency graph that's 2 million nodes large. If anyone has a better idea then let me know but for now this will have to be a project for another day.

### Why are is-even and is-odd?
According to the author, he published them back in 2014 when he was still learning to code. I don't think publishing something to a global, centralized package manager is the first thing that comes to mind when I first started to code but I think that says more about my self-confidence than it does about him.

One thing that surprised me is that these packages were only added in 2014 - almost 5 years after npm was released. Considering there's no barrier to creating a new npm packages[^3], I'm surprised it took that long for someone to publish a package with such a simple name.

crates.io was started in 2014 and it too got its version of is-odd about 4 years later. I guess this inevitable with any centralized package registry.

### Does it deserve the hate?
Not really. No one is forcing you to use them. And it's not really squatting the name because the packages do exactly what they say on the tin (check whether a number is even or odd). It does seem like they get a disproportionate amount of hate for the damage they do, which realistically is a whole lot less than other more "useful" packages like [left-pad](https://www.infoworld.com/article/3047177/how-one-yanked-javascript-package-wreaked-havoc.html), [eslint-scope](https://github.com/eslint/eslint-scope/issues/39), and [node-ipc](https://www.bleepingcomputer.com/news/security/big-sabotage-famous-npm-package-deletes-files-to-protest-ukraine-war/).

[^1]: Rightfully so considering its history with packages like [left-pad](https://arstechnica.com/information-technology/2016/03/rage-quit-coder-unpublished-17-lines-of-javascript-and-broke-the-internet/)
[^2]:  Fun fact: 8 hours before I started researching this, the owner pushed a regression which broke the website. I had to create a [pull request](https://github.com/npmgraph/npmgraph/issues/199) and hope that he was going to actually check his mail on a Saturday before New Year's Eve... The website wasn't particularly useful for what I was trying to do but it was funny that my research was stopped just as soon as it started as if some higher power was telling me to quit while I was ahead.
[^3]: Assuming you can accept the terms of use: https://docs.npmjs.com/policies/open-source-terms#acceptable-use
