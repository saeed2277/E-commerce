import { faArrowRight, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getBrands } from "../server/brand.action";
import PromoBanner from "@/src/components/ui/PromoBanners";

export default async function BrandScreen() {
  const response = await getBrands();

  return (
    <>
      <section className="w-full ">
        <header className="bg-linear-to-b from-violet-600 to-violet-500 text-white py-15">
          <div className="container mx-auto px-6">
            <nav className="text-sm text-white mb-4 font-semibold">
              <Link href="/" className="text-gray-300 hover:text-white mr-1">
                Home
              </Link>
              / Brands
            </nav>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-violet-400 rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faTags}
                  className="text-3xl text-white"
                />
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
        <div className="container mx-auto my-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {response.data.map((brand) => (
              <Link key={brand._id} href={`/brands/${brand._id}`}>
                <div className="group bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="w-full shadow-md rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-4 p-5 py-10">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {brand.name}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-violet-600 mt-1 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
                    View Product <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <PromoBanner/>
      </section>
    </>
  );
}
