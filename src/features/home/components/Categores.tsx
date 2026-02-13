import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { getAllGategories } from "../../categories/server/categories.action";

export default async function Categoires() {
  const respone = await getAllGategories();

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-9/12 mx-auto">
          <div className="md:flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-2">
              <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-green-500 to-green-900 rounded-full mr-1"></span>
              Shop By <span className="text-green-600">Category</span>
            </h2>
            <Link
              href="/categories"
              className=" text-md font-semibold text-green-600 hover:text-green-700 "
            >
              View All Categories
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {respone.data.map((category) => (
              <Link key={category._id} href={`/categories/${category._id}`}>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mb-4">
                    <Image
                      src={category.image}
                      width={300}
                      height={300}
                      alt={category.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-700">{category.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
