import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/index";
import Home from "./Pages/Home/Index";
import VideoPage from "./Pages/VideoPage/Index";
import AdminPage from "./Pages/AdminPage";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage />}>
               <Route index element={<Home />} />
               <Route path="video/:id/*" element={<VideoPage />} />
               <Route path="admin/*" element={<AdminPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
