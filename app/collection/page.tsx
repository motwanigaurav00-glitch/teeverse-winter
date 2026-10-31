import type { Metadata } from "next";
import CatalogPage from "../../components/catalog-page";
import { products } from "../../data/products";

export const metadata: Metadata = {
  title: "The Collection — TeeVerse",
  description: "Explore every design in the TeeVerse collection.",
};

export default function CollectionPage() {
  return <CatalogPage title="The Collection" description="Every TeeVerse design, gathered in one place." products={products} emptyMessage="The full collection is being prepared."/>;
}
