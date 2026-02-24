import { faArrowRight, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getBrandsById, getProductsByBrandId } from "../server/brand.action";
import PromoBanner from "@/src/components/ui/PromoBanners";
import ProductCaart from "../../products/component/ProductCaart";
import { Product } from "../../products/type/product.type";

export default async function BrandDetails({
  productId,
}: {
  productId: string;
}) {
  const responseId = await getBrandsById({ id: productId });
  const responseData = await getProductsByBrandId({ brandId: productId });

  return (
    <>
      <section className="w-full">
        <header className="bg-linear-to-b from-green-600 to-green-500 text-white py-15">
          <div className="container mx-auto px-6">
            <nav className="text-sm text-white mb-4 font-semibold">
              <Link href="/" className="text-gray-300 hover:text-white mr-1">
                Home
              </Link>
              /
              <Link
                href="/branddetails"
                className="text-gray-300 hover:text-white mx-1"
              >
                Brands
              </Link>
              <span className="mr-1">/</span>
              <span>{responseId.data.name}</span>
            </nav>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center">
                <img src={responseId.data.image} className="w-10 h-7" />
              </div>
              <div>
                <h1 className="text-5xl font-bold ">Top Brands</h1>
                <p className="text-lg opacity-80 mt-2">
                  Shop from your favorite brands
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto mb-10 mt-5">
          <span className="text-gray-500">
            Showing {responseData.data.length} products
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
            {responseData.data && responseData.data.length > 0 ? (
              responseData.data.map((item: Product) => (
                <ProductCaart key={item._id} info={item} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={faTags}
                    className="text-gray-300 text-4xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  No Products Yet
                </h3>
                <p className="text-gray-500 text-center max-w-sm mb-8">
                  We couldn't find any products for this brand at the moment.
                  Check back soon or explore our other top brands!
                </p>
                <Link
                  href="/branddetails"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-200 flex items-center gap-2 group"
                >
                  Browse All Brands
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
        <PromoBanner />
      </section>
    </>
  );
}