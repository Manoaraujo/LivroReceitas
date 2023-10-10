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
import extractVideoId from "../../helpers/extractVideoId";

function NewVideoForm({ onFormSubmit, novaCategoria, videoData }) {
   const [title, setTitle] = useState(videoData.title);
   const [linkEmbed, setEmbed] = useState(videoData.url);
   const [category, setCategory] = useState(videoData.category);
   const [description, setDescription] = useState(videoData.description);
   const [error, setError] = useState(false);

   const { categories } = useContext(CategoriesContext);

   function clearData(data) {
      setEmbed(data);
      setTitle(data);
      setDescription(data);
   }

   function createEmbed(videoId) {
      if (videoId) {
         setEmbed(`https://youtube.com/embed/${videoId}`);
         setError(false);
      } else {
         setEmbed("");
         setError(true);
      }
   }

   return (
      <form
         className={styles.container}
         onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit({
               title,
               linkEmbed,
               category,
               description,
            });
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
            value={linkEmbed}
            onChange={(e) => {
               setEmbed(e.target.value);
            }}
            onBlur={(e) => createEmbed(extractVideoId(e.target.value))}
            InputProps={{ className: styles.input }}
            color="warning"
            error={error}
            helperText={"Url não válida."}
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
                     key={category.name}
                     value={category.name}
                     onClick={() => setCategory(category.name)}
                     className={styles.input}
                  >
                     {category.name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         {novaCategoria}
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
