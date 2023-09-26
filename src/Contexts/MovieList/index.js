import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const MovieListContext = createContext();

export const baseUrl = `https://my-json-server.typicode.com/Manoaraujo/LivroReceitas-api/videos`;

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
   });

   return (
      <MovieListContext.Provider value={{ movies }}>
         {children}
      </MovieListContext.Provider>
   );
};
