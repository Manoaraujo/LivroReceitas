import { useState } from "react";
import { Typography, Box, Modal } from "@mui/material";
import { Button } from "@mui/joy";
import NewVideoForm from "../NewVideoForm/Index";
import { useContext } from "react";
import { MovieListContext } from "../../Contexts/MovieList";
import CategoryFormWindow from "../CategoryFormWindow";
import styles from "./VideoFormWindow.module.css";

export default function VideoFormWindow({ children }) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };

   const { movies, AddVideo } = useContext(MovieListContext);
   const PostVideo = (formData) => {
      const newVideo = {
         id: movies.length + 1,
         title: formData.title,
         category: formData.category,
         url: formData.link,
         description: formData.description,
      };
      AddVideo(newVideo);
      alert("Video adicionado com sucesso!");
      handleClose();
   };

   return (
      <div>
         <Button color="danger" className={styles.button} onClick={handleOpen}>
            {children}
         </Button>
         <Modal open={open} onClose={handleClose}>
            <Box className={styles.box}>
               <Typography
                  align="center"
                  color="primary"
                  variant="h4"
                  component="h2"
               >
                  Novo vídeo
               </Typography>

               <NewVideoForm
                  novaCategoria={
                     <CategoryFormWindow>+ Nova Categoria</CategoryFormWindow>
                  }
                  onFormSubmit={PostVideo}
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
               />
               {/* <CategoryFormWindow>+ Categoria</CategoryFormWindow> */}
            </Box>
         </Modal>
      </div>
   );
}
