import styles from "./BannerBackground.module.css";
import BannerMain from "../BannerMain/Index";

function BannerBackground() {
   return (
      <div className={styles.banner}>
         <BannerMain />
      </div>
   );
}

export default BannerBackground;
