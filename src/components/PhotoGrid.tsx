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

  return (
    <div className="flex flex-col gap-2 md:gap-3">
      {rows.map((row) => {
        const onlyWide = row.every((tile) => tile.kind === "wide");
        const enlargeTalls = row.every((tile) => tile.kind === "tall") && row.length === 2;
        return (
          <div key={row[0].src} className="grid grid-cols-2 items-stretch gap-2 md:grid-cols-4 md:gap-3">
            {row.map((tile) => {
              const span =
                tile.kind === "pano"
                  ? "col-span-2 md:col-span-4"
                  : tile.kind === "wide"
                    ? "col-span-2"
                    : enlargeTalls
                      ? "col-span-1 aspect-[2/3] md:col-span-2"
                      : "col-span-1 aspect-[2/3]";
              const wideFrame = onlyWide
                ? "aspect-[3/2]"
                : "aspect-[3/2] md:aspect-auto md:h-full";

              return (
                <a
                  key={tile.src}
                  href={tile.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] ${span} ${
                    tile.kind === "wide" ? wideFrame : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tile.src}
                    alt={`${title} photograph ${fileName(tile.src).replace(".jpg", "")}`}
                    className={
                      tile.kind === "pano"
                        ? "h-auto w-full"
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
