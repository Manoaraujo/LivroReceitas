import styles from "./Player.module.css";

function Player() {
   return (
      <iframe
         className={styles.player}
         src="https://www.youtube.com/embed/JwUR8_OoHNI?si=PqGVx4uMAzZp4ZXP"
         title="YouTube video player"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen
      ></iframe>
   );
}

export default Player;
