import React, { useEffect, useState } from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import Display from "./Display";

function SearchFeed() {
  const [items, setItems] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`movie?query=${searchTerm}`).then((data) => {
      setItems(data.results);
      console.log(data);
    });
  }, [searchTerm]);
  console.log(items);

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Search Results for {searchTerm} are :
      </Typography>
      <Paper elevation={3} sx={{ bgcolor: "#72727267" }}>
        <Grid container sx={{justifyContent:'center'}}>
          {items.map((item, index) => (
            <div key={index}>
              {item.overview !== "" && <Display item={item} />}
            </div>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default SearchFeed;
