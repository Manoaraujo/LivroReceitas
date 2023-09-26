import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const MovieListContext = createContext();

export const baseUrl = `https://my-json-server.typicode.com/Manoaraujo/LivroReceitas-api/videos`;

export const NewVideo = (formData) => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      axios
         .post(baseUrl, {
            id: movies.length++,
            title: formData.title,
            category: formData.category,
            url: formData.url,
            description: formData.description,
         })
         .then((response) => {
            setMovies(...movies, response.data);
         })
         .catch((error) => {
            console.error("Não foi possível encontrar os vídeos:", error);
         });
   }, []);
};

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

   return (
      <MovieListContext.Provider value={{ movies }}>
         {children}
      </MovieListContext.Provider>
   );
};
