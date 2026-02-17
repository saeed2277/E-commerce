import { Product } from "../../../type/product.type";
import { getRelatedProducts } from "../../../server/product.action";
import "swiper/css";
import RelatiedProductSwiper from "./RelatiedProductSwiper";

export default async function RelatiedProduct({
  product,
}: {
  product: Product;
}) {
  const response = await getRelatedProducts({
    categoryId: product.category._id,
  });

  return (
    <>
      <RelatiedProductSwiper product={response.data} />
    </>
  );
}
