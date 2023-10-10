import { useContext } from "react";
import BannerBackground from "../../Components/BannerBackground/index";
import SimpleSlider from "../../Components/Carousel/SimpleSlider";
import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import { CategoriesContext } from "../../Contexts/Categories/Index";

export default function Home() {
   const { categories } = useContext(CategoriesContext);

   return (
      <div className={styles.mainContainer}>
         <BannerBackground />

         {categories.map((category) => (
            <section key={uuidv4()} className={styles.videosContainer}>
               <SimpleSlider category={category} />
            </section>
         ))}
      </div>
   );
}
