import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/index";
import Home from "./Pages/Home/Index";
import NewVideo from "./Pages/NewVideo/Index";
import NewCategory from "./Pages/NewCategory/Index";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage />}>
               <Route index element={<Home />} />
               <Route path="/novoVideo" element={<NewVideo />} />
               <Route path="/novaCategoria" element={<NewCategory />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
