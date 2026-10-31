import { notFound } from "next/navigation";
import Storefront from "../../../components/storefront";
import { products } from "../../../data/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!products.some((product) => product.slug === slug)) notFound();
  return <Storefront initialProductSlug={slug} />;
}
