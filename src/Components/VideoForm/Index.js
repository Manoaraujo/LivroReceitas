import { Button } from "@mui/joy";
import styles from "./VideoForm.module.css";
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
import CategoryFormWindow from "../CategoryFormWindow";
import { MovieListContext } from "../../Contexts/MovieList";
import DoneBox from "../DoneBox";
import { useEffect } from "react";

export default function VideoForm({ handleCloseModal }) {
   const [title, setTitle] = useState("");
   const [linkEmbed, setEmbed] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
   const [error, setError] = useState(false);
   const { categories } = useContext(CategoriesContext);
   const { movies, AddVideo } = useContext(MovieListContext);
   const [videoSended, setVideoSended] = useState(false);

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

   function PostVideo(e) {
      e.preventDefault();
      const newVideo = {
         id: movies.length + 1,
         title: title,
         category: category,
         url: linkEmbed,
         description: description,
      };
      setVideoSended(true);
      AddVideo(newVideo);
   }

   useEffect(() => {
      if (videoSended) {
         const timer = setTimeout(() => {
            handleCloseModal();
         }, 2000);

         return () => clearTimeout(timer);
      }
   }, [videoSended, handleCloseModal]);

   return (
      <DoneBox okMessage="Video adicionado com sucesso!" success={videoSended}>
         <form className={styles.container} onSubmit={PostVideo}>
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
               <InputLabel
                  color="warning"
                  className={styles.label}
                  id="Categoria"
               >
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
            <CategoryFormWindow>+ Nova Categoria</CategoryFormWindow>
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
      </DoneBox>
   );
}
