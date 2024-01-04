import { Footer } from "@/app/(landing)/_components/footer";
import { Navbar } from "@/app/(landing)/_components/navbar";

const BrowseLayout = ({
  children
}:{
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen h-auto dark:bg-fuchsia-900/40">
      <Navbar/>
      <main className="pt-14">
      {children}
      </main>
      <Footer/>
    </div>
  )
}
export default BrowseLayout;