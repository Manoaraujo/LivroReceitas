import { Button } from "@mui/joy";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import NewVideoForm from "../NewVideoForm/Index";
import { useContext } from "react";
import { MovieListContext } from "../../Contexts/MovieList";

function Header() {
   const { movies, AddVideo } = useContext(MovieListContext);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

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
      <section className={styles.container}>
         <Link to={"/"}>
            <img
               className={styles.LogoFooter}
               src="/img/LogoMain.png"
               alt="logo receitas"
            />
         </Link>

         <Button color="danger" className={styles.button} onClick={handleOpen}>
            Novo vídeo
         </Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className={styles.box}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Novo vídeo
               </Typography>

               <NewVideoForm
                  onFormSubmit={PostVideo}
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
               />
            </Box>
         </Modal>
      </section>
   );
}
export default Header;
