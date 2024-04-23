import { TextField } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import React from 'react';

function YourComponent() {
  return (
    <div>
      <TextField
        id="outlined-search"
        placeholder="Search Customer name, Email or Phone"
        type="search"
        sx={{
          '& .MuiOutlinedInput-root': {
            width: '35vw',
            backgroundColor: 'white',
            borderRadius: '10px',
            height: '8vh',
          },
        }}
        InputProps={{
          startAdornment: (
            <>
              <CiSearch />
              <span style={{ marginRight: '8px' }} />
            </>
          ),
        }}
      />
    </div>
  );
}

export default YourComponent;
