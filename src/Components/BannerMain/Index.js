import Category from "../Category";
import data from "../../Json/mock.json";
import Player from "../Player/Index";
import styles from "./BannerMain.module.css";

function BannerMain() {
   const videoCapa = data.find((video) => video.id === "1");

   return (
      <section className={styles.container}>
         <div className={styles.banner}>
            <Category>
               <h1 className={styles.categoryName}>Bolos</h1>
            </Category>

            <h2 className={styles.title}>Bolos de dar água na boca</h2>
            <p className={styles.description}>
               Aqui você encontra bolos de todo os estilos, confeitados,
               fofinhos, gelados, para tomar com café, a escolha é sua.
            </p>
         </div>

         <Player movie={videoCapa} />
      </section>
   );
}

export default BannerMain;
