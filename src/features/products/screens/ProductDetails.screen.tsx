import ProductInfo from "../component/productDetails.tsx/ProductInfo";
import ProductReview from "../component/productDetails.tsx/ProductReview";
import { getProductBuId } from "../server/product.action"


export default async function ProductDetailsScreen({productId}:{productId:string}) {
const response = await getProductBuId({id:productId});

  return <>

<ProductInfo product={response.data}/>
<ProductReview/>

    
  </>;
}
