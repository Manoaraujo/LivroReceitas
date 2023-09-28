import { Button } from "@mui/joy";
import styles from "./NewVideoForm.module.css";
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories/Index";

function NewVideoForm({ onFormSubmit }) {
   const [title, setTitle] = useState("");
   const [link, setLink] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");

   const { uniqueCategories } = useContext(CategoriesContext);

   // console.log(uniqueCategories);

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
            placeholder="ATENÇÃO: apenas videos do youtube"
            margin="normal"
            type="link"
            fullWidth
            required
         />
         <FormControl InputProps={{ className: styles.input }}>
            <InputLabel className={styles.label} id="Categoria">
               Categoria
            </InputLabel>
            <Select
               value={category}
               sx={{
                  backgroundColor: "var(--grey)",
                  color: "var(--color-primary-light)",
               }}
               color="warning"
               labelId="Categoria"
               id="Categoria"
               label="Categoria"
            >
               {uniqueCategories.map((category) => (
                  <MenuItem
                     value={category}
                     onClick={(e) => setCategory(category)}
                     className={styles.input}
                  >
                     {category}
                  </MenuItem>
               ))}

               <Link className={styles.link} to={"/NovaCategoria"}>
                  <MenuItem className={styles.input}>+ nova categoria</MenuItem>
               </Link>
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
