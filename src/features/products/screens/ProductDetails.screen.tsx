import PromoBanners from "@/src/components/ui/PromoBanners";
import ProductInfo from "../component/productDetails.tsx/ProductInfo";
import ProductReview from "../component/productDetails.tsx/productReview/ProductReview";
import RelatiedProduct from "../component/productDetails.tsx/productReview/RelatiedProduct";
import { getProductBuId } from "../server/product.action"


export default async function ProductDetailsScreen({productId}:{productId:string}) {
const response = await getProductBuId({id:productId});

  return <>

<ProductInfo product={response.data}/>
<ProductReview product={response.data}/>
<RelatiedProduct product={response.data}/>
<PromoBanners/>

    
  </>;
}
