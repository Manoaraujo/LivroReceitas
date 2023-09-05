import { Button } from "@mui/joy";
import styles from "./Header.module.css";

function Header() {
   return (
      <section className={styles.container}>
         <img
            className={styles.LogoFooter}
            src="/img/LogoMain.png"
            alt="logo receitas"
         />
         <Button color="danger" variant="outlined" className={styles.button}>
            Novo vídeo
         </Button>
      </section>
   );
}
export default Header;
