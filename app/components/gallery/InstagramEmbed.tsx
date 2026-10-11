"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Renders curated Instagram posts using Instagram's official embed. No API
 * token needed; the post image, caption and like/comment counts come from
 * Instagram at view time, so the tiles stay current if a post is edited.
 * Each tile is a link to the post until the embed script replaces it.
 */
export function InstagramEmbed({ posts }: { posts: readonly { href: string }[] }) {
  useEffect(() => {
    const id = "instagram-embed-js";
    const run = () => window.instgrm?.Embeds.process();
    if (document.getElementById(id)) {
      run();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = run;
    document.body.appendChild(s);
  }, [posts]);

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <li key={p.href} className="min-w-0">
          <blockquote
            className="instagram-media !m-0 !min-w-0 !w-full"
            data-instgrm-permalink={p.href}
            data-instgrm-version="14"
            data-instgrm-captioned
            style={{ background: "#fff", border: 0, borderRadius: 16, margin: 0, maxWidth: "100%", width: "100%" }}
          >
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="block p-6 text-sm underline">
              {p.href}
            </a>
          </blockquote>
        </li>
      ))}
    </ul>
  );
}
