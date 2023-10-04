import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/joy";
import styles from "./NewCategoryForm.module.css";

export default function NewCategoryForm({ onFormSubmit }) {
   const [newCategory, setNewCategory] = useState("");

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
            fullWidth
            required
         />
         <section className={styles.button}>
            <Button
               onClick={(e) => {
                  e.preventDefault();
                  onFormSubmit(newCategory);
               }}
               color="danger"
            >
               Salvar
            </Button>
         </section>
      </form>
   );
}
