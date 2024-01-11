import { RegisterForm } from "@/components/auth/forms/register-form";
import Particles from "@/components/effects/particles";

interface RegisterPageProps {}

const RegisterPage = () => {
  return (
<div className="flex items-center justify-center min-h-screen h-auto">
      <Particles className="fixed inset-0  " />
     <RegisterForm/>
    </div>
  );
}
export default RegisterPage;