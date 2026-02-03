
import SignupForm from "../components/signup/SignupForm";
import SignupHero from "../components/signup/SignupHero";
import SignupFooter from "../components/signup/SinupFooter";

export default function SignupScreen() {
    return <>
    <main className="py-10">
<div className="container mx-auto  p-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<SignupHero />
<SignupForm />
    </div>
<SignupFooter />
</div>
    </main>
    </>;
}