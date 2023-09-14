import Category from "../Category";
import Player from "../Player/Index";
import styles from "./BannerMain.module.css";
function BannerMain() {
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
         <Player />
      </section>
   );
}

export default BannerMain;
