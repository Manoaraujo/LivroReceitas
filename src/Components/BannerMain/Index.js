import { MovieListContext } from "../../Contexts/MovieList";
import Category from "../Category";
import Player from "../Player/Index";
import styles from "./BannerMain.module.css";
import { useContext } from "react";

function BannerMain() {
   const { movies } = useContext(MovieListContext);

   let i = 0;

   return (
      <section className={styles.container}>
         <div className={styles.banner}>
            <Category key={movies[i].id}>{movies[i].category}</Category>

            <h2 className={styles.title}>{movies[i].title}</h2>
            <p className={styles.description}>{movies[i].description}</p>
         </div>
         <div className={styles.player}>
            <Player key={movies[i].id} movie={movies[i]} />
         </div>
      </section>
   );
}

export default BannerMain;
