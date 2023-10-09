import { Box, Card, Typography } from "@mui/material";
import styles from "./VideoCard.module.css";
import Player from "../../Player/Index";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
   return (
      <>
         <Card className={styles.videoCard}>
            <Box>
               <Player movie={movie} />
            </Box>
         </Card>
         <Link className={styles.url} to={`/video/${movie.id}`}>
            <Typography className={styles.title}>{movie.title}</Typography>
         </Link>
      </>
   );
}
