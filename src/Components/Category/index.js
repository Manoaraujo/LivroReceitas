import styles from "./Category.module.css";

function Category({ children }) {
   return <div className={styles.container}>{children}</div>;
}
export default Category;
