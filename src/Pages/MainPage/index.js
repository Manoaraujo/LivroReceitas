import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Index";
import Header from "../../Components/Header/Index";

export default function MainPage() {
   return (
      <main>
         <Header />
         <Outlet />
         <Footer />
      </main>
   );
}
