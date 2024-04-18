import * as React from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', // Center content horizontally
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function CustomizedDialogs(props) {
  const navigate = useNavigate();

  const handleClose = () => {
    props.onClose();

    navigate('/');
    

  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={props.close}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogContent dividers sx={{ width: '20rem' }}>
          <img src={props.icon} style={{ width: '5rem' }} />
          <Typography gutterBottom sx={{ mt: 2, width: '16rem' }}>
            {props.text}
          </Typography>
          <Box sx={{ mt: 2, width: '80%' }}>
            <Button
              onClick={handleClose}
              variant="contained"
              className='btn'
              type='submit'
              sx={{
                mb: 2,
                width: '100%',
                height: '2.5rem',
                fontFamily: 'Poppins',
                fontSize: '.8rem',
                fontWeight: 600,
                lineHeight: '24px',
                letterSpacing: '0.5px',
                textAlign: 'center',
              }}
            >
              Ok
            </Button>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
