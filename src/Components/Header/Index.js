import { Button } from "@mui/joy";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { useModalFormContext } from "../../Contexts/ModalFormContext";
import VideoForm from "../VideoForm/Index";
import { Dashboard } from "@mui/icons-material";

export default function Header() {
   const { isOpen, closeModal, openModal } = useModalFormContext();
   const handleClose = () => {
      closeModal();
      //   stopEditing();
   };
   return (
      <header className={styles.container}>
         <Link to={"/"}>
            <img
               className={styles.LogoFooter}
               src="/img/LogoMain.png"
               alt="logo receitas"
            />
         </Link>
         <div className={styles.buttonArea}>
            <Link to={"/admin"}>
               <Button
                  endIcon={<Dashboard />}
                  className={styles.button}
                  color="danger"
               >
                  Gerenciamento de videos
               </Button>
            </Link>
            <Button
               color="danger"
               className={styles.button}
               onClick={openModal}
            >
               + Novo video
            </Button>
         </div>
         <Modal open={isOpen} onClose={handleClose}>
            <Box className={styles.box}>
               <VideoForm handleCloseModal={handleClose} />
            </Box>
         </Modal>
      </header>
   );
}
