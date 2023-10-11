import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes";
import { MovieList } from "./Contexts/MovieList";
import { CategoriesList } from "./Contexts/Categories/Index";
import { ModalFormProvider } from "./Contexts/ModalFormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <MovieList>
         <CategoriesList>
            <ModalFormProvider>
               <AppRoutes />
            </ModalFormProvider>
         </CategoriesList>
      </MovieList>
   </React.StrictMode>
);
