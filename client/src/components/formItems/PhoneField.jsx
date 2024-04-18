import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import countryCodes from 'country-codes-list';

// Generate custom list of country codes
const myCountryCodesObject = countryCodes.customList('countryCode', '[{countryCode}] {countryNameEn}: +{countryCallingCode}');
const extractCallingCode = (formattedString) => {
    const parts = formattedString.split(':');
    return parts.length > 1 ? parts[1].trim() : '';
  };
  export default function PhoneField(props) {
    // const handleChange = (event) => {
    //   const { name, value } = event.target;
    //   props.handleChange({
    //     ...props.value,
    //     [name]: value,
    //   });
    // };
  
    return (
      <Box
        sx={{
          mt: props.noMragin ? 0 : 1,
          width: '100%',
          '& .MuiOutlinedInput-root': {
            height: props.height,
          },
        }}
      >
        <TextField
          onChange={(event) => {
            handleChange(event); // Pass the event to handleChange function
          }}
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
                <select
                  style={{
                    width: '4.2vw',
                    border: 'none',
                    borderRight: 'solid gray 1px',
                    outline: 'none',
                    marginLeft: '2px',
                    fontSize: '13px',
                  }}
                  onChange={(event) => {
                    {props.handleChange(event)} // Pass the event to handleChange function
                  }}
                >
                  {Object.keys(myCountryCodesObject).map((countryCode) => (
                    <option key={countryCode} value={countryCode}>
                      {extractCallingCode(myCountryCodesObject[countryCode])}
                    </option>
                  ))}
                </select>
              </InputAdornment>
            ),
            style: {
              fontSize: '14px',
              fontFamily: 'poppins',
            },
          }}
        />
      </Box>
    );
  }
  
  
