import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories/Index";
import { Button } from "@mui/joy";
import { Box, Modal, Typography } from "@mui/material";
import NewCategoryForm from "../NewCategoryForm/Index";
import styles from "./CategoryFormWindow.module.css";
import DoneBox from "../DoneBox";
import { HandleContext } from "../../Contexts/HandleModalWindow";
import { useEffect } from "react";
import { useState } from "react";

export default function CategoryFormWindow({ children }) {
   const { added, setAdded, handleClose } = useContext(HandleContext);

   const [openCategoryForm, setOpenCategoryForm] = useState(false);

   const { categories, addNewCategory } = useContext(CategoriesContext);

   useEffect(() => {
      if (added) {
         const timer = setTimeout(() => {
            handleClose();
         }, 1000);

         return () => clearTimeout(timer);
      }
   }, [added, handleClose]);

   function AddCategory(formData) {
      if (formData !== "" && !categories.find((c) => c.name === formData)) {
         const newAddedCategory = {
            id: categories.length + 1,
            name: formData,
         };
         addNewCategory(newAddedCategory);
         setAdded(true);
      } else {
         handleClose();
      }
   }

   return (
      <>
         <Button
            size="small"
            sx={{
               color: "var(--medium-red)",
               width: "120px",
               fontWeight: 600,
               padding: 0,
               background: "none",
               ":hover": { background: "none" },
            }}
            onClick={() => setOpenCategoryForm(true)}
         >
            {children}
         </Button>

         <Modal hideBackdrop open={openCategoryForm} onClose={handleClose}>
            <Box className={styles.CategoryBox}>
               <DoneBox
                  okMessage="Categoria adicionada com sucesso!"
                  success={added}
               >
                  ;
                  <Typography
                     sx={{
                        padding: "5px",
                        color: "var(--medium-red)",
                     }}
                     align="center"
                     variant="h4"
                     component="h2"
                  >
                     {children}
                  </Typography>
                  <NewCategoryForm
                     handleClose={() => setOpenCategoryForm(false)}
                     onFormSubmit={AddCategory}
                  />
               </DoneBox>
            </Box>
         </Modal>
      </>
   );
}
