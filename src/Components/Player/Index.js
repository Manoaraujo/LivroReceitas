import styles from "./Player.module.css";

function Player({ movie }) {
   return (
      <iframe
         className={styles.player}
         src={movie.url}
         title={movie.title}
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen
      ></iframe>
   );
}

export default Player;
