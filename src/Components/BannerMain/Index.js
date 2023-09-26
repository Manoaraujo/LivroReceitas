import { MovieListContext } from "../../Contexts/MovieList";
import Category from "../Category";
import Player from "../Player/Index";
import styles from "./BannerMain.module.css";

import { useContext } from "react";

function BannerMain() {
   const { movies } = useContext(MovieListContext);

   let i = 1;

   const bannerMovie = movies.filter((movie) => movie.id === i);

   return (
      <section className={styles.container}>
         {bannerMovie.map((movie) => (
            <>
               <div className={styles.banner}>
                  <Category key={movie.id}>{movie.category}</Category>

                  <h2 className={styles.title}>{movie.title}</h2>
                  <p className={styles.description}>{movie.description}</p>
               </div>
               <div className={styles.player}>
                  <Player key={movie.id} movie={movie} />
               </div>
            </>
         ))}
      </section>
   );
}

export default BannerMain;
