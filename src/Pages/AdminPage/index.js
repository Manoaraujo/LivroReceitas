import { DataGrid } from "@mui/x-data-grid";
import styles from "./AdminPage.module.css";
import { MovieListContext } from "../../Contexts/MovieList";
import { useContext } from "react";

export default function AdminPage() {
   const { movies } = useContext(MovieListContext);

   const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "title", headerName: "VIDEO", width: 130 },
      { field: "Category", headerName: "CATEGORIA", width: 130 },
   ];

   return (
      <div className={styles.container}>
         <section className={styles.table}>
            <DataGrid
               rows={movies.map((video) => ({
                  id: video.id,
                  Category: video.category,
                  title: video.title,
               }))}
               columns={columns}
               initialState={{
                  pagination: {
                     paginationModel: { page: 0, pageSize: 5 },
                  },
               }}
               pageSizeOptions={[5, 10]}
               checkboxSelection
            />
         </section>
      </div>
   );
}
