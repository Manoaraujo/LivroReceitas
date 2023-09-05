import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage />}>
               <Route />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
