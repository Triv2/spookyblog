import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Separator } from "../ui/separator";
import SocialButton from "./buttons/social-button";
import { Button } from "../ui/button";

interface SocialsContainerProps {}

const SocialsContainer = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-1 p-2 z-30">
      <section className="flex items-center justify-center  gap-1 p-2 w-full max-w-[300px]">
        <Button variant="blend" asChild>
          <SocialButton
            href="https://www.instagram.com/"
            icon={<FaInstagram className="h-6 w-6  " />}
            name="Instagram"
            className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
         hover:scale-105 transition-all"
          />
        </Button>
        <Button variant="blend" asChild>
          <SocialButton
            href="https://www.facebook.com/"
            icon={<FaFacebook className="h-6 w-6  "  />}
            name="Facebook"
            className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
         hover:scale-105 transition-all"
          />
        </Button>
        <Button variant="blend" asChild>
          <SocialButton
            href="https://www.twitter.com/"
            icon={<FaTwitter className="h-6 w-6  " />}
            name="X-Twitter"
            className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
         hover:scale-105 transition-all"
          />
        </Button>
        <Button variant="blend" asChild>
          <SocialButton
            href="https://www.youtube.com/"
            icon={<FaYoutube className="h-6 w-6  " />}
            name="Youtube"
            className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
         hover:scale-105 transition-all"
          />
        </Button>
      </section>
    </div>
  );
};
export default SocialsContainer;
