import Particles from "@/components/effects/particles";
import Settings from "./_components/settings";

interface SettingsPageProps {}

const SettingsPage = () => {
  return (
<div className="flex items-center justify-center min-h-screen">
<Particles className="fixed inset-0  " />
<Settings/>
</div>
  );
}
export default SettingsPage;