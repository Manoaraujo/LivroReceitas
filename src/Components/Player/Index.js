import styles from "./Player.module.css";

function Player({ movie }) {
   return (
      <iframe
         className={styles.player}
         src={movie.url}
         title={movie.title}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
      ></iframe>
   );
}

export default Player;
