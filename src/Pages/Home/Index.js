import { useContext } from "react";
import BannerBackground from "../../Components/BannerBackground/index";
import SimpleSlider from "../../Components/Carousel/SimpleSlider";

import styles from "./Home.module.css";
import { CategoriesContext } from "../../Contexts/Categories/Index";

export default function Home() {
   const { uniqueCategories } = useContext(CategoriesContext);

   return (
      <div className={styles.mainContainer}>
         <BannerBackground />

         {uniqueCategories.map((category) => (
            <section key={category.id} className={styles.videosContainer}>
               <SimpleSlider category={category} />
            </section>
         ))}
      </div>
   );
}
