---
title: "First Post"
link: "first-post"
description: "The first post written in Markdown"
timeToRead: 1
date: 2019-04-21
draft: true
tags: ["test"]
---

This is the first post, it is written in Markdown. **THIS SHOULD NOT BE PUBLISHED**

# Here's some big text

- and some lists
- with multiple items
  - just to show off all of the different elements

1. numbered lists
1. work too

https://www.youtube.com/watch?v=XSLaiaAGlXs

### How about some code?

```
Yeah we've got that too!
```

Inline? `i think so`

Also some LaTeX inline $\pi$ and outline

$$
\frac{1}{\sqrt{x}}
$$

## Images

![Motorcycle](https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)
![Campfire](https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)

## Tables

| Option | Description   |
| ------ | ------------- |
| one    | first option  |
| two    | second option |
| three  | third option  |

# Blockquotes

> "You miss 100% of the shots you don't take -Wayne Gretzky" -Michael Scott

# Syntax highlighted codeblock with Shikiji

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```go
switch user.kind {
    case "recruiter": return "Software Engineer"
    case "viewer": return "Video Maker"
    case "chatter": return "Live Streamer"
}
```

<p> Adding some HTML <span style='font-weight: 800'>(with CSS)</span> directly in here </p>

Here is a footnote reference[^1]
another [^longnote],
and optionally there are inline
notes.^[inline footnotes DO NOT work][^2]

[^1]: Here is the footnote.
[^longnote]: Here’s one with multiple blocks.

    Subsequent paragraphs are indented to show that they
    belong to the previous footnote.

        { some.code }

    The whole paragraph can be indented, or just the first
    line. In this way, multi-paragraph footnotes work like
    multi-paragraph list items.

This paragraph won’t be part of the note, because it
isn’t indented.

[^2]: see above.
