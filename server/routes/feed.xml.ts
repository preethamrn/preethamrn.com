import RSS from "rss";
import { defineEventHandler } from "h3";
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { serverQueryContent } from "#content/server";

// Source: https://github.com/rafaelmagalhaes/nuxt3-rss
export default defineEventHandler(async (event) => {
  // wrap everything in a try catch block
  try {
    // fetch contents
    const contentList = (await serverQueryContent(event).find()) as ParsedContent[];

    // create new rss feed this will be our channel tag with website title and url
    const feed = new RSS({
      title: "Preetham's Posts",
      description:
        "I write about productivity, software development, cubing, and various projects that I'm working on.",
      site_url: "https://www.preethamrn.com", // link to your website/blog
      feed_url: `https://www.preethamrn.com/rss`, // path to your rss feed
    });
    contentList.sort((a, b) => (b.date > a.date ? 1 : -1));
    // loop over each posts
    for (const post of contentList) {
      if (post._dir !== "posts") continue;
      if (post.unlisted || post._draft) continue;
      // add item tag to our rss feed with correct data
      feed.item({
        title: post.title, // title from post to item title
        url: `https://www.preethamrn.com/posts/${post.link}`, // full path to where our article is hosted
        description: post.description, // post description
        date: new Date(post.date), // date post was created
        categories: post.tags, // list of tags
      });
    }
    const feedString = feed.xml({ indent: true });

    event.node.res.setHeader("content-type", "text/xml");
    event.node.res.end(feedString);
  } catch (e) {
    // return an error
    return e;
  }
});
