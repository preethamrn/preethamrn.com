---
title: "How Fast Inverse Square Root actually works"
link: "fast-inverse-sqrt"
description: ""
date: 2022-08-14
timeToRead: 20
thumbnail: "./thumbnail.png"
tags: ["Learn", "Programming", "SOME2"]
usesLatex: true
---

> This article contains some profanity which is found in the original code. If you'd prefer to read a version without profanity or one to show kids check out [the SFW version here](fast-inverse-sqrt-sfw).

$$
\frac{1}{\sqrt{x}}
$$

```c
float Q_rsqrt( float number )
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;
  i  = * ( long * ) &y;         // evil floating point bit level hacking
  i  = 0x5f3759df - ( i >> 1 ); // what the fuck?
  y  = * ( float * ) &i;
  y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//  y  = y * ( threehalfs - ( x2 * y * y ) );   // optional 2nd iteration

  return y;
}
```

Fast Inverse Square Root is one of the most famous algorithms in game development. But what makes it so iconic? How does the algorithm work? And where does `0x5f3759df` come from? All will be answered in this "simple" blog post.

## Why is this algorithm so iconic?
It's not often that you see swear words in official, [public source code](https://github.com/id-Software/Quake-III-Arena/blob/dbe4ddb10315479fc00086f08e25d968b4b43c49/code/game/q_math.c#L552).[^1] And doing division without a single division operator! How's that even possible?! And more importantly, why?

Finding the inverse square root of a number is important for normalizing vectors in computer graphics programs which is often required in lighting and shaders calculations. These computations are made thousands of times per frame so it was imperative to find a fast algorithm for them.

To naively find the inverse square root we must first find the square root of a number and then find its reciprocal. Both of those are complex operations that take a long time on old CPUs. On the other hand, the fast algorithm only requires multiplications, bit shifts, and subtraction, all of which can run much faster so it became the defacto method for computing inverse square roots.

Is it used today? Not really. Hardware advancements have made this pretty obsolete since many CPUs come with rsqrt instructions which can compute the inverse square root in a single instruction[^2].

# "Slow inverse square root"

```c
float S_rsqrt( float number, int iterations ) {
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = 0.01; // initial value of y - the result that we're approximating
  for (int i = 0; i < iterations; i++) {
    y  = y * ( threehalfs - ( x2 * y * y ) );
  }

  return y;
}
```

Here's my "slow" inverse square root algorithm.

Try [running](https://replit.com/@PreethamNaraya1/Slow-Inverse-Square-Root#main.c) it. It's slower but surprisingly it still works. Unlike the fast method, this doesn't use `0x5f3759df` or the "evil floating point hack". But it also doesn't use any square root or division operations. That's because those steps aren't required. The core of this algorithm is using something called Newton's method.

## Newton's Method

There are plenty of great resources on what this method is and why it works.

[Newton's method produces this fractal, why don't we teach it in calculus classes?](https://youtu.be/-RdOwhmqP5s?t=336)

TL;DW: It works by taking an approximation and iterating closer and closer to the actual value by riding the slope of the curve.

<Highlight>
  <NewtonMethodDemo id='1'/>
</Highlight>

* The <span style='color: blue'>blue line</span> is the equation for which we're trying to find the solution (the point where it intersects with the x-axis).

* The <span style='color: red'>red line</span> is the tangent to the blue line at the point where x is our initial guess ($y_n$). This is the slope that we're riding.

* The <span style='color: green'>green line</span> is the x intercept of the red line. We can either use this as our solution approximation or use it to repeat the Newton method with another guess ($y_{n+1}$) until we get close to the actual solution.

Here's a bunch of fancy math for completion's sake however you can skip to the [next section](#what-the-fuck-ie-choosing-a-better-initial-guess) if you're more interested in where `0x5f3759df` comes from and how the evil floating point bit level hack works.

<Highlight>

### Fancy math

Let's say that x is our input number and y is the inverse square root. We want to solve for the equation

$$
\begin{aligned}
y &= 1/sqrt(x)\\
\text{or } 0 &= 1/y^2 - x
\end{aligned}
$$

Newton's method can help us solve the roots of this equation for y. Remember that we're solving for y here. x is a constant input.

$$
\begin{aligned}
f(y) &= 1/y^2 - x \\
f'(y) &= -2y^{-3}
\end{aligned}
$$

To get the next iteration of y, we "ride the slope" of f(y) one step closer to its root.

$$
\begin{aligned}
y_{next} &= y - f(y)/f'(y)\\
y_{next} &= y - \frac{1/y^2 - x}{-2/y^3}\\
y_{next} &= y + y/2 -xy^3/2\\
y_{next} &= y(3/2 -xy^2/2)
\end{aligned}
$$

Which is how we get the code

```c
const float threehalfs = 1.5F;
x2 = number * 0.5F;

y = y * (threehalfs - x2 * y * y) // first iteration
```

And now we're doing an inverse square root without a single division operator! Isn't that exciting!

The important thing to note here is that Newton's method is just an approximation. The closer your initial guess, the fewer iterations you'll need.[^3] With "slow inverse square root" we often need more than 10 iterations to converge on the actual value. In the fast inverse square root algorithm, we get away with just a single iteration. So that's our next goal - choosing a better initial guess.

</Highlight>

# "What the fuck?" ie, choosing a better initial guess

```cpp
i = 0x5f3759df - ( i >> 1 )
```

The `i` on the left hand side is our initial guess `y` and the `i` on the right hand side is our original number `x`. So let's rewrite the code so we don't get confused between the two different values of `i`.

```cpp
y_bits = 0x5f3759df - ( x_bits >> 1 )
```

Note that we're using $x_{bits}$ instead of $x$ here. "What's the difference between $x_{bits}$ and $x$?" you might ask. While $x$ is the actual number that we're computing the inverse square root for, $x_{bits}$ is the number that a computer stores internally to represent that number, that is, the **binary representation** of that number. For example, instead of $3.33$ we're using $01000000010101010001111010111001_{\text{base } 2}$

Using the binary representation allows us to do operations like subtraction (`-`) and bit shifting (`>>`). How we do this conversion will be explained in the [next section](#evil-floating-point-bit-level-hack) on "evil floating point bit level hacking" but first we need to understand how computers store numbers...

## How computers store numbers

Decimal integers use digits from 0 to 9 to represent numbers in base 10. Computers run off of 1s and 0s and so are restricted to only using base 2.

The 1s and 0s in a computer are known as bits. Grouping together bits allows us to represent larger numbers and the numbers that we'll be dealing with today have 32 bits.

Just like decimal integers use powers of 10 for each place (unit, tens, hundreds, thousands, etc.), binary integers use powers of 2. So:

* Decimal $1234 = 1 * 10^3 + 2 * 10^2 + 3 * 10 + 4$
* Binary $101101 = 1 * 2^5 + 0 * 2^4 + 1 * 2^3 + 1 * 2^2 + 0 * 2 + 1$


You may notice however, that this doesn't allow us to represent numbers with a decimal point in them like $1.5$ or $74.123$. For that, we need to use [The IEEE Floating Point Standard](#the-ieee-floating-point-standard)

### The IEEE Floating Point Standard

Floating point is a fancy way of saying binary scientific notation[^4].

Just like regular scientific notation has numbers like $+1.6*10^{15}, -1.731*10^{-52}, +4.25*10^0$, floating point has numbers like $+1.101011*2^{11010}, -1.001101*2^{-101}, -1.001*2^{0}$

There are a few commonalities in both representations:

1. The numbers are split into a sign (+ or -), a coefficient (also called a mantissa), and an exponent. For example, $-1.731*10^{-52}$ can be split into
    * sign: $-$
    * coefficient: $1.731$
    * exponent: $-52$
2. The leading number is never zero. If it was, we could just shift the point to the first non-zero number and subtract from the exponent. For example, instead of $0.61*10^2$, we can write $6.1*10^1$

Using these two rules, we can write our floating point number as

$$
\begin{aligned}
x &= s*m*2^e
\end{aligned}
$$

To store this on a computer, we need to convert the $s$, $e$, and $m$ values into their binary representations `S`, `E`, and `M`. 1 bit for the sign, 8 bits for the exponent, and 23 bits for the mantissa to make 32 bits in total.

![IEEE 754 Standard](/posts/fast-inverse-sqrt/ieee754-standard.png)

- s is the sign. If the sign bit `S` is 0 then the number is positive (ie, +1). 1 means negative (ie, -1). For the purposes of inverse square root x will always be positive (you can't take square roots of negative numbers in the "real" world), so `S` will always be 0. We can ignore it for the rest of this post.
- m is the mantissa. Since the leading digit of a floating point number is always a 1 in binary, the 1 is implied and `M` is just the fractional part after the point (ie, m = 1 + `M`) [^5]
- e is the exponent. To store positive and negative exponents, we take the unsigned 8 bit exponent value (`E`) and subtract 127 to get a range from -127 to +128. This allows us to store tiny fractions smaller than 1 using negative exponents and large numbers bigger than 1 using positive exponents.

Putting all those constraints together, we get the following equation for our floating point number x in terms of the binary representations of `S`, `M`, and `E`

$$
\begin{aligned}
x_{bits} &= 2^{23}*(E+M)\\
x &= S*(1 + M)*2^{E-127}
\end{aligned}
$$

Try playing around with this floating point number calculator to create floating point numbers of your own!

<Highlight>
  <FloatingPointDemo />
</Highlight>

If you click on the scientific notation you'll notice that the scientific notation matches the input number even though they don't look anything alike.

### Working with logarithms

Working with exponents is tricky and confusing. Instead, by taking the logarithm, we turn confusing division, multiplication, and exponent operations into simple subtraction, addition, and multiplication.

It turns out that working with logarithms also allows us to find a relationship between the binary representation of x ($x_{bits}$) and the number $x$.

If you squint really hard then you can see that taking the log of x will bring the exponent value down and with some scaling and shifting, it's proportional to $x_{bits}$. Fortunately, we don't have to squint.

$$
\begin{aligned}
x_{bits} &= 2^{23}*(E + M) && \text{from earlier}
\end{aligned}
$$

Meanwhile

$$
\begin{aligned}
x &= (1 + M)*2^{E-127} && \text{from earlier}\\
\implies log_2(x) &= E - 127 + log(1+M)
\end{aligned}
$$


<SideBySide>

<template v-slot:left>

Through another fortunate quirk of logarithms, we see that [$x \approxeq log(1+x)$](https://www.desmos.com/calculator/k7eekdct1s) for small values of x between 0 and 1.

Since `M` will always be within 0 and 1, we can say that $M = log(1+M) + \varepsilon$ where $\varepsilon$ is a small error term.

</template>

<template v-slot:right>

![log(1+x) Approximation](/posts/fast-inverse-sqrt/log-approximation.png)

</template>

</SideBySide>

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

## What is `0x5f3759df`

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

$\frac{3}{2}2^{23}(127 - \varepsilon)$ gets us the magic number `0x5f3759df` and $-x_{bits}/2$ gets us `-(x_bits >> 1)`

If we ignore the error term ε and plug the magic number equation into [WolframAlpha](https://www.wolframalpha.com/input?i=%5Cfrac%7B3%7D%7B2%7D2%5E%7B23%7D%28127%29) we get 1598029824. And that's [equal to](https://www.wolframalpha.com/input?i=%5Cfrac%7B3%7D%7B2%7D2%5E%7B23%7D%28127%29+in+hex) … `0x5f400000`? So where did they get `0x5f3759df` from?…

Most likely from the ε… I guess we're going on another tangent.

## Optimizing ε with Minimaxing

Minimaxing is a lot like what it sounds like. In this case, we want to minimize the maximum error - in other words, find the magic number for which `Q_rsqrt` gives the smallest error compared to the actual inverse square root when considering all possible values of x_bits.

Since there are about 2 billion values of x and another 4 billion values for the magic number, we'll need to do some optimization if we want this to finish running before the sun consumes the solar system. Let's try speeding things up by cutting down the number of values that we need to search through.

1. In the previous step, we approximately narrowed down the magic number to `0x5f400000`. So we only need to search between `0x5f300000` and `0x5f500000`.
2. Instead of searching all values of x, we can ignore the exponent and only search for all values of the mantissa because ε only comes up in the equation $\text{M} = log(1 + \text{M}) + \varepsilon$. If we optimize ε for one exponent value, it's optimized for all exponent values.
3. Instead of searching all values of the magic number one by one, we can narrow down the value of the magic number digit by digit, working in increments of 0x10000, then 0x1000 and so on until all digits are found. This way, we only check around 160 values instead of 2 million.

That gives us the following pseudocode:
```c
// let's call the magic number C
// and the range of values we're checking is between cMin and cMax.
cMin, cMax =  0x5f300000, 0x5f500000
delta = 0x10000
while (delta > 0):
  minMaxError, minMaxC = 10000, cMin
  for each C between cMin and cMax in increments of delta:
    for each mantissa value M:
      x = 0x3f000000 + M // x in [0.5,2) with mantissa M
      y = Q_rsqrt(x, C)
      z = sqrt(x)
      error = abs(1 - y * z) // relative error
      if (error > minMaxError):
        minMaxError = error
        minMaxC = C
  // narrow down the range of cMin to cMax
  // and use smaller increments for delta
  cMin = minMaxC - delta
  cMax = minMaxC + delta
  delta = delta >> 4

return minMaxC
```
[Try running the actual code for yourself](https://replit.com/@PreethamNaraya1/Minimaxing#main.c). You can try playing around with different ranges of values, different deltas, or different numbers of iterations to see how that impacts the result.

And now we get... `0x5f375a87`. This is still quite different from the constant found in the original code. At this point I was stumped. I got an answer but it wasn't the answer I was looking for. How did the developers come up with `0x5f3759df`?

<!--note: TODO: show a video or graph of how the optimization process runs-->

I tried comparing the errors to see if our magic number was somehow producing worse results.

```bash
$ ./main --iterations=1 0x5f3759df
Max Error for 0x5f3759df: 0.00175233867209800831
$ ./main --iterations=1 0x5f375a87
Max Error for 0x5f375a87: 0.00175128778162259024
```

The error for our magic number `0x5f375a87` is smaller.

I tried it with 0 iterations of Newton's method

```bash
$ ./main --iterations=0 0x5f3759df
Max Error for 0x5f3759df: 0.03437577281600123769
$ ./main --iterations=0 0x5f375a87
Max Error for 0x5f375a87: 0.03436540281256528218
```

We're still smaller. I had to run it with 4 iterations of Newton's method before I started seeing both constants giving the same error of 0.00000010679068984665. And even then, the two constants were performing equally well.

So if `0x5f375a87` works better then why does Quake use `0x5f3759df`? Perhaps `0x5f3759df` works better with the numbers that Quake deals with. Perhaps the developer used a different method to generate this number. Perhaps the developer figured that their number worked well enough and didn't bother optimizing it further. Perhaps it was simply pulled out of the developer's rear. Only the person who wrote this code knows why `0x5f3759df` was chosen instead. At least now we know how the magic number works.[^6]


# Evil floating point bit level hack

```c
y  = number;
i  = * ( long * ) &y;    // evil floating point bit level hacking
...
y  = * ( float * ) &i;
```

In order to do the magic from the previous step, we need to work with the binary representation of numbers (`x_bits` and `y_bits`) instead of the floating point numbers (`x` and `y`) themselves. This requires us to convert from the floating point number `x` to the 32 bits that a computer uses to store that number internally. Those 32 bits are called a long int or long for short.

C allows you to convert between [floats](#the-ieee-floating-point-standard) and [longs](#how-computers-store-numbers) using [type casting](https://en.wikipedia.org/wiki/Type_conversion#C-like_languages). However, if you type cast a float to a long normally, then you would do the sensible thing and, for example, convert a float storing 3.33 into a integer storing 3.

The binary representation of float(3.33) is `0x40551eb9`

The binary representation of long(3) is `0x00000003`

Clearly these are very different and wouldn't help us when our equation from the previous step depends on `x_bits`. What we instead want is a long that's storing `0x40551eb9` (1079320249 in decimal).

In order to do that, we need to trick the computer into interpreting the floating point bits as long bits. We can do this by

1. telling the computer that this float pointer (`&y`)
2. is actually a long pointer (type casting using `(long *)`)
3. and then dereferencing that value into a long variable (`*`).

![C Memory Management](/posts/fast-inverse-sqrt/c-memory.png)

That's what this line is doing (reading right to left): `i = * (long *) &y;`

Going back from i to y is just a reverse of the previous steps: convert the long pointer (`&i`) into a float pointer (`(float *)`) and dereferencing that value into a float variable (`*`). So we get `y = * ( float * ) &i;`

# Putting it all together

Now that we know how the algorithm works and why it works, hopefully we can turn the code a bit clearer with better comments.

```c
float Q_rsqrt(float number)
{
  // interpreting the float bits of the number as a long
  // by casting the float pointer to a long pointer without
  // modifying the bits
  long x_bits  = * ( long * ) &number;

  // finding a better initial guess for the inverse sqrt
  long y_bits = 0x5f3759df - ( x_bits >> 1 );

  // interpreting the long bits of y_bits as a float
  // by reversing the steps from earlier
  float y  = * ( float * ) &y_bits;

  const float threehalfs = 1.5F;
  float half_x = number * 0.5F;
  y  = y * ( threehalfs - ( half_x * y * y ) ); // 1st iteration
  // optional 2nd iteration to get a better approximation
  // y  = y * ( threehalfs - ( half_x * y * y ) );

  return y;
}
```

To recap, the big leaps of logic for me were:

- Using Newton's method to do divisions using multiplication operations.
- Realizing the relationship between the floating point bit representation of x and log(x).
- Using log(x) and some algebra to get a close approximation for y.
- Using minimaxing to find a better magic number that accounts for the error term.
- Using pointer magic to interpret the bits of a float as a long and vice-versa.

When I started looking into this topic I didn't think it would lead me to calculus, solving optimization problems, the binary representation of floating point numbers, and memory management inside computers. I think that's what I enjoyed most about it. Any one of these ideas is interesting and many students learn about them every year, but to put them all together to solve a completely unrelated problem in vector graphics requires someone with a very specific set of skills.

![Venn Diagram](/posts/fast-inverse-sqrt/venn-diagram.png)

What problems can you solve with your specific set of skills?

[^1]: The [history](https://www.beyond3d.com/content/articles/8/) behind the algorithm is pretty interesting too. The algorithm was originally found in the source code of Quake III Arena, attributed to the iconic John Carmack however it was later discovered to predate the game.

[^2]: [This article](https://www.linkedin.com/pulse/fast-inverse-square-root-still-armin-kassemi-langroodi/) goes into more detail and shows benchmarks.

[^3]: This is technically not always true because there are cases where a good initial guess can send you off on a wild goose chase. The [3Blue1Brown video](https://youtu.be/-RdOwhmqP5s?t=524) explains this better. However, for the purposes of fast inverse square root, this assumption works well.

[^4]: The reason it's called floating point is because the point isn't fixed. It's able to "float" depending on what the exponent value is.

[^5]: Astute readers might notice that if the mantissa is 0 then we can't avoid a leading 0, the floating point standard handles this in an interesting way but since the inverse of 0 is undefined, we'll just ignore it for the rest of this post. Even more astute readers would notice that the IEEE floating point standards includes denormalization where the leading 1 is excluded if all exponent bits at set to 0. Since that only happens for extremely small numbers, it's unlikely to cause issues in real world applications.

[^6]: Brute forcing the magic number by trying out all the different constants might be a bit unsatisfying for you. Maybe you wanted a mathematically rigorous way to narrow it down to the precise bit. The math is a bit out of scope for this article. However, there are some great papers by Chris Lomont and others that prove this (and find even better constants) using a lot of algebra and piecewise equation optimizations if you're into that stuff. See [Fast Inverse Square Root - Chris Lomont](http://www.lomont.org/papers/2003/InvSqrt.pdf) or [A Modification of the Fast Inverse Square Root Algorithm](https://www.preprints.org/manuscript/201908.0045/v1).