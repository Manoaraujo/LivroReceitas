import { useContext } from "react";
import BannerBackground from "../../Components/BannerBackground/index";
import SimpleSlider from "../../Components/Carousel/SimpleSlider";
import { MovieListContext } from "../../Contexts/EndPoint";
import styles from "./Home.module.css";

export default function Home() {
   const { movies } = useContext(MovieListContext);

   const allCategories = movies.map((movie) => movie.category);

   const uniqueCategories = allCategories.filter(
      (category, index, self) => self.indexOf(category) === index
   );

   console.log(uniqueCategories);

   return (
      <div className={styles.mainContainer}>
         <BannerBackground />

         <section className={styles.videosContainer}>
            {uniqueCategories.map((category) => (
               <SimpleSlider category={category} />
            ))}
         </section>
      </div>
   );
}
