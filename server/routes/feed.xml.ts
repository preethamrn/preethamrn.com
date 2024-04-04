import { Feed } from "feed";
import { defineEventHandler } from "h3";
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { serverQueryContent } from "#content/server";

// Source: https://mokkapps.de/blog/create-an-rss-feed-with-nuxt-3-and-nuxt-content-v2
export default defineEventHandler(async (event) => {
  // wrap everything in a try catch block
  try {
    // fetch contents
    const contentList = (await serverQueryContent(event).find()) as ParsedContent[];
    const baseURL = "https://www.preethamrn.com";

    const feed = new Feed({
      title: "Preetham's Posts",
      description:
        "I write about productivity, software development, cubing, and various projects that I'm working on.",
      id: baseURL,
      link: baseURL,
      favicon: "http://www.preethamrn.com/favicon.png",
      copyright: "All rights reserved 2024, Preetham Narayanareddy",
      feedLinks: {
        atom: baseURL + "/feed.xml",
      },
      author: {
        name: "Preetham Narayanareddy",
      },
    });

    contentList.sort((a, b) => (b.date > a.date ? 1 : -1));
    // loop over each posts
    for (const post of contentList) {
      if (post._dir !== "posts") continue;
      if (post.unlisted || post._draft) continue;
      // add item tag to our rss feed with correct data
      feed.addItem({
        title: post.title,
        id: `${baseURL}/posts/${post.link}`,
        link: `${baseURL}/posts/${post.link}`,
        description: post.description,
        // TODO: consider adding post content here.
        // NOTE: most feed readers get the image from the first large image in the content so it's a good idea to add here:
        // see https://github.com/dword-design/nuxt-content-body-html
        date: new Date(post.date),
        categories: post.tags,
        image: post.thumbnail ? `${baseURL}/posts/${post.thumbnail}` : `${baseURL}${post._path}/thumbnail.png`,
      });
    }
    const feedString = feed.atom1();

    event.node.res.setHeader("content-type", "text/xml");
    event.node.res.end(feedString);
  } catch (e) {
    // return an error
    return e;
  }
});
