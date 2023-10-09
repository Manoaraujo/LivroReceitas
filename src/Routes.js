import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/index";
import Home from "./Pages/Home/Index";
import VideoPage from "./Pages/VideoPage/Index";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage />}>
               <Route index element={<Home />} />
               <Route path="video/:id/*" element={<VideoPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
