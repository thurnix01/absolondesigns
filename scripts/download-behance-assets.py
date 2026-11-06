#!/usr/bin/env python3
"""Download Behance project modules into public/work/<slug>/."""

import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "work"
META = ROOT / "src" / "data" / "behance-extras.json"

MODULES = {
    "performance-bicycle-tshirt": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b407a2242065881.69659be3f043d.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a95189242065881.69659be3f0a05.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/514b10242065881.69659be3efea1.jpg",
    ],
    "big-apple-movies": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/886d9e80657275.5ce8361ca3ca9.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1968e080657275.5ce8361ca8923.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/72e13380657275.5ce8361ca2924.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0e1a4280657275.5ce8361ca6361.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9a49d080657275.5ce8361ca022b.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0b96180657275.5ce8361befd99.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9f72cb80657275.5ce8361bedda2.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3c3ffb80657275.5ce8361bf224e.jpg",
    ],
    "international-student-guide": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b645cc79753417.5cccb2ed06685.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d3c4c79753417.5cccb2ed0cbcf.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/30d48f79753417.5cccb2ed044c7.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e0cc8f79753417.5cccb2ed0898f.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/13011179753417.5cccb2ed02155.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/52af5a79753417.5cccb2ed0ab3e.jpg",
    ],
    "arrive-alive": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a333bf79298883.5cccb316caf13.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d351f579298883.5cccb316ccd09.jpg",
    ],
    "washburn-instagram-ad": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8779bd79189727.5cccb31f2ff84.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a26f7679189727.5cccb31f3041a.gif",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9a497679189727.5cccb31e8c8f7.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4eb4c579189727.5cccb31e9964e.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5f1a0279189727.5cccb31e93033.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8c198e79189727.5cccb31e90f70.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/25396f79189727.5cccb31e8ea07.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5e85ab79189727.5cccb31e95049.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a1dbe379189727.5cccb31e97540.jpg",
    ],
    "mixed-media-illustration": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fef9278895869.5cccb2f4ec419.jpg",
    ],
    "bob-marley-typography": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/09774378809711.5cccb2dae592a.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c9b93378809711.5cccb2da9365f.jpg",
    ],
    "photography": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fbe71078679315.5cccb2c437cfe.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/56eb4c78679315.5cccb2c43e0a4.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bb021f78679315.5cccb2c44d6a4.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3969d778679315.5cccb2c4577a9.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e8a56978679315.5cccb2c4374ff.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/95e2f178679315.5cccb2c435cf2.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c4f7178679315.5cccb2c43543a.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b2df978679315.5cccb2c446a3e.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/68e4a078679315.5cccb2c46522e.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b45d378679315.5cccb2c442513.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1a3e6278679315.5cccb2c4518f9.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3850e78679315.5cccb2c45c4bb.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ccf3bb78679315.5cccb2c4490c7.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f6d53d78679315.5cccb2c43fff7.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/251a2778679315.5cccb2c45e66d.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/132c4078679315.5cccb2c459ee8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/72d92978679315.5cccb2c462c69.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/daa36378679315.5cccb2c439d53.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5f52ab78679315.5cccb2c4551b6.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/994f0578679315.5cccb2c44b659.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ee355c78679315.5cccb2c4445e5.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/74594a78679315.5cccb2c460b5d.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/566d7978679315.5cccb2c43bbc3.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fed6678679315.5cccb2c4534e8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/946cf678679315.5cccb2c44f453.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d0785178679315.5cccb2c479a9c.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/06f24878679315.5cccb2c4779d0.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/702ea778679315.5cccb2c489687.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6ee4e878679315.5cccb2c4754ed.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/dd85fb78679315.5cccb2c473535.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/49f2b378679315.5cccb2c48b366.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/24feee78679315.5cccb2c46b873.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a3a4b678679315.5cccb2c4859dc.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f1139678679315.5cccb2c470f54.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c01a4378679315.5cccb2c4839c3.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/59408d78679315.5cccb2c48d8ef.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b15b7b78679315.5cccb2c47efff.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0e412278679315.5cccb2c491dc1.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/18a0c178679315.5cccb2c468eda.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/01b8b878679315.5cccb2c48157f.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7ef18d78679315.5cccb2c4959b6.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5f16e378679315.5cccb2c46711d.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5d78a178679315.5cccb2c46e8c0.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/24940c78679315.5cccb2c47d3fb.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a58ed678679315.5cccb2c48f770.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8fb4d778679315.5cccb2c47b6da.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/58497f78679315.5cccb2c493b4c.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/33bc6a78679315.5cccb2c487801.jpg",
    ],
    "in-my-ktchn": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/37f3ae78627231.5cccb327c8f61.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/20fe6678627231.5cccb327c6560.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a737b378627231.5cccb327c93bb.gif",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/599d8778627231.5cccb327cbf40.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/170e3c78627231.5cccb327477a6.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ec484b78627231.5cccb327497c9.jpg",
    ],
    "us-constitution": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/21961078627225.5cccb2e4a17e5.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/35f27678627225.5cccb2e4521dd.jpg",
    ],
    "cetl-logo": [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a7bbe378627219.5cccb3094ec53.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b670278627219.5cccb3094ad32.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/45302a78627219.5cccb308b310e.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5cd24678627219.5cccb308b4ffa.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2282178627219.5cccb308b56cf.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a9a83e78627219.5cccb3094d740.jpg",
    ],
}

EXTRAS = {
    "performance-bicycle-tshirt": {
        "tags": ["Cyclocross", "Brand identity", "Abstract art"],
        "links": [],
    },
    "big-apple-movies": {
        "tags": ["Magazines", "Design layout"],
        "links": [
            {
                "label": "MATC portfolio page",
                "href": "http://matcportfolio.com/spring2019/students/HTML/absolon_terrance.html",
            }
        ],
    },
    "international-student-guide": {
        "tags": ["Student guide", "Typography"],
        "links": [],
    },
    "arrive-alive": {
        "tags": ["Arrive Alive", "Road safety", "PSA"],
        "links": [],
    },
    "washburn-instagram-ad": {
        "tags": ["Washburn", "Guitar stories", "Guitar photos"],
        "links": [],
    },
    "mixed-media-illustration": {
        "tags": ["Illustration", "Drawing", "Concepting"],
        "links": [],
    },
    "bob-marley-typography": {
        "tags": ["Typography", "Book layout"],
        "links": [],
    },
    "photography": {
        "tags": ["Photography"],
        "links": [],
    },
    "in-my-ktchn": {
        "tags": ["UI design", "App design", "Logo design"],
        "links": [],
    },
    "us-constitution": {
        "tags": ["U.S. Constitution", "Book layout", "Typography"],
        "links": [],
    },
    "cetl-logo": {
        "tags": ["Logo design", "Corporate", "Professional development"],
        "links": [],
    },
    "american-family-insurance": {
        "tags": ["AMFAM", "Dream fearlessly", "Animation"],
        "links": [],
        "videoUrl": "https://www.youtube.com/embed/gx_smmirEow",
        "assets": ["/work/american-family.jpg"],
    },
}


def download(url: str, dest: Path) -> bool:
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(request, timeout=40) as response:
            data = response.read()
        if len(data) < 1000:
            return False
        dest.write_bytes(data)
        return True
    except Exception as error:
        print("FAIL", url, error)
        return False


def main() -> None:
    result = {}
    for slug, urls in MODULES.items():
        folder = OUT / slug
        folder.mkdir(parents=True, exist_ok=True)
        assets = []
        for index, url in enumerate(urls, start=1):
            ext = url.rsplit(".", 1)[-1].split("?")[0]
            dest = folder / f"{index:02d}.{ext}"
            if dest.exists() and dest.stat().st_size > 1000:
                ok = True
            else:
                ok = download(url, dest)
                if not ok and "/1400/" in url:
                    fallback = url.replace("/1400/", "/max_1200/")
                    ok = download(fallback, dest)
            if ok:
                assets.append(f"/work/{slug}/{dest.name}")
            print(slug, index, "ok" if ok else "skip")
        extra = EXTRAS[slug]
        result[slug] = {
            "tags": extra["tags"],
            "links": extra["links"],
            "assets": assets,
        }
        if extra.get("videoUrl"):
            result[slug]["videoUrl"] = extra["videoUrl"]
    american = EXTRAS["american-family-insurance"]
    result["american-family-insurance"] = {
        "tags": american["tags"],
        "links": american["links"],
        "assets": american["assets"],
        "videoUrl": american["videoUrl"],
    }
    META.parent.mkdir(parents=True, exist_ok=True)
    META.write_text(json.dumps(result, indent=2) + "\n")
    print("wrote", META)


if __name__ == "__main__":
    main()
