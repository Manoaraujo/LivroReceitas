import { useContext } from "react";
import NewVideoForm from "../../Components/NewVideoForm/Index";
import styles from "./NewVideo.module.css";
import { MovieListContext } from "../../Contexts/MovieList";
import { useNavigate } from "react-router-dom";

export default function NewVideo() {
   const { movies, AddVideo } = useContext(MovieListContext);
   const navigate = useNavigate();

   const handleSubmit = () => {
      navigate("/");
   };

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
      handleSubmit();
   };

   return (
      <section className={styles.container}>
         <h1 className={styles.title}>Novo Video</h1>
         <NewVideoForm onFormSubmit={PostVideo} />
      </section>
   );
}
