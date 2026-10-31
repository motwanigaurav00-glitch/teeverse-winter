"use client";

import { useEffect, useId, useRef, useState } from "react";
import { kidsProducts, products, type Product } from "../data/products";

type Fit = "oversized" | "regular";
type Shade = { id: string; color: string };

// Replace these numbered swatches with TeeVerse's verified shade names and garment photography.
const shades: Record<Fit, Shade[]> = {
  oversized: ["#eee9df", "#1d1d1b", "#8b3f37", "#66766a", "#c5a878", "#c4b9a5", "#53616e", "#b67d65", "#d2cec4", "#586148", "#aeb8b2", "#675c67"].map((color, i) => ({ id: `O-${String(i + 1).padStart(2, "0")}`, color })),
  regular: ["#eee9df", "#1d1d1b", "#8b3f37", "#66766a", "#c5a878", "#c4b9a5", "#53616e", "#b67d65", "#d2cec4", "#586148", "#aeb8b2", "#675c67", "#d4a4a2", "#8d9cba", "#c8b16c", "#789184", "#bc6a50", "#544d49", "#ded8c8", "#817c70", "#9c655f", "#484f48", "#d8c0a5", "#717c83"].map((color, i) => ({ id: `R-${String(i + 1).padStart(2, "0")}`, color })),
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-icon">{diagonal ? "↗" : "→"}</span>;
}

function BrandMark() {
  return <a className="brand-mark" href="/" aria-label="TeeVerse home">TeeVerse<i>®</i></a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["Home", "top"], ["Collection", "collection"], ["Top Three", "best-sellers"], ["Kids", "kids"], ["Color Studio", "color-studio"], ["Lookbook", "lookbook"], ["About", "about"]];
  return <header className="site-header" id="top">
    <BrandMark />
    <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
    </nav>
    <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}><span /><span /></button>
  </header>;
}

function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">TEEVERSE <span>/</span> CONTEMPORARY T-SHIRT CULTURE</p>
      <h1 id="hero-title">Wear your<br /><em>world.</em></h1>
      <p className="hero-description">Everyday silhouettes. Unmistakable expression. Discover a new perspective on everyday essentials.</p>
      <div className="hero-actions"><a className="button-link" href="#collection">Explore the collection <Arrow /></a><a className="text-link" href="#color-studio">Discover the Color Studio <Arrow diagonal /></a></div>
      <span className="hero-index">01 — TEEVERSE / STUDIO</span>
    </div>
    <div className="hero-image">
      <img src={products[0].images[0].src} alt="Editorial fashion portrait from the TeeVerse preview collection" fetchPriority="high" />
      <span className="image-caption">A NEW PERSPECTIVE ON THE EVERYDAY <i>— 01</i></span>
      <span className="hero-side-note">T-SHIRT CULTURE / EST. IN EXPRESSION</span>
    </div>
  </section>;
}

function Collection({ onOpen }: { onOpen: (product: Product) => void }) {
  return <section className="collection-section section-pad" id="collection" aria-labelledby="collection-title">
    <div className="section-heading"><div><p className="eyebrow">A STUDY IN SELF-EXPRESSION</p><h2 id="collection-title">The <em>collection</em></h2><p className="section-intro">Designed for everyday expression. Defined by your own style.</p></div><a className="text-link view-all-link" href="/collection">View All <Arrow diagonal /></a></div>
    <div className="product-rail">{products.map((product, index) => <button className="product-card" key={product.slug} onClick={() => onOpen(product)} aria-label={`Explore ${product.name}`}>
      <span className="product-image"><img src={product.images[0].src} alt={product.images[0].alt} loading="lazy" /><span className="card-index">0{index + 1}</span><span className="card-arrow"><Arrow diagonal /></span></span>
      <span className="product-meta"><span><small>{product.collection} <i>· PREVIEW</i></small><strong>{product.name}</strong></span><Arrow diagonal /></span>
    </button>)}</div>
    <p className="asset-note">COLLECTION IMAGERY SHOWN AS REPLACEABLE PREVIEW ASSETS</p>
  </section>;
}

const featuredProducts = [products[0], products[2], products[3]];

function BestSellers({ onOpen }: { onOpen: (product: Product) => void }) {
  return <section className="best-section" id="best-sellers" aria-labelledby="best-title">
    <div className="best-heading"><p className="eyebrow">TEEVERSE / THE MOST WORN</p><h2 id="best-title">Top three.<br /><em>Own the moment.</em></h2><span>FEATURED DESIGNS / 01—03</span></div>
    <div className="best-stage">{featuredProducts.map((product, index) => <button key={product.slug} className={`best-card best-card-${index + 1}`} onClick={() => onOpen(product)} aria-label={`View featured design ${product.name}`}>
      <img src={product.images[0].src} alt={product.images[0].alt} loading="lazy" /><span className="best-shade"/><span className="best-copy"><small>0{index + 1} / {product.collection}</small><strong>{product.name}</strong><i>VIEW DESIGN <Arrow diagonal /></i></span>
    </button>)}</div>
    <p className="best-note">TEMPORARY CATALOG PREVIEWS — CONFIRMED BEST-SELLER REFERENCES PENDING</p>
  </section>;
}

function SmallTeesBanner() {
  return <section className="kids-banner" id="kids-banner" aria-labelledby="kids-banner-title">
    <img className="kids-banner-photo" src="/kids-campaign.png" alt="Three children in simple T-shirts in a warm, sunlit studio" />
    <div className="kids-banner-copy"><p className="eyebrow">TEEVERSE / LITTLE VERSE</p><h2 id="kids-banner-title">Small tees.<br /><em>Big energy.</em></h2><a className="light-link" href="#kids">Explore the Kids’ Collection <Arrow /></a></div>
    <span className="kids-banner-index">A LITTLE MORE ROOM TO BE YOU / TV—KIDS</span>
  </section>;
}

function KidsCollection({ onOpen }: { onOpen: (product: Product) => void }) {
  return <section className="kids-section" id="kids" aria-labelledby="kids-title">
    <div className="kids-heading"><div><p className="eyebrow">TEEVERSE / LITTLE VERSE</p><h2 id="kids-title">Kids’ Collection</h2></div><a className="text-link view-all-link" href="/kids">View All <Arrow diagonal /></a></div>
    {kidsProducts.length ? <div className="product-rail kids-product-rail" aria-label="Kids’ Collection products">{kidsProducts.map((product, index) => <button className="product-card" key={product.slug} onClick={() => onOpen(product)} aria-label={`Explore ${product.name}`}><span className="product-image"><img src={product.images[0].src} alt={product.images[0].alt} loading="lazy"/><span className="card-index">0{index + 1}</span></span><span className="product-meta"><span><small>KIDS / {product.collection}</small><strong>{product.name}</strong></span><Arrow diagonal /></span></button>)}</div> : <div className="kids-empty"><p>Kids’ designs and product photography will appear here once the collection assets are added.</p></div>}
  </section>;
}

function Shirt({ color, fit }: { color: string; fit: Fit }) {
  const uid = useId().replaceAll(":", "");
  return <svg className={`shirt-illustration shirt-${fit}`} viewBox="0 0 360 390" role="img" aria-label={`${fit === "oversized" ? "Oversized" : "Regular fit"} T-shirt color preview`}>
    <defs><linearGradient id={`fabric-${uid}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".22"/><stop offset=".55" stopColor="#fff" stopOpacity="0"/><stop offset="1" stopColor="#000" stopOpacity=".17"/></linearGradient><filter id={`shadow-${uid}`} x="-30%" y="-20%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter></defs>
    <ellipse cx="183" cy="355" rx="114" ry="14" fill="#29241e" opacity=".14" filter={`url(#shadow-${uid})`} />
    <path d="M125 53 153 37q27 25 54 0l28 16 79 29-31 66-42-19 10 185q-68 17-138 0l10-185-42 19-31-66z" fill={color} />
    <path d="M125 53 153 37q27 25 54 0l28 16 79 29-31 66-42-19 10 185q-68 17-138 0l10-185-42 19-31-66z" fill={`url(#fabric-${uid})`} />
    <path d="M153 39q27 35 54 0" fill="none" stroke="#28231e" strokeOpacity=".34" strokeWidth="5"/><path d="M182 92v215m-69-2q69 15 138 0M88 88l27 30m161-30-27 30" fill="none" stroke="#fff" strokeOpacity=".27" strokeWidth="2"/>
    <text x="181" y="203" textAnchor="middle" fill={color === "#1d1d1b" ? "#f3eee6" : "#242320"} opacity=".62" fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="3">TEEVERSE</text>
  </svg>;
}

function ColorStudio() {
  const [fit, setFit] = useState<Fit>("oversized");
  const [selected, setSelected] = useState(0);
  const current = shades[fit][selected];
  const setActiveFit = (next: Fit) => { setFit(next); setSelected(0); };
  return <section className="color-section" id="color-studio" aria-labelledby="color-title">
    <div className="color-heading"><p className="eyebrow">A PALETTE TO MAKE YOUR OWN</p><h2 id="color-title">36 shades.<br /><em>Your style.</em></h2><p>One collection. Two fits. A world of color.</p></div>
    <div className="color-explorer">
      <div className="featured-tee" style={{ "--tee-color": current.color } as React.CSSProperties}>
        <span className="preview-label">COLOR STUDY / PLACEHOLDER</span><Shirt color={current.color} fit={fit} />
        <div className="featured-caption"><span>{fit === "oversized" ? "OVERSIZED" : "REGULAR FIT"}</span><strong>{current.id} <i>— shade name to be confirmed</i></strong></div>
      </div>
      <div className="shade-panel">
        <div className="fit-tabs" role="tablist" aria-label="Choose T-shirt fit">
          {(["oversized", "regular"] as Fit[]).map((item) => <button key={item} role="tab" aria-selected={fit === item} className={fit === item ? "fit-tab active" : "fit-tab"} onClick={() => setActiveFit(item)}><span>{item === "oversized" ? "Oversized" : "Regular fit"}</span><small>{shades[item].length} COLORS</small></button>)}
        </div>
        <p className="shade-instruction">SELECT A SHADE <span>{String(selected + 1).padStart(2, "0")} / {String(shades[fit].length).padStart(2, "0")}</span></p>
        <div className="shade-grid" role="group" aria-label={`${fit} color placeholders`}>
          {shades[fit].map((shade, index) => <button key={shade.id} className={selected === index ? "shade-option selected" : "shade-option"} onClick={() => setSelected(index)} aria-label={`${shade.id}, placeholder shade`} aria-pressed={selected === index}>
            <span className="shade-swatch"><span style={{ backgroundColor: shade.color }} /></span><small>{shade.id}</small>
          </button>)}
        </div>
        <p className="placeholder-note">SHADE NAMES AND COLORS ARE TEMPORARY VISUAL PLACEHOLDERS. FINAL COLOR ASSETS TO BE PROVIDED.</p>
      </div>
    </div>
  </section>;
}

function Lookbook() {
  const frames = [products[1], products[5], products[3], products[7]];
  return <section className="lookbook-section section-pad" id="lookbook" aria-labelledby="lookbook-title">
    <div className="lookbook-heading"><div><p className="eyebrow">TEEVERSE / VISUAL JOURNAL</p><h2 id="lookbook-title">Style in every <em>frame.</em></h2></div><div className="lookbook-actions"><p>A closer look at silhouettes, details, and the personalities that define TeeVerse.</p><a className="text-link view-all-link" href="/collection">View All <Arrow diagonal /></a></div></div>
    <div className="lookbook-grid">{frames.map((product, i) => <figure className={`lookbook-frame frame-${i + 1}`} key={product.slug}><img src={product.images[1]?.src ?? product.images[0].src} alt={`Preview fashion photograph for ${product.name}`} loading="lazy" /><figcaption><span>TEEVERSE / 0{i + 1}</span><strong>{product.name}</strong></figcaption></figure>)}</div>
    <p className="asset-note">EDITORIAL PHOTOGRAPHY SHOWN AS REPLACEABLE PREVIEW ASSETS</p>
  </section>;
}

function Details() {
  return <section className="details-section section-pad" aria-labelledby="details-title">
    <div className="details-title"><p className="eyebrow">FORM, FEEL, POINT OF VIEW</p><h2 id="details-title">The details<br /><em>matter.</em></h2></div>
    <div className="detail-list">
      <article><span>01</span><div><h3>The fit</h3><p>Two silhouettes to explore: oversized and regular fit. Choose the shape that feels like you.</p></div><span className="detail-mark">↗</span></article>
      <article><span>02</span><div><h3>The color</h3><p>A considered palette across both fits. The Color Studio is a preview until verified shade details are added.</p></div><span className="detail-mark">↗</span></article>
      <article><span>03</span><div><h3>The design</h3><p>Graphic expression and everyday essentials, brought together in a collection with room for your own perspective.</p></div><span className="detail-mark">↗</span></article>
    </div>
  </section>;
}

function Philosophy() {
  return <section className="philosophy-section" id="about" aria-labelledby="about-title"><div className="philosophy-image"><img src={products[4].images[1].src} alt="TeeVerse fashion preview, composed as a campaign image" loading="lazy" /></div><div className="philosophy-copy"><p className="eyebrow">THE TEEVERSE PHILOSOPHY</p><h2 id="about-title">Your style.<br /><em>Your statement.</em></h2><p>TeeVerse is about making everyday style your own. Explore different silhouettes, discover your colors, and express your personality through what you wear.</p><a href="#collection" className="light-link">Explore TeeVerse <Arrow /></a><span className="philosophy-index">TV / 001</span></div></section>;
}

function StayConnected() {
  return <section className="stay-section" id="contact"><p className="eyebrow">A NOTE FROM TEEVERSE</p><h2>Stay in the <em>verse.</em></h2><p>Get a closer look at new collections, color stories, and the latest TeeVerse campaigns.</p><div className="stay-links"><a className="text-link" href="#lookbook">Explore the visual journal <Arrow diagonal /></a><a className="text-link" href="https://www.instagram.com/teeverse.wear?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Follow TeeVerse on Instagram <Arrow diagonal /></a></div><span className="stay-star">✳</span></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div><BrandMark /><p>Everyday expression, in your own colors.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="#top">Home</a><a href="#collection">Collection</a><a href="#best-sellers">Top Three</a><a href="#color-studio">Color Studio</a><a href="#lookbook">Lookbook</a></div><div><span>TEEVERSE</span><a href="#about">About TeeVerse</a><a href="#contact">Contact</a><a className="instagram-link" href="https://www.instagram.com/teeverse.wear?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a></div></div></div><div className="footer-bottom"><small>© 2026 TEEVERSE</small><small>COLORS & CAMPAIGN ASSETS SHOWN AS PREVIEW PLACEHOLDERS WHERE NOT PROVIDED</small><a href="#top">BACK TO TOP ↑</a></div></footer>;
}

export function ProductDialog({ product, onClose }: { product: Product; onClose: () => void }) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const closeButton = useRef<HTMLButtonElement>(null);
  const media = [...product.images.map((image) => ({ type: "image" as const, src: image.src, alt: image.alt, label: image.alt })), ...product.videos.map((video) => ({ type: "video" as const, src: video.src, alt: `${product.name} product video`, label: video.label, poster: video.poster ?? product.images[0].src }))];
  const active = media[mediaIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setMediaIndex((current) => (current + 1) % media.length);
      if (event.key === "ArrowLeft") setMediaIndex((current) => (current - 1 + media.length) % media.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", handleKey); };
  }, [media.length, onClose]);

  const changeMedia = (step: number) => setMediaIndex((current) => (current + step + media.length) % media.length);
  return <div className="dialog-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="product-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onKeyDown={(e) => { if (e.key === "Tab") { const focusable = e.currentTarget.querySelectorAll<HTMLElement>("button, a, video[controls]"); const first = focusable[0]; const last = focusable[focusable.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); } } }}>
      <div className="dialog-gallery">
        <button ref={closeButton} className="dialog-close" onClick={onClose} aria-label="Close details">×</button>
        <div className="dialog-main-media">{active.type === "video" ? <video key={active.src} src={active.src} poster={active.poster} controls playsInline preload="metadata" aria-label={active.alt} /> : <img key={active.src} src={active.src} alt={active.alt} />}
          <button className="media-arrow media-prev" onClick={() => changeMedia(-1)} aria-label="Previous product image">←</button><button className="media-arrow media-next" onClick={() => changeMedia(1)} aria-label="Next product image">→</button><span className="media-counter">{active.type === "video" ? "VIDEO" : `${String(mediaIndex + 1).padStart(2, "0")} / ${String(product.images.length).padStart(2, "0")}`}</span>
        </div>
        <div className="dialog-thumbnails" aria-label="Product images and videos">{media.map((item, index) => <button key={`${item.type}-${item.src}`} className={index === mediaIndex ? "dialog-thumb active" : "dialog-thumb"} onClick={() => setMediaIndex(index)} aria-label={item.type === "video" ? `Play ${item.label}` : `View image ${index + 1}`} aria-pressed={index === mediaIndex}>{item.type === "image" ? <img src={item.src} alt="" /> : <><img src={item.poster} alt="" /><span>▶</span></>}</button>)}</div>
      </div>
      <div className="dialog-copy"><p className="eyebrow">{product.collection} / PREVIEW</p><div><h2 id="dialog-title">{product.name}</h2><p>View this design from every angle, or play its product film.</p></div><p className="dialog-hint">USE ARROWS OR SELECT A THUMBNAIL TO EXPLORE</p><div className="dialog-footer"><span>TEEVERSE / DESIGN PREVIEW</span><span>{String(mediaIndex + 1).padStart(2, "0")} <i>/</i> {String(media.length).padStart(2, "0")}</span></div></div>
    </section>
  </div>;
}

export default function Storefront({ initialProductSlug }: { initialProductSlug?: string } = {}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(() => initialProductSlug ? products.find((product) => product.slug === initialProductSlug) ?? null : null);
  return <main className="storefront"><Header /><Hero /><Collection onOpen={setSelectedProduct} /><BestSellers onOpen={setSelectedProduct} /><SmallTeesBanner /><KidsCollection onOpen={setSelectedProduct} /><ColorStudio /><Lookbook /><Details /><Philosophy /><StayConnected /><Footer />{selectedProduct && <ProductDialog product={selectedProduct} onClose={() => setSelectedProduct(null)} />}</main>;
}
