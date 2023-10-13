import { Button } from "@mui/joy";
import styles from "./VideoForm.module.css";
import {
   Box,
   FormControl,
   InputLabel,
   MenuItem,
   Modal,
   Select,
   TextField,
   Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories/Index";
import extractVideoId from "../../helpers/extractVideoId";
import DoneBox from "../DoneBox";
import CategoryForm from "../CategoryForm/Index";

export default function VideoForm({ onFormSubmit }) {
   const [title, setTitle] = useState("");
   const [linkEmbed, setEmbed] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
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

   // ***************
   const [open, setOpen] = useState(false);
   const [added, setAdded] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
      setAdded(false);
   };

   useEffect(() => {
      if (added) {
         const timer = setTimeout(() => {
            handleClose();
         }, 2000);

         return () => clearTimeout(timer);
      }
   }, [added]);

   // ***************

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
                     value={category.name}
                     onClick={() => setCategory(category.name)}
                     className={styles.input}
                  >
                     {category.name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>

         {/* ********** */}
         <>
            <Button
               size="small"
               sx={{
                  color: "var(--medium-red)",
                  width: "120px",
                  fontWeight: 600,
                  padding: 0,
                  background: "none",
                  ":hover": { background: "none" },
               }}
               onClick={handleOpen}
            >
               + Nova Categoria
            </Button>

            <Modal hideBackdrop open={open} onClose={handleClose}>
               <Box className={styles.categoryBox}>
                  <DoneBox
                     okMessage="Categoria adicionada com sucesso!"
                     success={added}
                  >
                     ;
                     <Typography
                        sx={{
                           padding: "5px",
                           color: "var(--medium-red)",
                        }}
                        align="center"
                        variant="h4"
                        component="h2"
                     >
                        Nova Categoria
                     </Typography>
                     <CategoryForm handleClose={handleClose} />
                  </DoneBox>
               </Box>
            </Modal>
         </>
         {/* ********** */}

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
