
import ProductDetailsScreen from "@/src/features/products/screens/ProductDetails.screen";

type productDetailsParams={
  params:Promise<{id:string}>
}
export default async function ProductDetailsPage({params}:productDetailsParams) {
const {id} = await params;
  return (
    <>
      <ProductDetailsScreen productId={id} />
    </>
  );
}
