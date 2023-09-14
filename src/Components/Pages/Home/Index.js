import BannerBackground from "../../BannerBackground";
import SimpleSlider from "../../Carousel/SimpleSlider";
import styles from "./Home.module.css";

function Home() {
   return (
      <div className={styles.container}>
         <BannerBackground />
         <SimpleSlider />
      </div>
   );
}

export default Home;
