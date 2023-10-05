import { useState } from "react";
import { Typography, Box, Modal } from "@mui/material";
import { Button } from "@mui/joy";
import NewVideoForm from "../NewVideoForm/Index";
import { useContext } from "react";
import { MovieListContext } from "../../Contexts/MovieList";
import CategoryFormWindow from "../CategoryFormWindow";
import styles from "./VideoFormWindow.module.css";
import DoneBox from "../DoneBox";
import { useEffect } from "react";

export default function VideoFormWindow({ children }) {
   const [open, setOpen] = useState(false);
   const [added, setAdded] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
      setAdded(false);
   };

   const { movies, AddVideo } = useContext(MovieListContext);
   const PostVideo = (formData) => {
      const newVideo = {
         id: movies.length + 1,
         title: formData.title,
         category: formData.category,
         url: formData.linkEmbed,
         description: formData.description,
      };
      // console.log(formData);
      AddVideo(newVideo);
      setAdded(true);
   };

   useEffect(() => {
      if (added) {
         const timer = setTimeout(() => {
            handleClose();
         }, 2000);

         return () => clearTimeout(timer);
      }
   }, [added]);

   return (
      <div>
         <Button color="danger" className={styles.button} onClick={handleOpen}>
            {children}
         </Button>
         <Modal open={open} onClose={handleClose}>
            <Box className={styles.box}>
               <DoneBox
                  okMessage="Video adicionado com sucesso!"
                  success={added}
               >
                  <Typography
                     sx={{
                        color: "var(--medium-red)",
                     }}
                     align="center"
                     variant="h4"
                     component="h2"
                  >
                     Novo vídeo
                  </Typography>

                  <NewVideoForm
                     novaCategoria={
                        <CategoryFormWindow>
                           + Nova Categoria
                        </CategoryFormWindow>
                     }
                     onFormSubmit={PostVideo}
                     sx={{ mt: 2 }}
                  />
               </DoneBox>
            </Box>
         </Modal>
      </div>
   );
}
