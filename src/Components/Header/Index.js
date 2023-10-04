import VideoFormWindow from "../VideoFormWindow";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
   return (
      <section className={styles.container}>
         <Link to={"/"}>
            <img
               className={styles.LogoFooter}
               src="/img/LogoMain.png"
               alt="logo receitas"
            />
         </Link>
         <VideoFormWindow>Novo Video</VideoFormWindow>
      </section>
   );
}
export default Header;
