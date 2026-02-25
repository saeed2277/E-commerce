import PromoBanner from "@/src/components/ui/PromoBanners";
import ForgetForm from "../components/forgetPassword/ForgetForm";
import ForgetHero from "../components/forgetPassword/ForgetHero";


export default function ForgetPasswordScreen() {
  return <>
  
      <main className="p-10 ">
          <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12">
<ForgetHero/>
<ForgetForm/>
          </div>
      </main>
  <PromoBanner/>
  </>
}
