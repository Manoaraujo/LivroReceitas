import styles from "./SimpleSlider.module.css";
import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import data from "../../../Json/mock.json";
import MovieCard from "../VideoCard/Index";
import Category from "../../Category";

export default function SimpleSlider({ category, children }) {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
   };

   if (category) {
      return (
         <div className={styles.container}>
            <Category className={styles.category}>{category}</Category>
            <Slider {...settings}>
               {data.map((movie) => (
                  <MovieCard movie={movie} />
               ))}
            </Slider>
         </div>
      );
   } else
      return (
         <div className={styles.container}>
            <Slider {...settings}>
               {data.map((movie) => (
                  <MovieCard movie={movie} />
               ))}
            </Slider>
         </div>
      );
}
