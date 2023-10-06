import styles from "./SimpleSlider.module.css";
import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import MovieCard from "../VideoCard/Index";
import Category from "../../Category";
import { useContext } from "react";
import { MovieListContext } from "../../../Contexts/MovieList";

export default function SimpleSlider({ category }) {
   const { movies } = useContext(MovieListContext);
   const movieCategory = movies.filter(
      (movie) => movie.category === category.name
   );

   if (movieCategory.length < 5) {
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: movieCategory.length,
         slidesToScroll: 1,
      };

      return (
         <div className={styles.container}>
            <Category>{category.name}</Category>
            <Slider {...settings}>
               {movieCategory.reverse().map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
               ))}
            </Slider>
         </div>
      );
   } else {
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 5,
         slidesToScroll: 1,
      };
      return (
         <div className={styles.container}>
            <Category>{category.name}</Category>
            <Slider {...settings}>
               {movieCategory.reverse().map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
               ))}
            </Slider>
         </div>
      );
   }
}
