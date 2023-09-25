import { Box, Card, Typography } from "@mui/material";
import styles from "./VideoCard.module.css";
import Player from "../../Player/Index";

export default function MovieCard({ movie }) {
   return (
      <>
         <Card className={styles.videoCard}>
            <Box>
               <Player movie={movie} />
            </Box>
         </Card>
         <Typography className={styles.title}>{movie.title}</Typography>
      </>
   );
}
