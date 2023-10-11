import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const MovieListContext = createContext();

export const baseUrl = `https://my-json-server.typicode.com/Manoaraujo/LivroReceitas-api/videos`;
// export const baseUrl = `http://localhost:3000/videos`;

export const MovieList = ({ children }) => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      axios
         .get(baseUrl)
         .then((response) => {
            setMovies(response.data);
         })
         .catch((error) => {
            console.error("Não foi possível encontrar os vídeos:", error);
         });
   }, []);

   const AddVideo = (newVideo) => {
      setMovies([...movies, newVideo]);

      axios
         .post(baseUrl, newVideo)
         .then((response) => {
            console.log("Video added successfully:", movies, response.data);
         })
         .catch((error) => {
            console.error("Failed to add video:", error);
         });
   };

   const EditVideo = (id, editedVideo) => {
      setMovies([...movies, editedVideo]);
      axios
         .put(`${baseUrl}/${id}`, editedVideo)
         .then((response) => {
            console.log("Video edited successfully:", response.data);
         })
         .catch((error) => {
            console.error("Failed to edit video:", error);
         });
   };

   const DeleteVideo = (id) => {
      axios
         .delete(`${baseUrl}/${id}`)
         .then((response) => {
            console.log("Video deleted successfully:", response.data);

            setMovies((prevMovies) =>
               prevMovies.filter((movie) => movie.id !== id)
            );
         })
         .catch((error) => {
            console.error("Failed to delete video:", error);
         });
   };

   return (
      <MovieListContext.Provider
         key={uuidv4()}
         value={{ movies, AddVideo, DeleteVideo, EditVideo }}
      >
         {children}
      </MovieListContext.Provider>
   );
};
