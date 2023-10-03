import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Index";
import Header from "../../Components/Header/Index";

function MainPage() {
   return (
      <main>
         {/* <ThemeProvider theme={theme}> */}
         <Header />
         <Outlet />
         <Footer />
         {/* </ThemeProvider> */}
      </main>
   );
}

export default MainPage;
