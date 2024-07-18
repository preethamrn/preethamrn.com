---
title: "AI Zero to Hero Week 1: Fear of missing out on the AI train and what I'm doing about it"
link: "ai-zero-to-hero-week-1"
description: "I kept procrastinating learning ML because I either thought I was too late or not smart enough... Time to stop that."
date: 2024-07-04
timeToRead: 6
thumbnail: "ai-zero-to-hero/extrapolation.png"
tags: ["Programming"]
---

During college, I had the fear of missing out on understanding machine learning because I didn't take enough classes or do any research related to it.

After graduating, I had the fear of missing out because I didn't end up doing a masters or getting a job in a field related to ML.

A few years later I had the fear of missing out because everyone else in the field seemed so far ahead of me and I had only watched a handful of of Andrew Ng's lectures before moving on.

Then ChatGPT came out and I felt like we were already in the future way beyond anything I could possibly comprehend. Papers about architectures like transformers were over 5 years old and they went completely over my head.

And now it's almost 2 years later and I finally realized that I can't keep waiting around saying it's too late. A lot of people are doing incredible things with AI and machine learning despite starting only a few years ago. You're only about 20 books behind the most cracked person in any field. Now that's no simple feat, but I can't avoid the fact that if I had started my journey 5 years earlier when I started feeling left out, I probably would have been a lot further along.

:img{alt="https://xkcd.com/1768/ - Settling" src="https://imgs.xkcd.com/comics/settling.png" width="30%"}

So with that preamble out of the way, here's week 1 of my progress:

## Courses
We don't deserve Andrej Karpathy. Someone with his credentials could probably be spending their time solving complex, novel problems. Instead, he's educating beginners and making one of the best introductions to neural networks I've ever seen. Even now, his work on [llm.c](https://github.com/karpathy/llm.c) seems to primarily be a tool for teaching how transformers work.

### micrograd
micrograd was a great primer into how back propagation works with a dynamically constructed set of operations. In the past, I had built multi-layer perceptrons using matrices and knew how to back propagate those but I didn't understand how libraries like pytorch were able to figure out how to compute gradients on arbitrary network with things like softmax, activation functions, etc., built in. Now I know that it's just the chain rule (with a veeeery long chain). As long as you can compute the forward and backward passes of an operation, you can throw it into the computation graph.

The lesson ends off with building an actual neural network and training it on a toy problem. Despite the simplicity of the network, actually understanding how it works under the hood is critical in understanding later concepts which come up when scaling up the network. For example, dead neurons appear when the gradient of the activation function is 0. You could take this as a fact, or you could go back to the lesson about back propagation and the chain rule and realize why that's the case.

### makemore
makemore is a really great follow up to micrograd because while micrograd teaches you how to build pytorch under the hood, makemore explains how to use it. Without micrograd, makemore would make a lot less sense, and without makemore, micrograd would have little to no motivation.

These lesson go more into depth about training an actual model, explaining concepts like loss, regularization, test/train/dev split, batching, learning rate adjustment, how to initialize the weights and biases of the network, and more (I still haven't finished it).

## Reading papers
- I re-read the [Attention is All You Need](https://arxiv.org/pdf/1706.03762) paper. The last time I read it, I sort of knew what a neural network is and could tell you the equations for regularization (enough to pass classes) but barely had an intuition for how it worked. A lot still went over my head on the second read but now it makes much more sense. It kind of reminds me of when I was a kid interested in computers and reading some Wikipedia articles and feeling like they were way more complex than they needed to be. But as an adult with years of computer science context, it turns out that those Wikipedia articles were actually pretty succinct and I was just a dumb little kid. I'm looking forward to coming back to papers like this and fully understanding them enough to reimplement them. Nothing is insurmountable.
- Read https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf. This one is a much simpler paper but I can also tell that a lot of parts would have gone well over my head if I had tried reading it a month ago. It also probably helps that I literally just implemented it. Being somewhat of a seminal paper, it doesn't have to build off on that much prior knowledge. Instead, a lot of the terminology that it uses is stuff that I almost take for granted at this point (like using vectors and matrices to represent certain concepts like layers and inputs)

## Personal Projects
I haven't worked on anything here yet unless you count making small tweaks to the makemore code or building a 4-gram model to compare against the MLP model. I'm assuming in the future I'll have something to put here so for the sake of consistency I'll leave this empty section here.

## Other neat things I've learned
People are way over hyped about AGI and making wild extrapolations. Learning more about the math made me realize that a lot of people who talk about AI are probably talking out of their asses in the same way that a lot of crypto grifters barely understand how distributed systems work.
:img{alt="Extrapolation" src="/posts/ai-zero-to-hero/extrapolation.png" width="40%"}

## Life
- I'm packing up for a vacation and also having friends over so a lot of free time went towards errands like cleaning.
- Also playing Hades 2 (great game but eating into time I could be learning more)
- Plus I have a job so that shrinks my free time pretty considerably. Most of the things I listed above happened over one and a half weekends.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I wrote about how I came to terms with being &quot;behind&quot; everyone else in ML/AI and what I&#39;m doing to fix that. I spent the last 8 years telling myself that I was either too late or that I wasn&#39;t smart enough but I figure everyone starts somewhere.<a href="https://t.co/Rkk5Mbnjpi">https://t.co/Rkk5Mbnjpi</a></p>&mdash; preethamrn (@preethamrn) <a href="https://twitter.com/preethamrn/status/1809073849927151915?ref_src=twsrc%5Etfw">July 5, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 