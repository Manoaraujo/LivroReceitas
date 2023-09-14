import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Index";
import Header from "../../Header/Index";

function MainPage() {
   return (
      <main>
         <Header />
         <Outlet />
         <Footer />
      </main>
   );
}

export default MainPage;
