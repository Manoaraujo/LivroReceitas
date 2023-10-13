import { TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/joy";
import styles from "./CategoryForm.module.css";
import { CategoriesContext } from "../../Contexts/Categories/Index";
import DoneBox from "../DoneBox";

export default function CategoryForm({ handleClose }) {
   const { categories, addNewCategory } = useContext(CategoriesContext);

   const [newCategory, setNewCategory] = useState("");
   const [added, setAdded] = useState(false);

   const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
   };

   useEffect(() => {
      if (added) {
         const timer = setTimeout(() => {
            handleClose();
         }, 2000);

         return () => clearTimeout(timer);
      }
   }, [added, handleClose]);

   const AddCategory = (formData) => {
      if (formData !== "" && !categories.find((c) => c.name === formData)) {
         const newAddedCategory = {
            id: categories.length + 1,
            name: formData,
         };
         addNewCategory(newAddedCategory);
         setAdded(true);
         console.log(added);
      } else {
         handleClose();
      }
   };

   return (
      <DoneBox okMessage="Categoria adicionada com sucesso!" success={added}>
         <form
            className={styles.container}
            onSubmit={(e) => {
               e.preventDefault();
               AddCategory(newCategory);
            }}
         >
            <TextField
               value={newCategory}
               onChange={(e) => {
                  setNewCategory(e.target.value);
               }}
               InputProps={{ className: styles.input }}
               inputProps={{ maxLength: 8 }}
               placeholder="Nome com no máximo 8 caracteres"
               color="warning"
               label="Nome"
               margin="normal"
               fullWidth
               required
            />
            <section className={styles.buttonContainer}>
               <Button
                  onClick={(e) => {
                     e.preventDefault();
                     AddCategory(capitalizeFirstLetter(newCategory));
                  }}
                  color="danger"
               >
                  Salvar
               </Button>
               <Button onClick={handleClose} color="danger">
                  fechar
               </Button>
            </section>
         </form>
      </DoneBox>
   );
}
