import { Button } from "@mui/joy";
import styles from "./NewVideoForm.module.css";
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   TextField,
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories/Index";

function NewVideoForm({ onFormSubmit, novaCategoria }) {
   const [title, setTitle] = useState("");
   const [link, setLink] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");

   const { categories } = useContext(CategoriesContext);

   function clearData(data) {
      setLink(data);
      setTitle(data);
      setDescription(data);
   }

   return (
      <form
         className={styles.container}
         onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit({ title, link, category, description });
         }}
      >
         <TextField
            value={title}
            onChange={(e) => {
               setTitle(e.target.value);
            }}
            InputProps={{ className: styles.input }}
            color="warning"
            label="Titulo"
            margin="normal"
            fullWidth
            required
         />
         <TextField
            value={link}
            onChange={(e) => {
               setLink(e.target.value);
            }}
            InputProps={{ className: styles.input }}
            color="warning"
            label="Link do video"
            placeholder="ATENÇÃO: apenas videos do YouTube"
            margin="normal"
            type="link"
            fullWidth
            required
         />
         <FormControl InputProps={{ className: styles.input }}>
            <InputLabel color="warning" className={styles.label} id="Categoria">
               Categoria
            </InputLabel>
            <Select
               value={category}
               className={styles.dropdown}
               color="warning"
               labelId="Categoria"
               id="Categoria"
               label="Categoria"
            >
               {categories.map((category) => (
                  <MenuItem
                     value={category.name}
                     onClick={() => setCategory(category.name)}
                     className={styles.input}
                  >
                     {category.name}
                  </MenuItem>
               ))}
               {novaCategoria}
            </Select>
         </FormControl>
         <TextField
            value={description}
            onChange={(e) => {
               setDescription(e.target.value);
            }}
            InputProps={{ className: styles.input }}
            multiline={true}
            rows={5}
            rowsmax={10}
            color="warning"
            label="Descrição"
            margin="normal"
            fullWidth
            required
         />
         <section className={styles.button}>
            <Button type="submit" color="danger">
               Salvar
            </Button>
            <Button onClick={() => clearData("")} color="danger">
               Limpar
            </Button>
         </section>
      </form>
   );
}

export default NewVideoForm;
