import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';

function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{
        mt: props.noMargin?0:1,
        width: '100%',
        '& .MuiOutlinedInput-root': { // Targeting the root element of the outlined input
          height: '2.2rem', // Adjust the height here
        },
        '& .MuiOutlinedInput-input': { // Targeting the input element
          padding: '10px',
          fontSize: '14px', 
          fontFamily:'poppins'
        },
      }} variant="outlined">
      <OutlinedInput
        id={props.id}
        onChange={props.handleChange}
        value={props.value}
        name={props.name}
        type={showPassword ? 'text' : 'password'}
        
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        placeholder='Password'
        startAdornment={
          <Box  mt={1}>
            <img src="src\assets\images\password.png" alt="Password" />
          </Box>
        }
      />
    </FormControl>
  );
}

export default PasswordInput;
