export type Photo = {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
  width: number;
  height: number;
};

export const photos = {
  hero: {
    src: "/images/hero-arch.jpg",
    alt: "Low afternoon sun rakes across a limewash wall and casts a soft arch of shadow over a pale stone floor.",
    credit: "nugroho indro",
    creditUrl: "https://www.pexels.com/photo/gray-plain-wall-surface-17885652/",
    width: 2600,
    height: 3467,
  },
  quiet: {
    src: "/images/study-quiet.jpg",
    alt: "A tall Parisian salon in soft daylight, with white sofas, ornate plaster cornicing and a single dark pendant.",
    credit: "Sami Abdullah",
    creditUrl: "https://www.pexels.com/photo/decorative-ceiling-in-apartment-10779189/",
    width: 2200,
    height: 3728,
  },
  table: {
    src: "/images/study-table.jpg",
    alt: "A dining table set with pale plates and glassware in a shaft of morning sun, under a dusty rose pendant lamp.",
    credit: "Ron Lach",
    creditUrl:
      "https://www.pexels.com/photo/dining-room-with-lamp-and-table-with-plates-and-cutlery-10240141/",
    width: 2200,
    height: 3300,
  },
  leather: {
    src: "/images/detail-leather.jpg",
    alt: "Sunlight falls in striped shadows across a saddle-leather sofa and a fluted timber wall.",
    credit: "Çisel Bozar",
    creditUrl: "https://www.pexels.com/photo/shadows-on-wall-over-couch-20297143/",
    width: 1800,
    height: 3200,
  },
  stone: {
    src: "/images/detail-stone.jpg",
    alt: "A pale limestone basin and chrome tap set against a raw plaster wall.",
    credit: "Mathias Reding",
    creditUrl: "https://www.pexels.com/photo/photo-of-a-bathroom-sink-11299685/",
    width: 1600,
    height: 2400,
  },
  linen: {
    src: "/images/detail-linen.jpg",
    alt: "A close detail of crumpled washed linen in soft raking light.",
    credit: "Steve A Johnson",
    creditUrl: "https://www.pexels.com/photo/white-soft-fabric-17950958/",
    width: 1600,
    height: 1067,
  },
  bedroom: {
    src: "/images/study-evening.jpg",
    alt: "A quiet bedroom in washed white linen, with layered pillows and pale plaster walls.",
    credit: "Diana",
    creditUrl: "https://www.pexels.com/photo/28513848/",
    width: 2200,
    height: 3307,
  },
} satisfies Record<string, Photo>;

export const photoCredits = [
  { name: photos.hero.credit, url: photos.hero.creditUrl },
  { name: photos.quiet.credit, url: photos.quiet.creditUrl },
  { name: photos.table.credit, url: photos.table.creditUrl },
  { name: photos.leather.credit, url: photos.leather.creditUrl },
  { name: photos.stone.credit, url: photos.stone.creditUrl },
  { name: photos.linen.credit, url: photos.linen.creditUrl },
  { name: photos.bedroom.credit, url: photos.bedroom.creditUrl },
];

export type Study = {
  id: string;
  title: string;
  hour: string;
  light: string;
  materials: string;
  description: string;
  photo: Photo;
};

export const studies: Study[] = [
  {
    id: "quieter-plan",
    title: "A quieter plan",
    hour: "08:10",
    light: "East light, held low",
    materials: "Lime plaster · Pale oak · Linen · Wool",
    description:
      "A living room arranged around one long view. Pale plaster, a low sofa and a wool rug keep the morning soft; the furniture sits low enough to let the light cross the room.",
    photo: photos.quiet,
  },
  {
    id: "longer-table",
    title: "A longer table",
    hour: "13:40",
    light: "South light, at full strength",
    materials: "Pale oak · Washed linen · Dusty rose · Glass",
    description:
      "A dining room built around the middle of the day. A long oak table, linen and glass; the pendant is hung low enough to keep the room intimate when the sun is high.",
    photo: photos.table,
  },
  {
    id: "last-light",
    title: "A room for the last light",
    hour: "16:40",
    light: "West light, through slatted shade",
    materials: "Saddle leather · Fluted oak · Plaster · Shadow",
    description:
      "A corner that gives the end of the afternoon to one long sofa. Saddle leather, fluted oak and a wall of plaster; the light does the decorating, and the room is left quiet.",
    photo: photos.leather,
  },
];

export type Material = {
  name: string;
  use: string;
  photo: Photo;
  position: string;
};

export const materials: Material[] = [
  {
    name: "Lime plaster",
    use: "Walls & ceilings",
    photo: photos.hero,
    position: "50% 32%",
  },
  {
    name: "Pale oak",
    use: "Floors & joinery",
    photo: photos.table,
    position: "50% 78%",
  },
  {
    name: "Limestone",
    use: "Kitchens & baths",
    photo: photos.stone,
    position: "50% 48%",
  },
  {
    name: "Saddle leather",
    use: "Seating & handles",
    photo: photos.leather,
    position: "50% 58%",
  },
  {
    name: "Washed linen",
    use: "Upholstery & drapes",
    photo: photos.linen,
    position: "50% 50%",
  },
  {
    name: "Alabaster",
    use: "Light & surfaces",
    photo: photos.bedroom,
    position: "50% 58%",
  },
];
