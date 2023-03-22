import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (searchTerm) {
      navigate(`search/movie/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ margin:3, width: "50%", color:'white' }}
          id="outlined-basic"
          variant="outlined"
          label="Enter Movie Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
