import { MovieListContext } from "../../Contexts/MovieList";
import Category from "../Category";
import Player from "../Player/Index";
import styles from "./BannerMain.module.css";
import { useContext } from "react";

function BannerMain() {
   const { movies } = useContext(MovieListContext);

   const videoCapa = movies.filter((movie) => movie.id === 1);

   return (
      <section className={styles.container}>
         <div className={styles.banner}>
            <Category>Bolos</Category>

            <h2 className={styles.title}>Bolos de dar água na boca</h2>
            <p className={styles.description}>
               Aqui você encontra bolos de todo os estilos, confeitados,
               fofinhos, gelados, para tomar com café, a escolha é sua.
            </p>
         </div>
         <div className={styles.player}>
            {videoCapa.map((movie) => (
               <Player key={movie.id} movie={movie} />
            ))}
         </div>
      </section>
   );
}

export default BannerMain;
