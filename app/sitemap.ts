import type { MetadataRoute } from "next";
import { blogs } from "@/src/data/blogs";
import { resorts } from "@/src/data/resorts";
import { touristPlaces } from "@/src/data/touristPlaces";
import { siteConfig } from "@/src/lib/constants";

const staticRoutes = [
  "",
  "/resorts",
  "/tourist-places",
  "/blogs",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...resorts.map((resort) => `/resorts/${resort.slug}`),
    ...touristPlaces.map((place) => `/tourist-places/${place.slug}`),
    ...blogs.map((blog) => `/blogs/${blog.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/blogs/") ? 0.7 : 0.85,
  }));
}
