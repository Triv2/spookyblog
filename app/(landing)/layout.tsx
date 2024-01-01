import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}:{
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen h-auto dark:bg-fuchsia-900/40">
      <Navbar/>
      <main className="pt-14 ">
      {children}
      </main>
      <Footer/>
    </div>
  )
}
export default MarketingLayout;