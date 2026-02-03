import LoginForm from "../components/login/LoginForm";
import LoginHero from "../components/login/LoginHero";

export default function LoginupScreen() {
    return<>
    <main className="p-10 ">
        <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12">
            <LoginHero />
            <LoginForm />
        </div>
    </main>
    
    </>
}