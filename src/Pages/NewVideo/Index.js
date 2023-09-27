import { useContext } from "react";
import NewVideoForm from "../../Components/NewVideoForm/Index";
import styles from "./NewVideo.module.css";
import { MovieListContext } from "../../Contexts/MovieList";
import axios from "axios";

export default function NewVideo() {
   const { movies, addVideo } = useContext(MovieListContext);
   const baseUrl = `https://my-json-server.typicode.com/Manoaraujo/LivroReceitas-api/videos`;
   // const baseUrl = `http://localhost:3000/videos`;

   const PostVideo = (formData) => {
      const newVideo = {
         id: movies.length + 1,
         title: formData.title,
         category: formData.category,
         url: formData.link,
         description: formData.description,
      };

      axios
         .post(baseUrl, newVideo)
         .then((response) => {
            console.log("Video added successfully:", movies, response.data);

            addVideo(response.data);
         })
         .catch((error) => {
            console.error("Failed to add video:", error);
         });
   };

   return (
      <section className={styles.container}>
         <h1 className={styles.title}>Novo Video</h1>
         <NewVideoForm onFormSubmit={PostVideo} />
      </section>
   );
}
