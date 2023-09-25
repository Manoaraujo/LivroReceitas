import { Button } from "@mui/joy";
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
         <Link to={"/novoVideo"}>
            <Button color="danger" variant="outlined" className={styles.button}>
               Novo vídeo
            </Button>
         </Link>
      </section>
   );
}
export default Header;
