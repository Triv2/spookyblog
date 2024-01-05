import { Separator } from "../ui/separator";
import SocialButton from "./buttons/social-button";

interface SocialsContainerProps {}

const SocialsContainer = () => {
  return (
<div className="flex items-center justify-center flex-col gap-1 p-2 z-30">
    Socials
    <Separator/>
    <section className="flex items-center justify-center  gap-1 p-2 w-full">
      <SocialButton
        href="https://www.instagram.com/"
        image="/icons/instagram.svg"
        name="Instagram"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1 bg-gradient-to-br
         from-violet-600/80 via-rose-500/80 to-yellow-300/80 hover:scale-105 transition-all"
      />
      <SocialButton
        href="https://www.facebook.com/"
        image="/icons/facebook.svg"
        name="Facebook"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1
        bg-gradient-to-br from-blue-800/80 via-blue-600/80 to-blue-900/80 hover:scale-105 transition-all"
      />
      <SocialButton
        href="https://www.twitter.com/"
        image="/icons/twitterx.svg"
        name="X-Twitter"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1
        bg-gradient-to-br from-sky-600/80 via-blue-400/80 to-sky-600/80 hover:scale-105 transition-all"
      />
      <SocialButton
        href="https://www.youtube.com/"
        image="/icons/youtube.svg"
        name="Youtube"
        className="w-full h-12 flex items-center justify-center gap-1 rounded-md p-1
        bg-gradient-to-br from-rose-800/80 via-rose-600/80 to-rose-100/80 hover:scale-105 transition-all"
      />
    </section>
</div>
  );
}
export default SocialsContainer;