import styles from "./Footer.module.css";

function Footer() {
   return (
      <section className={styles.container}>
         <img
            className={styles.logoFooter}
            src="/img/LogoMain.png"
            alt="logo receitas"
         />
         <p className={styles.developer}>Desenvolvido por Mano Araújo</p>
      </section>
   );
}
export default Footer;
