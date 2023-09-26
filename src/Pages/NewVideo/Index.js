import { useContext, useState } from "react";
import NewVideoForm from "../../Components/NewVideoForm/Index";
import styles from "./NewVideo.module.css";
import { MovieListContext } from "../../Contexts/MovieList";

export default function NewVideo() {
   const { movies } = useContext(MovieListContext);

   const [savedVideo, setSavedVideo] = useState({});
   function getVideo(data) {
      setSavedVideo({ ...savedVideo, ...data });
   }
   console.log(movies, savedVideo);

   return (
      <section className={styles.container}>
         <h1 className={styles.title}>Novo Video</h1>
         <NewVideoForm onFormSubmit={getVideo} />
      </section>
   );
}
