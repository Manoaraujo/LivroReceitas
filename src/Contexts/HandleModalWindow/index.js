import { createContext } from "react";
import { useState } from "react";

export const HandleContext = createContext();

export function HandleProvider({ children }) {
   const [open, setOpen] = useState(false);
   const [added, setAdded] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
      setAdded(false);
   };

   return (
      <HandleContext.Provider
         value={{ open, added, setAdded, handleClose, handleOpen }}
      >
         {children}
      </HandleContext.Provider>
   );
}
