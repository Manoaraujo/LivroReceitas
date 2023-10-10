import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const CategoriesContext = createContext();

export const categoriesURL = `https://my-json-server.typicode.com/Manoaraujo/LivroReceitas-api/categories`;
// export const categoriesURL = `http://localhost:3000/categories`;

export function CategoriesList({ children }) {
   const [categories, setCategories] = useState([]);

   const addNewCategory = (newCategory) => {
      setCategories([...categories, newCategory]);

      axios
         .post(categoriesURL, newCategory)
         .then((response) => {
            console.log(
               "Categoria added successfully:",
               categories,
               response.data
            );
         })
         .catch((error) => {
            console.error("Failed to add category:", error);
         });
   };

   useEffect(() => {
      axios
         .get(categoriesURL)
         .then((response) => {
            setCategories(response.data);
         })
         .catch((error) => {
            console.error("Não foi possível encontrar a categoria:", error);
         });
   }, []);

   return (
      <CategoriesContext.Provider
         key={uuidv4()}
         value={{ categories, addNewCategory }}
      >
         {children}
      </CategoriesContext.Provider>
   );
}
