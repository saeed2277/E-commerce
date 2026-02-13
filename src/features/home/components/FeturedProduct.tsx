import { getProducts } from "../../products/server/product.action";
import ProductCaart from "../../products/component/ProductCaart";


export default async function FeturedProduct() {
    const response = await getProducts();
     
  return<>
   <section className="py-12 bg-white">
        <div className="max-w-11/12 md:max-w-9/12 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
              <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-green-500 to-green-900 rounded-full mr-1"></span>
              Shop By <span className="text-green-600">Category</span>
            </h2>
           
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          
             
                
{response.data.map((product)=><ProductCaart key={product._id} info={product}/>)}
                
              
            
          </div>
        </div>
      </section>
  </>
}
