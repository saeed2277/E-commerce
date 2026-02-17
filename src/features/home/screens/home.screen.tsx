import PromoBanners from "@/src/components/ui/PromoBanners";
import Categories from "../components/Categores";
import DealsBanner from "../components/DealsBanner";
import FeturedProduct from "../components/FeturedProduct";
import NewsLetter from "../components/NewsLetter";
import PromoBanner from "../components/PromoBanner";
import Slider from "../components/Slider";

export default function HomeScreen() {
  return (
    <>
      <Slider />
      <PromoBanner/>
      <Categories/>
      <DealsBanner/>
      <FeturedProduct/>
      <NewsLetter/>
      <PromoBanners/>
    </>
  );
}
