import { Box, Card, CardMedia, Typography } from "@mui/material";

export default function MovieCard({ movie }) {
   return (
      <Card sx={{ maxWidth: 250, position: "relative" }}>
         <Box sx={{ position: "relative" }}>
            <CardMedia
               component="img"
               height="350"
               image={movie.image}
               alt={movie.title}
            />
         </Box>

         <Card>
            <Typography variant="h6" gutterBottom component="div">
               {movie.title}
            </Typography>

            <Typography mb={0} variant="subtitle1" gutterBottom component="div">
               {movie.releaseDate}
            </Typography>
         </Card>
      </Card>
   );
}
