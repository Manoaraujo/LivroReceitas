import NewCategoryForm from "../../Components/NewCategoryForm/Index";
import styles from "./NewCategory.module.css";

export default function NewCategory() {
   return (
      <section className={styles.container}>
         <h1>Nova Categoria</h1>
         <NewCategoryForm />
      </section>
   );
}
