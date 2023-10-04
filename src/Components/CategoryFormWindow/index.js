import { useContext } from "react";
import { useState } from "react";
import { CategoriesContext } from "../../Contexts/Categories/Index";
import { Button } from "@mui/joy";
import { Box, Modal, Typography } from "@mui/material";
import NewCategoryForm from "../NewCategoryForm/Index";

import styles from "./CategoryFormWindow.module.css";

export default function CategoryFormWindow({ children }) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };

   const { categories, addNewCategory } = useContext(CategoriesContext);

   function AddCategory(formData) {
      const newAddedCategory = {
         id: categories.length + 1,
         name: formData,
      };
      addNewCategory(newAddedCategory);
      alert("Categoria adicionada com sucesso!");
      handleClose();
   }

   return (
      <>
         <Button color="danger" onClick={handleOpen}>
            {children}
         </Button>
         <Modal hideBackdrop open={open} onClose={handleClose}>
            <Box className={styles.CategoryBox}>
               <Typography
                  align="center"
                  color="primary"
                  variant="h4"
                  component="h2"
               >
                  {children}
               </Typography>
               <NewCategoryForm onFormSubmit={AddCategory} />
            </Box>
         </Modal>
      </>
   );
}
