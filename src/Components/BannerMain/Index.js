import { MovieListContext } from "../../Contexts/MovieList";
import Category from "../Category";
import Player from "../Player/Index";
import styles from "./BannerMain.module.css";
import { useContext } from "react";

function BannerMain() {
   const { movies } = useContext(MovieListContext);

   let bannerVideo = movies[0];

   return (
      <section className={styles.container}>
         <div className={styles.banner}>
            <Category key={bannerVideo.id}>{bannerVideo.category}</Category>

            <h2 className={styles.title}>{bannerVideo.title}</h2>
            <p className={styles.description}>{bannerVideo.description}</p>
         </div>
         <div className={styles.player}>
            <Player key={bannerVideo.id} movie={bannerVideo} />
         </div>
      </section>
   );
}

export default BannerMain;
