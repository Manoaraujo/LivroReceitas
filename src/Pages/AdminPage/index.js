import { IconButton } from "@mui/material";
import styles from "./AdminPage.module.css";
import { MovieListContext } from "../../Contexts/MovieList";
import { useContext } from "react";
import { Delete, Edit } from "@mui/icons-material";

export default function AdminPage() {
   const { movies, DeleteVideo } = useContext(MovieListContext);

   const handleClick = (video) => {
      //   startEditing(video);
      //   openModal();
      console.log(video);
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
                           <IconButton onClick={() => handleClick(video)}>
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
         </div>
      </section>
   );
}
