import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes";
import { MovieList } from "./Contexts/MovieList";
import { CategoriesList } from "./Contexts/Categories/Index";
import { HandleProvider } from "./Contexts/HandleModalWindow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <HandleProvider>
         <MovieList>
            <CategoriesList>
               <AppRoutes />
            </CategoriesList>
         </MovieList>
      </HandleProvider>
   </React.StrictMode>
);
