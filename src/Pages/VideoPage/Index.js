import { Typography } from "@mui/material";
import styles from "./VideoPage.module.css";
import Player from "../../Components/Player/Index";
import { useContext } from "react";
import { MovieListContext } from "../../Contexts/MovieList";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/joy";

function VideoPage() {
   const { movies } = useContext(MovieListContext);

   const params = useParams();
   const video = movies.find((post) => post.id === Number(params.id));

   return (
      <div className={styles.container}>
         <section className={styles.videoArea}>
            <Typography className={styles.title}>{video.title}</Typography>
            <div className={styles.player}>
               <Player movie={video} />
            </div>
            <Typography className={styles.description}>
               {video.description}
            </Typography>
            <Link to="/">
               <Button color="danger">Voltar</Button>
            </Link>
         </section>
      </div>
   );
}

export default VideoPage;
