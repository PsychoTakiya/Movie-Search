import React from "react";
import {
  Paper,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
} from "@mui/material";

function Display({ item }) {
  const { title, poster_path, overview } = item;
  console.log(title, "TRIAL!!!");
  return (
    <Box>
      <Card sx={{ width: 300, margin:1, backgroundColor:'#e8e8e8'}}>
        <CardMedia title={title} image={poster_path} sx={{ height: 300, objectFit: "fill" }} component="img" />
        <CardContent sx={{height:'200px'}}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Display;
