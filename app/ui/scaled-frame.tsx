"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shows a web page inside an iframe at a fixed "desktop" size, then shrinks
 * it to fit the width of its box, so the whole layout is visible at once
 * (like a screenshot you can still interact with).
 */
export default function ScaledFrame({
  src,
  title,
  baseWidth = 1440,
  baseHeight = 1260,
  interactive = true,
  lazy = false,
}: {
  src: string;
  title: string;
  baseWidth?: number;
  baseHeight?: number;
  interactive?: boolean;
  lazy?: boolean;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const update = () => setScale(box.clientWidth / baseWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(box);
    return () => observer.disconnect();
  }, [baseWidth]);

  return (
    <div
      ref={boxRef}
      className="relative w-full overflow-hidden bg-white"
      style={{ aspectRatio: `${baseWidth} / ${baseHeight}` }}
    >
      <iframe
        src={src}
        title={title}
        loading={lazy ? "lazy" : undefined}
        tabIndex={interactive ? undefined : -1}
        allowFullScreen
        className={`absolute left-0 top-0 origin-top-left border-0 bg-white ${
          interactive ? "" : "pointer-events-none"
        }`}
        style={{
          width: baseWidth,
          height: baseHeight,
          transform: `scale(${scale})`,
          visibility: scale ? "visible" : "hidden",
        }}
      />
    </div>
  );
}
