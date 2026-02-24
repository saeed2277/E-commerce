import BrandDetails from "@/src/features/brands/screen/BrandDetails.screen";
import { Suspense } from "react";

type productDetailsParams = {
  params: Promise<{ id: string }>;
};
export default async function Brands({ params }: productDetailsParams) {
  const { id } = await params;
  return (
    <>
      <main className="min-h-screen">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading Products...
            </div>
          }
        >
          <BrandDetails productId={id} />
        </Suspense>
      </main>
    </>
  );
}
