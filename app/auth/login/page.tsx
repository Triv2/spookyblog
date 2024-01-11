import { LoginForm } from "@/components/auth/forms/login-form";
import Particles from "@/components/effects/particles";

const LoginPage= () => {
  return(
    <div className="flex items-center justify-center min-h-screen h-auto">
      <Particles className="fixed inset-0  " />
     <LoginForm/>
    </div>
  )
}

export default LoginPage;