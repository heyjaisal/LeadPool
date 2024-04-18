import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../App.css';
function Btn(props) {
  return (
    <div>
         <Stack direction="row" spacing={2}>
         <Button
          variant="contained"
          className='btn'
          type={props.submit ? 'submit' : 'button'} 
          startIcon={props.imageSrc && <img src={props.imageSrc} style={{width:'1rem'}}/>}
          sx={{
            backgroundColor: props.color,
            color: props.blacktext ? 'black' : '#fff',
            width: '100%',
            height: '2.5rem',
            fontFamily: 'Poppins', // Font family
            fontSize: '.8rem', // Font size
            fontWeight: 600, // Font weight
            lineHeight: '24px', // Line height
            letterSpacing: '0.5px', // Letter spacing
            textAlign: 'center', // Text alignment
            '&:hover': {
              backgroundColor: props.hcolor, // Change to the desired hover color
            },
          }}
        >
          {props.title}
        </Button>
      </Stack>
    </div>
  )
}
export default Btn