import { IconButton, InputBase, Paper } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';


const InputStudentSearch = ({handleSearch}) => {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleClearClick = () => {
        setQuery('');
    };

    useEffect(() =>{
      const time = setTimeout(() => {
        handleSearch(query)
      }, 500)
      // document.addEventListener("resize", () => {console.log("***5")})

      // return () => { document.removeEventListener("resize", ()=>{console.log("***6")}) }
      return () => clearTimeout(time)
    }, [query])

  return (
    <Paper
        sx={{ p: "2px 4px", mb: 1, display: "flex", alignItems: "center", width: '100%', borderRadius: '10px' }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />

      <IconButton sx={{ p: '10px' }} onClick={handleClearClick} aria-label="clear">
        <ClearIcon />
      </IconButton>

    </Paper>
  );
}

export default InputStudentSearch