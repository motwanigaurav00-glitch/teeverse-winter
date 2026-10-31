"use client";

import { useState } from "react";
import { ProductDialog } from "./storefront";
import type { Product } from "../data/products";

function Arrow() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

export default function CatalogPage({ title, description, products, emptyMessage }: { title: string; description: string; products: Product[]; emptyMessage: string }) {
  const [selected, setSelected] = useState<Product | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="catalog-page">
    <header className="site-header catalog-header">
      <a className="brand-mark" href="/" aria-label="TeeVerse home">TeeVerse</a>
      <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Catalog navigation">
        <a href="/collection">Collection</a><a href="/kids">Kids’ Collection</a><a href="/#color-studio">Color Studio</a><a href="/">Home</a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}><span/><span/></button>
    </header>
    <section className="catalog-section" aria-labelledby="catalog-title">
      <div className="catalog-heading"><p className="eyebrow">TEEVERSE / THE FULL EDIT</p><h1 id="catalog-title">{title}</h1><p>{description}</p></div>
      {products.length ? <div className="catalog-grid">{products.map((product, index) => <button className="product-card catalog-card" key={product.slug} onClick={() => setSelected(product)} aria-label={`Explore ${product.name}`}>
        <span className="product-image"><img src={product.images[0].src} alt={product.images[0].alt} loading="lazy"/><span className="card-index">{String(index + 1).padStart(2, "0")}</span><span className="card-arrow"><Arrow/></span></span>
        <span className="product-meta"><span><small>{product.collection}</small><strong>{product.name}</strong></span><Arrow/></span>
      </button>)}</div> : <div className="catalog-empty"><p className="eyebrow">THE LITTLE VERSE IS IN THE MAKING</p><h2>New designs<br/><em>coming soon.</em></h2><p>{emptyMessage}</p><a className="text-link" href="/collection">Explore the full collection <Arrow/></a></div>}
    </section>
    <footer className="catalog-footer"><a className="brand-mark" href="/">TeeVerse</a><span>MADE FOR YOUR POINT OF VIEW</span><a href="https://www.instagram.com/teeverse.wear?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram <Arrow/></a></footer>
    {selected && <ProductDialog product={selected} onClose={() => setSelected(null)}/>}
  </main>;
}
