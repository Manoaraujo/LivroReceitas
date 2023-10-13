import { Box, IconButton, Modal, Typography } from "@mui/material";
import styles from "./AdminPage.module.css";
import { MovieListContext } from "../../Contexts/MovieList";
import { useContext } from "react";
import { Delete, Edit } from "@mui/icons-material";
import DoneBox from "../../Components/DoneBox";
import VideoForm from "../../Components/VideoForm/Index";
import { useState } from "react";

export default function AdminPage() {
   const [open, setOpen] = useState(false);
   const [added, setAdded] = useState(false);
   const [videoToEdit, setVideoToEdit] = useState();

   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
      setAdded(false);
   };
   const { movies, DeleteVideo } = useContext(MovieListContext);

   const EditVideo = (video) => {
      const videoToEdit = {
         id: video.id,
         title: video.title,
         url: video.url,
         category: video.category,
         description: video.description,
      };
      handleOpen();
      setVideoToEdit(videoToEdit);
   };

   return (
      <section className={styles.container}>
         <div className={styles.areaTableVideos}>
            <table>
               <thead>
                  <tr>
                     <th>Titulo</th>
                     <th>Categoria</th>
                     <th>Editar</th>
                     <th>Excluir</th>
                  </tr>
               </thead>
               <tbody>
                  {movies.map((video) => (
                     <tr key={video.id}>
                        <td>{video.title}</td>
                        <td>{video.category}</td>
                        <td>
                           <IconButton onClick={() => EditVideo(video)}>
                              <Edit />
                           </IconButton>
                        </td>
                        <td>
                           <IconButton onClick={() => DeleteVideo(video.id)}>
                              <Delete />
                           </IconButton>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
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

                     <VideoForm
                        videoData={videoToEdit}
                        onFormSubmit={() => setAdded(true)}
                        sx={{ mt: 2 }}
                     />
                  </DoneBox>
               </Box>
            </Modal>
         </div>
      </section>
   );
}
