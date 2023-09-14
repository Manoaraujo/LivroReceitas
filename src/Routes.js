import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage";
import Home from "./Components/Pages/Home/Index";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage />}>
               <Route index element={<Home />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
