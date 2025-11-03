import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export default function Testimonials() {
  // Post URLs (not plugin URLs). SDK will render auto-height embeds.
  const postUrls = [
    "https://www.facebook.com/daria.stefania3347/posts/pfbid0AXiXSizWRFZ9ZwwucDbdu8tGJu63FEMtt62GS57i42YvpZiX9v6DyFdt6MtGs4Mml",
    "https://www.facebook.com/alinnicolae.socol/posts/pfbid0ses9tzQN1SzcjphhPYf29ifn8fsBX4JCGAZoyn4oVDZ9ZAPBpS7HTD2ScsCgm9rol",
    "https://www.facebook.com/robert.halfon.98/posts/pfbid023mS6Nkiz83DzGJRoTCc4vXVufo6ZGyi1RrEvNht5oL58XGDvHhLZivPPEzE67bHvl",
  ];

  useEffect(() => {
    const w = window as any;
    function parse() {
      try { w.FB && w.FB.XFBML && w.FB.XFBML.parse(); } catch {}
    }
    // Load SDK once
    if (!w.FB) {
      if (!document.getElementById("facebook-jssdk")) {
        const s = document.createElement("script");
        s.id = "facebook-jssdk";
        s.async = true;
        s.defer = true;
        s.crossOrigin = "anonymous";
        s.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
        s.onload = parse;
        document.body.appendChild(s);
      }
    } else {
      parse();
    }
    // Re-parse when component mounts/updates
    setTimeout(parse, 50);
  }, []);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce Spun Absolvenții Noștri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mii de șoferi mulțumiți care au obținut permisul alături de noi
          </p>
        </div>

        <div id="fb-root" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postUrls.map((href, index) => (
            <Card key={index} className="p-0 overflow-hidden hover-elevate transition-all">
              <PostEmbed href={href} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PostEmbed({ href }: { href: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(500);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const w = new (window as any).ResizeObserver((entries: any[]) => {
      for (const entry of entries) {
        const cw = Math.floor(entry.contentRect.width);
        // FB requires between 320 and 750px typically; clamp to safe range
        const clamped = Math.max(320, Math.min(700, cw));
        if (clamped !== width) setWidth(clamped);
      }
    });
    w.observe(el);
    return () => w.disconnect();
  }, [width]);

  useEffect(() => {
    // Re-parse only this container when width changes
    const w = window as any;
    try {
      if (w.FB && w.FB.XFBML && containerRef.current) {
        w.FB.XFBML.parse(containerRef.current);
      }
    } catch {}
  }, [width]);

  return (
    <div ref={containerRef} className="w-full" style={{ lineHeight: 0 }}>
      <div
        className="fb-post"
        data-href={href}
        data-show-text="true"
        data-width={String(width)}
      />
    </div>
  );
}
