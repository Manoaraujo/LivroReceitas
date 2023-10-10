import { Button } from "@mui/joy";
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
         <div className={styles.buttonArea}>
            <Link to={"/admin"}>
               <Button
                  // endIcon={<Dashboard />}
                  className={styles.button}
                  color="danger"
               >
                  Gerenciamento de videos
               </Button>
            </Link>
            <VideoFormWindow videoData="">Novo Video</VideoFormWindow>
         </div>
      </section>
   );
}
export default Header;
