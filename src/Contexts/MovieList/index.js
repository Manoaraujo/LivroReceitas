import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const MovieListContext = createContext();

export const baseUrl = `https://my-json-server.typicode.com/Manoaraujo/LivroReceitas-api/videos`;
// export const baseUrl = `http://localhost:3000/videos`;

export const MovieList = ({ children }) => {
   const [movies, setMovies] = useState([]);
   const [open, setOpen] = useState(false);
   const [added, setAdded] = useState(false);

   const handleClose = () => {
      setOpen(false);
      setAdded(false);
   };

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
   const EditVideo = (video) => {
      axios
         .put(`${baseUrl}/${video.id}`, {
            title: video.title,
            url: video.url,
            category: video.category,
            description: video.description,
         })
         .then((response) => {
            console.log("Video edited successfully:", response.data);

            setMovies((prevMovies) => {
               const updatedMovies = prevMovies.map((movie) => {
                  if (movie.id === video.id) {
                     return { ...movie, ...video };
                  }
                  return movie;
               });
               console.log(updatedMovies);
               return updatedMovies;
            });

            handleClose();
         })
         .catch((error) => {
            console.error("Failed to edit video:", error);
         });
   };

   return (
      <MovieListContext.Provider
         key={movies.id}
         value={{ movies, AddVideo, DeleteVideo, EditVideo }}
      >
         {children}
      </MovieListContext.Provider>
   );
};
