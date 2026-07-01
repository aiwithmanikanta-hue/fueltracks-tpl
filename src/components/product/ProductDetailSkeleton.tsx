export function ProductDetailSkeleton() {
  return (
    <div className="pt-24 pb-16 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="h-3 w-64 bg-navy/10 rounded mb-8" />
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="h-6 w-40 bg-navy/10 rounded-full mb-5" />
            <div className="h-12 w-3/4 bg-navy/10 rounded mb-4" />
            <div className="h-8 w-2/3 bg-navy/10 rounded mb-5" />
            <div className="space-y-2 mb-7">
              <div className="h-4 w-full bg-navy/10 rounded" />
              <div className="h-4 w-11/12 bg-navy/10 rounded" />
              <div className="h-4 w-10/12 bg-navy/10 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-md mb-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-5 bg-navy/10 rounded" />
              ))}
            </div>
            <div className="flex gap-3">
              <div className="h-12 w-32 bg-navy/10 rounded-xl" />
              <div className="h-12 w-32 bg-navy/10 rounded-xl" />
            </div>
          </div>
          <div className="aspect-square rounded-[2rem] bg-navy/10" />
        </div>
      </div>
    </div>
  );
}
