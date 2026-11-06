const widePhotos = new Set([
  "03.jpg",
  "07.jpg",
  "10.jpg",
  "11.jpg",
  "15.jpg",
  "19.jpg",
  "22.jpg",
  "25.jpg",
  "36.jpg",
  "38.jpg",
  "39.jpg",
  "40.jpg",
  "42.jpg",
  "44.jpg",
]);

type PhotoKind = "tall" | "wide" | "pano";

type PhotoTile = {
  src: string;
  kind: PhotoKind;
};

function fileName(src: string) {
  return src.split("/").pop() ?? src;
}

function thumbSrc(src: string) {
  return `/work/photography/thumbs/${fileName(src)}`;
}

function kindFor(src: string): PhotoKind {
  const name = fileName(src);
  if (name === "06.jpg") return "pano";
  if (widePhotos.has(name)) return "wide";
  return "tall";
}

function packRows(assets: string[]) {
  const items: PhotoTile[] = assets.map((src) => ({ src, kind: kindFor(src) }));
  const rows: PhotoTile[][] = [];
  let index = 0;

  while (index < items.length) {
    if (items[index].kind === "pano") {
      rows.push([items[index]]);
      index += 1;
      continue;
    }

    const row: PhotoTile[] = [];
    let units = 0;

    while (index < items.length && units < 4 && items[index].kind !== "pano") {
      const need = items[index].kind === "wide" ? 2 : 1;
      if (units + need > 4) {
        const remain = 4 - units;
        let fitAt = -1;
        for (let cursor = index; cursor < items.length; cursor += 1) {
          if (items[cursor].kind === "pano") break;
          const size = items[cursor].kind === "wide" ? 2 : 1;
          if (size <= remain) {
            fitAt = cursor;
            break;
          }
        }
        if (fitAt === -1) break;
        const [fit] = items.splice(fitAt, 1);
        row.push(fit);
        units += fit.kind === "wide" ? 2 : 1;
        continue;
      }

      row.push(items[index]);
      units += need;
      index += 1;
    }

    if (row.length) rows.push(row);
  }

  return rows;
}

export default function PhotoGrid({
  assets,
  title,
}: {
  assets: string[];
  title: string;
}) {
  const rows = packRows(assets);
  let photoIndex = 0;

  return (
    <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-3">
      {rows.map((row) => {
        const onlyWide = row.every((tile) => tile.kind === "wide");
        const enlargeTalls = row.every((tile) => tile.kind === "tall") && row.length === 2;
        return (
          <div key={row[0].src} className="contents md:grid md:grid-cols-4 md:items-stretch md:gap-3">
            {row.map((tile) => {
              const eager = photoIndex < 4;
              photoIndex += 1;
              const desktop =
                tile.kind === "pano"
                  ? "md:col-span-4 md:aspect-auto"
                  : tile.kind === "wide"
                    ? onlyWide
                      ? "md:col-span-2 md:aspect-[3/2]"
                      : "md:col-span-2 md:aspect-auto md:h-full"
                    : enlargeTalls
                      ? "md:col-span-2 md:aspect-[2/3]"
                      : "md:col-span-1 md:aspect-[2/3]";

              return (
                <a
                  key={tile.src}
                  href={tile.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative col-span-1 block aspect-[3/4] overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] ${desktop}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbSrc(tile.src)}
                    alt={`${title} photograph ${fileName(tile.src).replace(".jpg", "")}`}
                    loading={eager ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={eager ? "high" : "low"}
                    className={
                      tile.kind === "pano"
                        ? "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] md:static md:h-auto"
                        : "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    }
                  />
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
