import type { Metadata } from "next";
import CatalogPage from "../../components/catalog-page";
import { kidsProducts } from "../../data/products";

export const metadata: Metadata = {
  title: "Kids’ Collection — TeeVerse",
  description: "Discover the TeeVerse Kids’ Collection.",
};

export default function KidsPage() {
  return <CatalogPage title="Kids’ Collection" description="Small tees. Big expression." products={kidsProducts} emptyMessage="Kids’ product designs and photography will be added here once the collection assets are available."/>;
}
