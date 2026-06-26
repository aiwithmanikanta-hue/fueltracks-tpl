import { createFileRoute, notFound, Link, useRouter } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductOverview } from "@/components/product/ProductOverview";
import { ProductFeatures } from "@/components/product/ProductFeatures";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { HowItWorks } from "@/components/product/HowItWorks";
import { DashboardPreview } from "@/components/product/DashboardPreview";
import { ProductBenefits } from "@/components/product/ProductBenefits";
import { ProductIndustries } from "@/components/product/ProductIndustries";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { ProductTestimonials } from "@/components/product/ProductTestimonials";
import { ProductCTA } from "@/components/product/ProductCTA";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { ProductContact } from "@/components/product/ProductContact";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    // Return only serializable fields. The full product (icons are React
    // components / functions and are not serializable) is read directly
    // from the local data module inside the component.
    return {
      meta: {
        slug: product.slug,
        name: product.name,
        sku: product.sku,
        tagline: product.tagline,
        description: product.description,
        image: product.image,
      },
    };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.meta;
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
        { property: "og:url", content: `https://fuel-track-cosmos.lovable.app/products/${p.slug}` },
        { property: "og:type", content: "product" },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `https://fuel-track-cosmos.lovable.app/products/${p.slug}` }],
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
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  if (!product) return <ProductNotFound />;
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-24 pb-2">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <nav className="flex items-center gap-1 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <ChevronRight className="size-3" />
            <Link to="/products" className="hover:text-primary transition-colors">PRODUCTS</Link>
            <ChevronRight className="size-3" />
            <span className="text-primary truncate">{product.name.toUpperCase()}</span>
          </nav>
        </div>
      </div>

      <ProductHero product={product} />
      <ProductOverview product={product} />
      <ProductFeatures product={product} />
      <ProductSpecs product={product} />
      <HowItWorks product={product} />
      <DashboardPreview />
      <ProductBenefits product={product} />
      <ProductIndustries product={product} />
      <ProductFAQ product={product} />
      <ProductTestimonials product={product} />
      <ProductCTA />
      <RelatedProducts slugs={product.related} />
      <ProductContact product={product} />
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
          <Link to="/products" className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
            See all products
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold">Go home</Link>
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
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
