import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  return (
    <Box
      sx={{
        mt:0,
        width: '100%',
        '& .MuiOutlinedInput-root': {
          height: props.height,
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={props.name}
          value={props.value}
          label={props.label}
          onChange={props.handleChange}
          variant="outlined"
          sx={{
            '& .MuiSelect-select': {
              fontSize: '14px',
              fontFamily: 'poppins',
            },
          }}
          displayEmpty // Allows displaying an empty value as a placeholder
          renderValue={(selected) => selected || props.defaultText} // Render the selected value or default text
        >
          {props.options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
