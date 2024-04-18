import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


export default function FullWidthTextField(props) {
  return (
    <Box
      sx={{
        mt: props.noMragin? 0:1,
        width: '100%',
        '& .MuiOutlinedInput-root': { 
          height: props.height, 
        },
      }}
    >
      <TextField
       onChange={props.handleChange}
       value={props.value}
       name={props.name}
        fullWidth
        variant="outlined"
        placeholder={props.placeholder}
        id="fullWidth"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={props.icon} alt="" />
            </InputAdornment>
          ),
          style: {
            fontSize: '14px',
            fontFamily:'poppins'
          },
        }}
      />
    </Box>
  );
}
