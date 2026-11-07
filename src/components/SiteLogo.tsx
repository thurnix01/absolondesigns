type SiteLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

/** Animated GIF on desktop; static WebP on mobile to cut decode/CPU cost. */
export default function SiteLogo({
  width = 70,
  height = 70,
  priority = false,
  className = "rounded-full invert dark:invert-0 transition-[filter] duration-300 ease-in-out",
}: SiteLogoProps) {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet="/absolon_designs_logo_blk_edit.gif"
        type="image/gif"
      />
      <source
        srcSet="/absolon_designs_logo_static.webp"
        type="image/webp"
      />
      <img
        src="/absolon_designs_logo_static.png"
        alt="Absolon Designs Logo"
        width={width}
        height={height}
        className={className}
        decoding="async"
        {...(priority
          ? { fetchPriority: "high" as const }
          : { loading: "lazy" as const })}
      />
    </picture>
  );
}
