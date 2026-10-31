/**
 * TeeVerse collection catalogue.
 * Replace these demo URLs with optimized, watermarked product media when ready.
 * Keep images in display order and add one or more videos per product as needed.
 */
export type Product = {
  slug: string;
  name: string;
  collection: string;
  images: { src: string; alt: string }[];
  videos: { src: string; label: string; poster?: string }[];
};

const photo = (id: string, alt: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`;

const sampleFilm = {
  // Demo motion clip. Replace this URL with a short film of your actual design.
  src: "https://videos.pexels.com/video-files/7316379/7316379-uhd_2160_3840_25fps.mp4",
  label: "Studio film · sample",
};

export const products: Product[] = [
  {
    slug: "mind-over-mortality",
    name: "Mind Over Mortality",
    collection: "After hours",
    images: [
      { src: photo("photo-1503341504253-dff4815485f1", "Model in a dark streetwear look"), alt: "Model in a dark streetwear look" },
      { src: photo("photo-1529139574466-a303027c1d8b", "Streetwear look from the side"), alt: "Streetwear look from the side" },
      { src: photo("photo-1521572163474-6864f9cf17ab", "Close view of a graphic T-shirt"), alt: "Close view of a graphic T-shirt" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "tokyo-spirit",
    name: "Tokyo Spirit",
    collection: "Neon nostalgia",
    images: [
      { src: photo("photo-1529139574466-a303027c1d8b", "Urban fashion portrait"), alt: "Urban fashion portrait" },
      { src: photo("photo-1611312449408-fcece27cdbb7", "Graphic streetwear detail"), alt: "Graphic streetwear detail" },
      { src: photo("photo-1503341504253-dff4815485f1", "Streetwear outfit in natural light"), alt: "Streetwear outfit in natural light" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "chaos-theory",
    name: "Chaos Theory",
    collection: "New forms",
    images: [
      { src: photo("photo-1521572163474-6864f9cf17ab", "Minimal graphic T-shirt"), alt: "Minimal graphic T-shirt" },
      { src: photo("photo-1566206091558-7f218b696731", "T-shirt styled for everyday wear"), alt: "T-shirt styled for everyday wear" },
      { src: photo("photo-1485230895905-ec40ba36b9bc", "Oversized streetwear silhouette"), alt: "Oversized streetwear silhouette" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "midnight-skull",
    name: "Midnight Skull",
    collection: "Dark icons",
    images: [
      { src: photo("photo-1576566588028-4147f3842f27", "Dark graphic T-shirt"), alt: "Dark graphic T-shirt" },
      { src: photo("photo-1583743814966-8936f37f4678", "Black T-shirt in a studio setting"), alt: "Black T-shirt in a studio setting" },
      { src: photo("photo-1503341504253-dff4815485f1", "Dark streetwear styling"), alt: "Dark streetwear styling" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "no-rules",
    name: "No Rules",
    collection: "Say something",
    images: [
      { src: photo("photo-1506794778202-cad84cf45f1d", "Graphic tee styled in the city"), alt: "Graphic tee styled in the city" },
      { src: photo("photo-1515886657613-9f3515b0c78f", "Expressive streetwear portrait"), alt: "Expressive streetwear portrait" },
      { src: photo("photo-1566206091558-7f218b696731", "Graphic tee detail"), alt: "Graphic tee detail" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "urban-ghost",
    name: "Urban Ghost",
    collection: "After hours",
    images: [
      { src: photo("photo-1485230895905-ec40ba36b9bc", "Oversized streetwear look"), alt: "Oversized streetwear look" },
      { src: photo("photo-1539109136881-3be0616acf4b", "Fashion editorial portrait"), alt: "Fashion editorial portrait" },
      { src: photo("photo-1529139574466-a303027c1d8b", "Streetwear from another angle"), alt: "Streetwear from another angle" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "neon-ronin",
    name: "Neon Ronin",
    collection: "Neon nostalgia",
    images: [
      { src: photo("photo-1611312449408-fcece27cdbb7", "Graphic streetwear look"), alt: "Graphic streetwear look" },
      { src: photo("photo-1548883354-7622d03aca27", "Colorful graphic tee styling"), alt: "Colorful graphic tee styling" },
      { src: photo("photo-1529139574466-a303027c1d8b", "Streetwear portrait"), alt: "Streetwear portrait" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "static-noise",
    name: "Static Noise",
    collection: "New forms",
    images: [
      { src: photo("photo-1566206091558-7f218b696731", "Graphic tee in a clean studio"), alt: "Graphic tee in a clean studio" },
      { src: photo("photo-1503341504253-dff4815485f1", "T-shirt look in natural light"), alt: "T-shirt look in natural light" },
      { src: photo("photo-1576566588028-4147f3842f27", "T-shirt fabric and print detail"), alt: "T-shirt fabric and print detail" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "blooming-chaos",
    name: "Blooming Chaos",
    collection: "Play it loud",
    images: [
      { src: photo("photo-1521572163474-6864f9cf17ab", "Expressive graphic T-shirt"), alt: "Expressive graphic T-shirt" },
      { src: photo("photo-1548883354-7622d03aca27", "Playful streetwear portrait"), alt: "Playful streetwear portrait" },
      { src: photo("photo-1521572163474-6864f9cf17ab", "Graphic T-shirt detail"), alt: "Graphic T-shirt detail" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "after-dark",
    name: "After Dark",
    collection: "Dark icons",
    images: [
      { src: photo("photo-1503341504253-dff4815485f1", "Black oversized T-shirt"), alt: "Black oversized T-shirt" },
      { src: photo("photo-1539109136881-3be0616acf4b", "Night-time fashion editorial"), alt: "Night-time fashion editorial" },
      { src: photo("photo-1485230895905-ec40ba36b9bc", "Relaxed oversized tee"), alt: "Relaxed oversized tee" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "cosmic-playground",
    name: "Cosmic Playground",
    collection: "Play it loud",
    images: [
      { src: photo("photo-1548883354-7622d03aca27", "Colorful graphic T-shirt"), alt: "Colorful graphic T-shirt" },
      { src: photo("photo-1506629905607-d405b7a30db9", "Art-led streetwear look"), alt: "Art-led streetwear look" },
      { src: photo("photo-1566206091558-7f218b696731", "T-shirt design detail"), alt: "T-shirt design detail" },
    ],
    videos: [sampleFilm],
  },
  {
    slug: "unplugged",
    name: "Unplugged",
    collection: "Say something",
    images: [
      { src: photo("photo-1515886657613-9f3515b0c78f", "Modern typography tee look"), alt: "Modern typography tee look" },
      { src: photo("photo-1506794778202-cad84cf45f1d", "Portrait wearing a casual tee"), alt: "Portrait wearing a casual tee" },
      { src: photo("photo-1521572163474-6864f9cf17ab", "T-shirt print detail"), alt: "T-shirt print detail" },
    ],
    videos: [sampleFilm],
  },
];

// Populate with verified kids' designs and their own image/video assets when available.
export const kidsProducts: Product[] = [];
