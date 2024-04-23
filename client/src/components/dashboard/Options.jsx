import { Box, Typography } from '@mui/material';
import React from 'react';

function Options(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center',cursor:'pointer' }}>
      <Box sx={{color:'rgba(183, 182, 189, 1)', marginRight: 2 }}>
        {props.img}
      </Box>
      <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', textAlign: 'center' }}>
        {props.title}
      </Typography>
    </div>
  );
}

export default Options;
