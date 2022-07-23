---
title: "How Fast Inverse Square Root actually works"
link: "fast-inverse-sqrt"
description: ""
date: 2022-08-01
timeToRead: 15
published: true
thumbnail: "./thumbnail.png"
tags: ["Learn", "Programming"]
---
import NewtonMethodDemo from '@/components/PostComponents/FastInverseSqrt/NewtonMethodDemo.vue'
import FloatingPointDemo from '@/components/PostComponents/FastInverseSqrt/FloatingPointDemo.vue'

<note: TODO add thumbnail>

<FloatingPointDemo />
<NewtonMethodDemo/>

<note: TODO this graph down>

> This article contains some profanity which is found in the original code. If you’d prefer to read a version without profanity or one to show kids.

$$
\frac{1}{\sqrt{x}}
$$

Fast Inverse Square Root is one of the most famous algorithms in the world. But what makes it so iconic? How does the algorithm work? And what the fuck is `0x5f3759df`? All will be answered in this simple blog post.

```c
float Q_rsqrt( float number )
{
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;                       // evil floating point bit level hacking
	i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//	y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

	return y;
}
```

## Why is this algorithm so iconic?

If you ask me, it’s because of the comments and just how strange all the steps are. It's not often that you see swear words in official source code. And doing division without a single division operator! How's that even possible?!

The algorithm was originally found in the source code of Quake III Arena, attributed to the iconic John Carmack however it was later discovered to predate the game.

Finding the inverse square root of a number is important for normalizing vectors in computer graphics programs which is often required in lighting and shaders calculation. These computations are made thousands of times per frame so it was imperative to find a fast algorithm for it.

Finding the inverse square root normally involves finding the square root of a number and dividing 1 by the square root. Both of those are complex operations that take a long time on old CPUs. On the other hand, the fast algorithm only requires multiplications, bit shifts, and subtraction, all of which can run much faster so it became the defacto method for computing inverse square roots.

Is it used today? Not really. Hardware advancements have made this pretty obsolete since many CPUs come with rsqrt instructions (see: [https://www.linkedin.com/pulse/fast-inverse-square-root-still-armin-kassemi-langroodi/](https://www.linkedin.com/pulse/fast-inverse-square-root-still-armin-kassemi-langroodi/)) which can compute the inverse square root in a single instruction.

# “Slow inverse square root”

[https://replit.com/@PreethamNaraya1/Slow-Inverse-Square-Root#main.c](https://replit.com/@PreethamNaraya1/Slow-Inverse-Square-Root#main.c)

```c
float S_rsqrt( float number, int iterations ) {
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = 0.01; // initial value of y
	for (int i = 0; i < iterations; i++) {
	  y  = y * ( threehalfs - ( x2 * y * y ) );
  }

	return y;
}
```

Here’s my “slow inverse square root” algorithm.

Try running this algorithm. This algorithm is slower but it still works. You’ll notice that larger values of N result in slower iterations.

**<note: insert graph of execution time + number of iterations here>**

(for extra credit, try tweaking the initial value of y to see how that impacts the convergence)

Unlike the normal method, this doesn’t use any square root or division operations. However, it also doesn’t use 0x5f3759df from the “what the fuck” step or the “evil floating point hack”. That’s because those steps aren’t even required. The core of this algorithm is using something called Newton’s method (and it’s surprisingly straightforward).

## Newton’s Method

There are plenty of great resources on what this method is and why it works

[Newton's method produces this fractal, why don't we teach it in calculus classes?](https://youtu.be/-RdOwhmqP5s?t=336)

TL;DW: It works by taking an approximation and iterating closer and closer to the actual value by riding the slope of the curve.

Here’s a bunch of fancy math for completion’s sake however you can skip to the next section if you’re more interested in the what the fuck 0x5f3759df is and the evil floating point bit level hack.

Let’s say that x is our input and y is the inverse square root. We want to solve for the equation

$$
\begin{aligned}
y &= 1/sqrt(x)\\
\implies 0 &= 1/y^2 - x
\end{aligned}
$$

Newton’s method can help us solve the roots of this equation (remember we’re solving for y here. x is a constant).

<note: add NewtonMethodDemo component here>

$$
\begin{aligned}
f(y) &= 1/y^2 - x \\
f'(y) &= -2y^{-3}
\end{aligned}
$$

To get the next iteration of y, we “ride the slope” of f(y) one step closer to f(y).

$$
\begin{aligned}
f(y)_{next} &= y - f(y)/f'(y)\\
f(y)_{next} &= y - \frac{1/y^2 - x}{-2/y^3}\\
f(y)_{next} &= y + y/2 -xy^3/2\\
f(y)_{next} &= y(3/2 -xy^2/2)
\end{aligned}
$$

Which is how we get the code

```c
const float threehalfs = 1.5F;
x2 = number * 0.5F;

y = y * (threehalfs - x2 * y * y) // first iteration
```

And now we’re doing divisions without a single division operator! Isn’t that exciting!

The important thing to note here is that Newton’s method is just an approximation. The closer your initial guess, the fewer iterations you’ll need. With “slow inverse square root” we often need more than 10 iterations to converge on the actual value. In the fast inverse square root algorithm, we get away with just a single iteration. So that’s our next goal - choosing a better initial guess.

# “What the fuck?” ie, choosing a better initial guess

```cpp
i = 0x5f3759df - ( i >> 1 )
```

The `i` on the left hand side is our initial guess `y` and the `i` on the right hand side is our original number `x`. So let’s rewrite the code so we don’t get confused between the two different values of `i`

```cpp
y_bits = 0x5f3759df - ( x_bits >> 1 )
```

One thing to note is that **these are the binary representations of floating point numbers and not the numbers themselves (x_bits and y_bits instead of x and y)**. That allows us to do operations like subtraction (`-`) and bit shifting (`>>`). How we do this conversion will be explained in the next section on “evil floating point bit level hacking” but first we need to understand how do IEEE floating point numbers work…

## How do IEEE floating point numbers work?

Floating point is a fancy way of saying binary scientific notation.

Just like regular scientific notation has numbers like $+1.6*10^{15}, -1.731*10^{-52}, +4.25*10^0$, floating point has numbers like $+1.101011*2^{11010}, -1.001101*2^{-101}, -1.001*2^{0}$

There are a few commonalities in both representations:

1. The numbers are split into a sign (+ or -), a coefficient (also called a mantissa), and an exponent.
2. The leading number is never zero. If it was, we could just shift the point to the first non-zero number and subtract from the exponent.

Using these two rules, we can write our floating point number as

$$
x = s*m*2^e\\
x = s*1.M*2^{E-127}
$$

- s is the sign. If the sign bit S is 0 then the number is positive (ie, +1). 1 means negative (ie, -1). For the purposes of inverse square root x will always be positive (you can’t take square roots of negative numbers in the “real” world), s will always be 0. We’ll just ignore it for the rest of this post.
- m is the mantissa. Since the leading digit of a floating point number is always a 1 in binary, the 1 is implied and M is just everything after the floating point (ie, m = 1 + M)
    - Astute readers might notice that if the mantissa is 0 then we’ll have a leading 0, the floating point standard handles this in an interesting way but since the inverse of 0 is undefined, we’ll just ignore it for the rest of this post.
- e is the exponent. To store positive and negative exponents, we take the unsigned exponent value (E) and subtract 127 to get a range from -127 to +128. This allows us to store tiny numbers smaller than 1 using negative exponents and large numbers bigger than 1 using positive exponents.

### Working with logarithms

Working with exponents is tricky and confusing. Instead, by taking the logarithm, we turn confusing division, multiplication, and exponent operations into simple subtraction, addition, and multiplication.

It turns out that working with algorithms allows us to find a relationship between the binary representation of x ($x_{bits}$) and the number $x$. If you squint really hard then you can see that taking the log of x will bring the exponent value down and with some scaling and shifting, it’s proportional to $x_{bits}$. We don’t have to squint.

$$
\begin{aligned}
x_{bits} &= 2^{23}*(E + M)
\end{aligned}
$$

Meanwhile

$$
\begin{aligned}
x &= m*2^e\\
\implies log_2(x) &= e + log(m)\\
&= E - 127 + log(1+M)
\end{aligned}
$$

Through another fortunate quirk of logarithms, we see that $x \approxeq log(1+x)$ [https://www.desmos.com/calculator/dd1xqmj6cp](https://www.desmos.com/calculator/dd1xqmj6cp)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68704e67-6ffe-45e8-80d0-4d36dfa5a9b6/Untitled.png)

Putting all of this together, we get

$$
\begin{aligned}
log_2(x) &= E-127+log(1+M)\\
&=E-127+M+\varepsilon\\
&=2^{23}*(E+M)/2^{23}-127+\varepsilon\\
&=x_{bits}/2^{23}-127+\varepsilon\\
\end{aligned}
$$

So now we have a mathematical relationship between the binary representation of x and log(x).

## What is 0x5f3759df

Using logarithms allows us to turn $y = 1/x^{1/2}$ into $log(y) = -\frac{1}{2}log(x)$.

From here, we can use the relationship we found earlier to relate the binary representations of x and y.

$$
\begin{aligned}
&y = 1/x^{1/2}\\
\implies &log(y) = -\frac{1}{2}log(x)\\
\implies &y_{bits}/2^{23} - 127 + \varepsilon = -\frac{1}{2}(x_{bits}/2^{23} - 127 + \varepsilon)\\
\implies &y_{bits} = \frac{3}{2}2^{23}(127 - 
ε) - x_{bits}/2
\end{aligned}
$$

Or in other words

```c
y_bits  = 0x5f3759df - ( x_bits >> 1 );
```

$\frac{3}{2}2^{23}(127 - 
ε)$ gets us the weird number and $-x_{bits}/2$ gets us `-(i >> 1)`

If we ignore the error term ε and plug the weird number equation into [WolframAlpha](https://www.wolframalpha.com/input?i=%5Cfrac%7B3%7D%7B2%7D2%5E%7B23%7D%28127%29) we get 1598029824. And that’s equal to … 0x5f400000? So where did they get 0x5f3759df from?…

Most likely from the ε… I guess we’re going on another tangent

## Optimizing ε with Minmaxing

[Minmaxing](https://replit.com/@PreethamNaraya1/Minmaxing#main.c)

And now we get… 0x5f375a86. This is still quite different from the constant found in the original code. At this point I was stumped. According to the math and tests, this approximation is better than 0x5f3759df.

<note: show graphs that prove that our constant is better>

<note: figure out for what values we get the closest approximations when doing zero iterations. maybe add another graph.
Also try a graph where we use a bunch of different values for magic numbers and see how each magic number performs on different values of x>

So if 0x5f375a86 works better then why does Quake use 0x5f3759df? Perhaps, 0x5f3759df works better with the numbers that Quake deals with. Perhaps the developer used a different method to generate this number. Perhaps it was simply pulled out of someone’s rear. Only the person who wrote this code knows why 0x5f3759df was chosen instead.

Now brute forcing it might be a bit unsatisfying for you. Maybe you wanted a mathematically rigorous way to narrow it down to the precise bit. Unfortunately, the math is somewhat out of scope for this article. However, there are some great papers by Chris Lomont and others that prove this (and find even better constants) using a lot of algebra and piecewise equation optimizations if you’re into that stuff.

[](http://www.lomont.org/papers/2003/InvSqrt.pdf)

[A Modification of the Fast Inverse Square Root Algorithm](https://www.preprints.org/manuscript/201908.0045/v1)

# Evil floating point bit level hack

```c
y  = number;
i  = * ( long * ) &y;                       // evil floating point bit level hacking
...
y  = * ( float * ) &i;
```

In order to do the magic from the previous step, we need to work with the binary representation of numbers (x_bits and y_bits) instead of the floating point numbers (x and y) themselves.

C allows you to convert between floats and longs using type casting. However, if you type cast a float to a long normally, then you would do the sensible thing and, for example, convert a float storing 3.33 into a long storing 3.

Float 3.33 stored in Binary is 01000000010101010001111010111001

Long 3 stored in Binary is 00000000000000000000000000000011

Clearly these are very different and wouldn’t help us when our equation from the previous step depends on x_bits. What we instead want is a long that’s storing 01000000010101010001111010111001 (1079320249 in decimal).

[IEEE-754 Floating Point Converter](https://www.h-schmidt.net/FloatConverter/IEEE754.html)

<NOTE: see if you can actually build this in javascript and embed it into the page>

In order to do that, we need to trick the computer into interpreting the floating point bits as long bits. We can do this by telling the computer that this float pointer (`&y`) is actually a long pointer (type casting using `(long *)`) and then dereferencing that value into a long variable (`*`). That’s what this line is doing (reading right to left): `i = * (long *) &y;`

Going back from i to y is just a reverse of the previous steps: convert the long pointer (`&i`) into a float pointer (`(float *)`) and dereferencing that value into a float variable (`*`). So we get `y = * ( float * ) &i;`

<note: potentially add some images showing the C memory representation>

# Putting it all together

My favorite way to learn is by taking something that works and tweaking it slightly to see how that changes things. So let’s implement a version that works on 64 bit floating point numbers!

<note: TODO. also the Chris Lomont paper already does this so we’re not doing anything new. Think of another idea>

To recap, the big leaps of logic for me were:

- Using Newton’s method to do divisions using multiplication operations.
- Realizing the relationship between x (floating point bit representation) and log(x).
- Using log(x) and some basic algebra to get a close approximation for y.
- Using minmaxing to choose a better error term.
- Pointer magic to convert from float to long without changing any bits.

<note: TODO: add footnotes and extra reading / references section>