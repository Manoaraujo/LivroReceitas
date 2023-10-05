import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/joy";
import styles from "./NewCategoryForm.module.css";

export default function NewCategoryForm({ onFormSubmit }) {
   const [newCategory, setNewCategory] = useState("");

   function capitalizeFirstLetter(str) {
      // Transforma a primeira letra em maiúscula e as demais em minúsculas
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
   }

   return (
      <form
         className={styles.container}
         onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit(newCategory);
         }}
      >
         <TextField
            value={newCategory}
            onChange={(e) => {
               setNewCategory(e.target.value);
            }}
            InputProps={{ className: styles.input }}
            color="warning"
            label="Nome"
            margin="normal"
            inputProps={{ maxLength: 10 }}
            fullWidth
            required
         />
         <section className={styles.button}>
            <Button
               onClick={(e) => {
                  e.preventDefault();
                  onFormSubmit(capitalizeFirstLetter(newCategory));
               }}
               color="danger"
            >
               Salvar
            </Button>
         </section>
      </form>
   );
}
