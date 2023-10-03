import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { createContext } from "react";
import styles from "./Modal.module.css";

export const ModalContext = createContext();

export const ModalProvider = ({ children, title }) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box className={styles.box}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
               {title}
            </Typography>

            {children}
         </Box>
      </Modal>
   );
};
