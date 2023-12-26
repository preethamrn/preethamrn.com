import { defineEventHandler } from "h3";
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { serverQueryContent } from "#content/server";
import { asSitemapUrl, defineSitemapEventHandler } from "#imports";
import { redirects } from "~/utils/redirects";

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[];
  return contentList
    .filter((c) => c._dir == "posts" && !c._draft)
    .map((c) => {
      return asSitemapUrl({
        loc: `/posts/${c.link}`,
        lastmod: new Date(c.date),
        priority: 1,
        images: [
          {
            loc: c.thumbnail ? `/posts/${c.thumbnail}` : `${c._path}/thumbnail.png`,
            caption: c.description,
            title: c.title,
          },
        ],
      });
    })
    .concat(
      Object.entries(redirects).map(([_, v]) =>
        asSitemapUrl({
          loc: v,
          priority: 0,
        })
      )
    );
});
