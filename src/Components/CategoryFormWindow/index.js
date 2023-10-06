import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories/Index";
import { Button } from "@mui/joy";
import { Box, Modal, Typography } from "@mui/material";
import NewCategoryForm from "../NewCategoryForm/Index";
import styles from "./CategoryFormWindow.module.css";
import DoneBox from "../DoneBox";
import { useEffect } from "react";
import { useState } from "react";

export default function CategoryFormWindow({ children }) {
   const { categories, addNewCategory } = useContext(CategoriesContext);
   const [open, setOpen] = useState(false);
   const [added, setAdded] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
      setAdded(false);
   };

   useEffect(() => {
      if (added) {
         const timer = setTimeout(() => {
            handleClose();
         }, 2000);

         return () => clearTimeout(timer);
      }
   }, [added]);
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
            sx={{
               color: "var(--medium-red)",
               width: "120px",
               fontWeight: 600,
               padding: 0,
               background: "none",
               ":hover": { background: "none" },
            }}
            onClick={handleOpen}
         >
            {children}
         </Button>

         <Modal hideBackdrop open={open} onClose={handleClose}>
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
                  <NewCategoryForm onFormSubmit={AddCategory} />
               </DoneBox>
            </Box>
         </Modal>
      </>
   );
}
