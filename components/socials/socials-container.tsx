import { Separator } from "../ui/separator";
import SocialButton from "./buttons/social-button";

interface SocialsContainerProps {}

const SocialsContainer = () => {
  return (
<div className="flex items-center justify-center flex-col gap-1 p-2 z-30">
   
    <section className="flex items-center justify-center  gap-1 p-2 w-full max-w-[300px]">
      <SocialButton
        href="https://www.instagram.com/"
        image="/icons/instagram.svg"
        name="Instagram"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
        bg-gradient-to-tl from-emerald-600/40 to-purple-900/60  text-fuchsia-500 hover:bg-emerald-500/20  hover:scale-105 transition-all"  />
      <SocialButton
        href="https://www.facebook.com/"
        image="/icons/facebook.svg"
        name="Facebook"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
        bg-gradient-to-tl from-emerald-600/40 to-purple-900/60  text-fuchsia-500 hover:bg-emerald-500/20  hover:scale-105 transition-all"
      />
      <SocialButton
        href="https://www.twitter.com/"
        image="/icons/twitterx.svg"
        name="X-Twitter"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
        bg-gradient-to-tl from-emerald-600/40 to-purple-900/60  text-fuchsia-500 hover:bg-emerald-500/20  hover:scale-105 transition-all"
      />
      <SocialButton
        href="https://www.youtube.com/"
        image="/icons/youtube.svg"
        name="Youtube"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 opacity-90
        bg-gradient-to-tl from-emerald-600/40 to-purple-900/60  text-fuchsia-500 hover:bg-emerald-500/20  hover:scale-105 transition-all"
      />
    </section>
</div>
  );
}
export default SocialsContainer;