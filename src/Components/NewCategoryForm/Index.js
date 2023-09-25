import React from "react";
import styles from "./NewCategoryForm.module.css";
import { Button, FormControl, TextField } from "@mui/material";

function NewCategoryForm() {
   return (
      <div className={styles.container}>
         <FormControl>
            <TextField color="warning" label="Nome" />
            <TextField color="warning" label="descrição" />
            <TextField color="warning" type="color" label="cor" />
            <section>
               <Button color="error" variant="contained">
                  Salvar
               </Button>
               <Button color="error" variant="contained">
                  Limpar
               </Button>
            </section>
         </FormControl>
      </div>
   );
}

export default NewCategoryForm;
