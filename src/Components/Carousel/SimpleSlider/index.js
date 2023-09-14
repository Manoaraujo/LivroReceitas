import styles from "./SimpleSlider.module.css";
import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import data from "../../../Json/mock.json";
import MovieCard from "../VideoCard/Index";
import Category from "../../Category";

export default function SimpleSlider({ category }) {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
   };

   const movieCategory = data.filter((movie) => movie.category === category);

   if (category === "Bolos") {
      return (
         <div className={styles.container}>
            <Slider {...settings}>
               {movieCategory.map((movie) => (
                  <MovieCard movie={movie} />
               ))}
            </Slider>
         </div>
      );
   } else if (category) {
      return (
         <div className={styles.container}>
            <Category>{category}</Category>
            <Slider {...settings}>
               {movieCategory.map((movie) => (
                  <MovieCard movie={movie} />
               ))}
            </Slider>
         </div>
      );
   }
}
