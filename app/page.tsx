"use client";

import { useEffect, useState } from "react";

const mensGallery = [
  { name: "Black", src: "/mens-black.png", alt: "Model wearing the black TeeVerse hoodie" },
  { name: "Navy Blue", src: "/mens-navy.png", alt: "Model wearing the navy blue TeeVerse hoodie" },
  { name: "Muted Gray", src: "/mens-muted-gray.png", alt: "Model wearing the muted gray TeeVerse hoodie" },
  { name: "Charcoal Gray", src: "/mens-charcoal.png", alt: "Model wearing the charcoal gray TeeVerse hoodie" },
];
const womensGallery = [
  { name: "Black", src: "/womens-black.png", alt: "Woman wearing the black TeeVerse hoodie" },
  { name: "Navy Blue", src: "/womens-navy.png", alt: "Woman wearing the navy blue TeeVerse hoodie" },
  { name: "Muted Gray", src: "/womens-muted-gray.png", alt: "Woman wearing the muted gray TeeVerse hoodie" },
  { name: "Charcoal Gray", src: "/womens-charcoal.png", alt: "Woman wearing the charcoal gray TeeVerse hoodie" },
];
const kidsGallery = [
  { name: "Black", src: "/kids-black.png", alt: "Siblings wearing matching black oversized hoodies" },
  { name: "Navy Blue", src: "/kids-navy.png", alt: "Siblings wearing matching navy blue oversized hoodies" },
  { name: "Muted Gray", src: "/kids-muted-gray.png", alt: "Siblings wearing matching muted gray oversized hoodies" },
  { name: "Charcoal Gray", src: "/kids-charcoal.png", alt: "Siblings wearing matching charcoal gray oversized hoodies" },
];
const galleries = { men: mensGallery, women: womensGallery, kids: kidsGallery };
type CollectionKey = keyof typeof galleries;
const collectionTitles: Record<CollectionKey, string> = { men: "Men’s Collection", women: "Women’s Collection", kids: "Kids Collection" };
const hoodieNames: Record<CollectionKey, string> = {
  men: "Men’s Oversized Winter Hoodie",
  women: "Women’s Oversized Winter Hoodie",
  kids: "Kids’ Oversized Winter Hoodie",
};
const collectionSizes: Record<CollectionKey, string[]> = {
  men: ["S", "M", "L", "XL", "XXL"],
  women: ["S", "M", "L", "XL", "XXL"],
  kids: ["26", "28", "30", "32"],
};
const hoodieSwatchColors: Record<string, string> = {
  Black: "#171717",
  "Navy Blue": "#1c2b45",
  "Muted Gray": "#c7c4bd",
  "Charcoal Gray": "#54514e",
};

function Arrow() {
  return <span aria-hidden="true" className="winter-arrow">↗</span>;
}

export default function Home() {
  const [activeCollection, setActiveCollection] = useState<CollectionKey | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [enquiryCopied, setEnquiryCopied] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S");
  const activeGallery = activeCollection ? galleries[activeCollection] : null;
  const activeColor = activeGallery?.[activeImage];

  useEffect(() => {
    if (!activeCollection) return;
    const imageCount = galleries[activeCollection].length;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCollection(null);
      if (event.key === "ArrowRight") setActiveImage((image) => (image + 1) % imageCount);
      if (event.key === "ArrowLeft") setActiveImage((image) => (image - 1 + imageCount) % imageCount);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCollection]);

  function openCollection(collection: CollectionKey) {
    setActiveImage(0);
    setEnquiryCopied(false);
    setSelectedSize(collectionSizes[collection][0]);
    setActiveCollection(collection);
  }

  async function enquireAboutHoodie() {
    if (!activeCollection || !activeColor) return;
    const price = activeCollection === "kids" ? "—" : "₹600/-";
    const message = [
      "Hi TeeVerse! I’d like to enquire about this hoodie:",
      `Product: ${hoodieNames[activeCollection]}`,
      `Collection: ${collectionTitles[activeCollection]}`,
      `Color: ${activeColor.name}`,
      `Size: ${selectedSize}`,
      "Material: 300 GSM brushed fleece",
      "Fit: Oversized",
      `Price: ${price}`,
    ].join("\n");
    window.open("https://www.instagram.com/teeverse.wear?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==", "_blank", "noopener,noreferrer");
    try {
      await navigator.clipboard.writeText(message);
      setEnquiryCopied(true);
    } catch {
      setEnquiryCopied(false);
    }
  }

  return (
    <main className="winter-store">
      <header className="winter-header">
        <a className="winter-brand" href="#top" aria-label="TeeVerse home">Tee<span>Verse</span></a>
        <a className="winter-bag" href="#winter-categories">EXPLORE <span aria-hidden="true">↓</span></a>
      </header>

      <section className="winter-hero" id="top" aria-labelledby="winter-title">
        <div className="winter-hero-copy">
          <p className="winter-eyebrow"><span className="winter-dot" /> TEEVERSE WINTER COLLECTION 2026</p>
          <h1 id="winter-title">WINTER<br /><em>LOOKS.</em><br />STREET VIBES.</h1>
          <p className="winter-intro">Stay warm. Stay stylish.<br />Own your winter with TeeVerse.</p>
          <a className="winter-primary" href="#winter-categories">EXPLORE THE COLLECTION <Arrow /></a>
          <span className="winter-edition">01 / 03 &nbsp;—&nbsp; MADE FOR THE COLD</span>
        </div>
        <div className="winter-hero-photo">
          <img src="/winter-hero.png" alt="Model in an oversized charcoal hoodie on a winter city street" fetchPriority="high" />
          <span className="winter-photo-label">WINTER, IN YOUR ELEMENT <i>— TV / 26</i></span>
          <span className="winter-photo-index">CAMPAIGN 001 — TEEVERSE STUDIO</span>
        </div>
        <div className="winter-hero-foot"><span>BUILT FOR LAYERING</span><span>01 — 03</span></div>
      </section>

      <section className="winter-products winter-categories" id="winter-categories" aria-labelledby="hoodies-title">
        <div className="winter-section-head">
          <div>
        <p className="winter-eyebrow">THREE DIRECTIONS. ONE WINTER.</p>
            <h2 id="hoodies-title">THE WINTER<br /><em>EDIT</em></h2>
          </div>
          <p className="winter-section-note">A colder season,<br />a clearer point of view.</p>
        </div>

        <div className="winter-category-grid">
          <article className="winter-category-card">
            <button className="winter-category-action" type="button" onClick={() => openCollection("men")} aria-label="Explore Men's Collection colors">
              <img className="winter-category-photo" src={mensGallery[0].src} alt={mensGallery[0].alt} loading="lazy" />
              <span className="winter-category-shade" />
              <span className="winter-category-top"><span>01 / MENSWEAR</span><span>WINTER ’26</span></span>
              <span className="winter-category-copy"><span className="winter-category-kicker">FOUR WINTER TONES</span><strong>MEN’S<br />COLLECTION</strong><span className="winter-category-description">Everyday warmth. Made your own.</span><span className="winter-category-link">EXPLORE COLORS <Arrow /></span></span>
            </button>
          </article>

          <article className="winter-category-card">
            <button className="winter-category-action" type="button" onClick={() => openCollection("women")} aria-label="Explore Women's Collection colors">
              <img className="winter-category-photo" src="/womens-muted-gray.png" alt="Woman wearing the muted gray TeeVerse hoodie" loading="lazy" />
              <span className="winter-category-shade" />
              <span className="winter-category-top"><span>02 / WOMENSWEAR</span><span>WINTER ’26</span></span>
              <span className="winter-category-copy"><span className="winter-category-kicker">SOFTNESS, WITH PRESENCE</span><strong>WOMEN’S<br />COLLECTION</strong><span className="winter-category-description">Everyday Comfort. Effortless Style.</span><span className="winter-category-link">EXPLORE COLORS <Arrow /></span></span>
            </button>
          </article>

          <article className="winter-category-card">
            <button className="winter-category-action" type="button" onClick={() => openCollection("kids")} aria-label="Explore Kids Collection colors">
              <img className="winter-category-photo" src="/kids-navy.png" alt="Siblings wearing matching navy blue oversized hoodies" loading="lazy" />
              <span className="winter-category-shade" />
              <span className="winter-category-top"><span>03 / LITTLE VERSE</span><span>WINTER ’26</span></span>
              <span className="winter-category-copy"><span className="winter-category-kicker">ROOM TO BE THEMSELVES</span><strong>KIDS<br />COLLECTION</strong><span className="winter-category-description">Little Looks. Big Comfort.</span><span className="winter-category-link">EXPLORE COLORS <Arrow /></span></span>
            </button>
          </article>
        </div>
        <p className="winter-collection-note">MEN &nbsp;·&nbsp; WOMEN &nbsp;·&nbsp; KIDS</p>
      </section>

      <footer className="winter-footer">
        <div className="winter-footer-main">
          <div><a className="winter-brand footer-brand" href="#top">Tee<span>Verse</span></a><p>Wear Your Vibe.</p></div>
          <div className="winter-socials"><span>FOLLOW THE VERSE</span><a href="https://www.instagram.com/teeverse.wear?utm_source=ig_web_button_share_sheet&amp;cplk=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">INSTAGRAM <Arrow /></a></div>
        </div>
        <div className="winter-footer-bottom"><span>© 2026 TEEVERSE</span><span>MADE FOR EVERY VERSION OF YOU.</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>

      {activeCollection && activeGallery && activeColor && <div className="winter-modal-backdrop" onClick={() => setActiveCollection(null)}>
        <section className="winter-modal winter-mens-modal" role="dialog" aria-modal="true" aria-labelledby="collection-modal-title" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="winter-modal-close" onClick={() => setActiveCollection(null)} aria-label={`Close ${collectionTitles[activeCollection]} gallery`}>×</button>
          <div className="winter-gallery winter-mens-gallery">
            <div className={`winter-gallery-main winter-mens-gallery-main${activeCollection === "kids" ? " winter-kids-gallery-main" : ""}`}>
              <img src={activeColor.src} alt={activeColor.alt} />
              <button type="button" className="winter-gallery-arrow previous" onClick={() => setActiveImage((image) => (image - 1 + activeGallery.length) % activeGallery.length)} aria-label="Previous color">←</button>
              <button type="button" className="winter-gallery-arrow next" onClick={() => setActiveImage((image) => (image + 1) % activeGallery.length)} aria-label="Next color">→</button>
            </div>
          </div>
          <div className="winter-modal-details winter-mens-details">
            <p className="winter-eyebrow">TEEVERSE / {collectionTitles[activeCollection].toUpperCase()} / WINTER ’26</p>
            <h2 id="collection-modal-title">{collectionTitles[activeCollection].split(" ")[0]}<br /><em>Collection</em></h2>
            <p className="winter-modal-description">{activeGallery.length} winter colors. One considered oversized fit. Choose a tone to see it in the collection.</p>
            <div className="winter-detail-rule" />
            <div className="winter-detail-row winter-color-heading"><span>COLOR</span><strong>{activeColor.name.toUpperCase()}</strong></div>
            <div className="winter-color-palette" role="group" aria-label={`${collectionTitles[activeCollection]} hoodie colors`}>
              {activeGallery.map((image, index) => <button key={image.name} type="button" className={`winter-palette-option${index === activeImage ? " selected" : ""}`} onClick={() => setActiveImage(index)} aria-label={`Choose ${image.name}`} aria-pressed={index === activeImage} title={image.name}>
                <span className="winter-palette-swatch" style={{ backgroundColor: hoodieSwatchColors[image.name] }} />
                <span>{image.name}</span>
              </button>)}
            </div>
            <div className="winter-detail-row winter-size-label"><span>SIZE</span><strong>{selectedSize}</strong></div>
            <div className="winter-size-options" role="group" aria-label={`Choose size for ${collectionTitles[activeCollection]}`}>
              {collectionSizes[activeCollection].map((size) => <button key={size} type="button" className={`winter-size-option${size === selectedSize ? " selected" : ""}`} onClick={() => setSelectedSize(size)} aria-pressed={size === selectedSize}>{size}</button>)}
            </div>
            <div className="winter-detail-row"><span>FABRIC</span><strong>300 GSM · BRUSHED FLEECE</strong></div>
            <div className="winter-detail-row winter-price-row"><span>PRICE</span><strong>{activeCollection === "kids" ? "—" : "₹600/-"}</strong></div>
            <button type="button" className="winter-shop winter-mens-shop" onClick={enquireAboutHoodie}>SHOP NOW <Arrow /></button>
            <p className="winter-ig-note">{enquiryCopied ? "Product enquiry copied. Paste it into your Instagram DM." : "Shop Now copies the selected hoodie, color, size, fabric, fit, and price for your Instagram enquiry."}</p>
            <p className="winter-copy-hint">Instagram opens separately. The message is not sent automatically.</p>
          </div>
        </section>
      </div>}
    </main>
  );
}
