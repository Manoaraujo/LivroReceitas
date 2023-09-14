import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";

export default function SimpleSlider() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
   };
   return (
      <div className="container">
         <Slider {...settings}>
            <div>
               <img
                  className="image"
                  alt="bolo"
                  src="https://dinorma.com.br/wp-content/uploads/2021/08/Postagens-Duplo-Julho-2022-bolo-amor-de-pai-600x600.png"
               />
            </div>
            <div>
               <img
                  className="image"
                  alt="bolo"
                  src="https://dinorma.com.br/wp-content/uploads/2021/08/Postagens-Duplo-Julho-2022-bolo-amor-de-pai-600x600.png"
               />
            </div>
            <div>
               {" "}
               <img
                  className="image"
                  alt="bolo"
                  src="https://dinorma.com.br/wp-content/uploads/2021/08/Postagens-Duplo-Julho-2022-bolo-amor-de-pai-600x600.png"
               />
            </div>
            <div>
               {" "}
               <img
                  className="image"
                  alt="bolo"
                  src="https://dinorma.com.br/wp-content/uploads/2021/08/Postagens-Duplo-Julho-2022-bolo-amor-de-pai-600x600.png"
               />
            </div>
            <div>
               {" "}
               <img
                  className="image"
                  alt="bolo"
                  src="https://dinorma.com.br/wp-content/uploads/2021/08/Postagens-Duplo-Julho-2022-bolo-amor-de-pai-600x600.png"
               />
            </div>
            <div>
               {" "}
               <img
                  className="image"
                  alt="bolo"
                  src="https://dinorma.com.br/wp-content/uploads/2021/08/Postagens-Duplo-Julho-2022-bolo-amor-de-pai-600x600.png"
               />
            </div>
         </Slider>
      </div>
   );
}
