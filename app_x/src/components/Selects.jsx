import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({role, setRole}) {

  // const handleChange = (event) => {
  //   setRole(event.target.value);
  // };

  return (
    <Box sx={{ mb: 3, minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo de usuario</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Tipo de usuario"
          //onChange={handleChange}
        >
          <MenuItem value='estudiante'>Estudiante</MenuItem>
          <MenuItem value='modista'>Modista</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}