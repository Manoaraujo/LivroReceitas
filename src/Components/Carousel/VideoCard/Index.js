import { Box, Card, Typography } from "@mui/material";
import styles from "./VideoCard.module.css";

export default function MovieCard({ movie }) {
   return (
      <>
         <Card className={styles.videoCard}>
            <Box>
               <iframe
                  className={styles.player}
                  src={movie.url}
                  title={movie.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               />
            </Box>
         </Card>
         <Typography className={styles.title}>{movie.title}</Typography>
      </>
   );
}
