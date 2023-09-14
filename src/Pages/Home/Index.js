import BannerBackground from "../../Components/BannerBackground/index";
import SimpleSlider from "../../Components/Carousel/SimpleSlider";
import styles from "./Home.module.css";

function Home() {
   return (
      <div className={styles.mainContainer}>
         <BannerBackground />

         <section className={styles.videosContainer}>
            <SimpleSlider category="Bolos" />
            <SimpleSlider category="Doces" />
         </section>
      </div>
   );
}

export default Home;
