import { Button } from "@mui/joy";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";
import DoneBox from "../DoneBox";
import VideoForm from "../VideoForm/Index";
import { useContext, useEffect, useState } from "react";
import { MovieListContext } from "../../Contexts/MovieList";

export default function Header() {
   const [open, setOpen] = useState(false);
   const [added, setAdded] = useState(false);
   const { movies, AddVideo } = useContext(MovieListContext);

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

   const PostVideo = (formData) => {
      const newVideo = {
         id: movies.length + 1,
         title: formData.title,
         category: formData.category,
         url: formData.linkEmbed,
         description: formData.description,
      };
      AddVideo(newVideo);
      setAdded(true);
   };

   return (
      <header className={styles.container}>
         <Link to={"/"}>
            <img
               className={styles.LogoFooter}
               src="/img/LogoMain.png"
               alt="logo receitas"
            />
         </Link>
         <div className={styles.buttonArea}>
            <Link to={"/admin"}>
               <Button
                  endIcon={<Dashboard />}
                  className={styles.button}
                  color="danger"
               >
                  Gerenciamento de videos
               </Button>
            </Link>

            {/* **************** */}
            <Button
               color="danger"
               className={styles.button}
               onClick={handleOpen}
            >
               Novo Video +
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

                     <VideoForm onFormSubmit={PostVideo} sx={{ mt: 2 }} />
                  </DoneBox>
               </Box>
            </Modal>
         </div>
         {/* **************** */}
      </header>
   );
}
