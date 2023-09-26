import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { MovieListContext } from "../MovieList";

export const CategoriesContext = createContext();

export function CategoriesList({ children }) {
   const { movies } = useContext(MovieListContext);

   const allCategories = movies.map((movie) => movie.category);

   const uniqueCategories = allCategories.filter(
      (category, index, self) => self.indexOf(category) === index
   );

   return (
      <CategoriesContext.Provider
         key={uniqueCategories.id}
         value={{ uniqueCategories }}
      >
         {children}
      </CategoriesContext.Provider>
   );
}
