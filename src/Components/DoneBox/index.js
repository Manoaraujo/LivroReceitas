import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { Box, Grow, Typography } from "@mui/material";

export default function DoneBox({ success, okMessage, children }) {
   return (
      <>
         {!success ? (
            children
         ) : (
            <Grow in={success}>
               <Box display="flex" flexDirection="column" alignItems="center">
                  <CheckCircleOutlineOutlined
                     sx={{ fontSize: 64, color: "green" }}
                  />
                  <Typography
                     sx={{ color: "var(--medium-red)" }}
                     variant="h6"
                     color="textSecondary"
                  >
                     {okMessage}
                  </Typography>
               </Box>
            </Grow>
         )}
      </>
   );
}
