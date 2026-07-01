import { createFileRoute, notFound, Link, useRouter } from "@tanstack/react-router";
import { getProduct, products } from "@/data/products";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductStickyNav } from "@/components/product/ProductStickyNav";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductOverview } from "@/components/product/ProductOverview";
import { ProductFeatures } from "@/components/product/ProductFeatures";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { ProductIndustries } from "@/components/product/ProductIndustries";
import { ProductCompare } from "@/components/product/ProductCompare";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { ProductCTA } from "@/components/product/ProductCTA";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — Fuel Tracks" }] };
    const title = `${p.name} (${p.sku}) — Fuel Tracks`;
    const desc = p.tagline;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: p.image },
        { property: "og:url", content: `https://fueltracks-tpl.lovable.app/products/${p.slug}` },
        { property: "og:type", content: "product" },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `https://fueltracks-tpl.lovable.app/products/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            sku: p.sku,
            description: p.description,
            brand: { "@type": "Brand", name: "Fuel Tracks" },
            image: p.image,
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
  notFoundComponent: ProductNotFound,
  errorComponent: ProductError,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  return (
    <>
      <ProductHero product={product} />
      <ProductStickyNav />
      <ProductDetails product={product} />
      <ProductOverview product={product} />
      <ProductFeatures product={product} />
      <ProductSpecs product={product} />
      <ProductIndustries product={product} />
      <ProductCompare product={product} />
      <ProductFAQ product={product} />
      <RelatedProducts slugs={product.related} />
      <ProductCTA />
    </>
  );
}

function ProductNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="min-h-[60vh] grid place-items-center px-4 pt-32">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-gradient">Not found</h1>
        <p className="mt-3 text-muted-foreground">
          We couldn't find a product called "{slug}".
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold">
            See all products
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl border border-navy/15 px-5 py-2.5 text-sm font-semibold">
            Go home
          </Link>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Try: {products.map((p) => p.slug).join(" · ")}
        </p>
      </div>
    </div>
  );
}

function ProductError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-[60vh] grid place-items-center px-4 pt-32">
      <div className="text-center max-w-md">
        <h1 className="text-xl font-semibold">This product page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
