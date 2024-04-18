import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, DialogTitle } from '@mui/material';
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

const CustomDialogTitle = styled(DialogTitle)({
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '48px',
  textAlign: 'center',
});

export default function PrivacyAndPolicy(props) {
  const navigate = useNavigate();

  const handleClose = () => {
    props.onClose();
    navigate('/');
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        hideBackdrop
        onClose={props.close}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        sx={{ backgroundColor: 'rgba(0, 145, 255, 1)'}}
      >
        <CustomDialogTitle id="customized-dialog-title" sx={{mb:0}}>
          Privacy Policy
        </CustomDialogTitle>
        <DialogContent  sx={{ width: '30rem',mt:0}}>
          <img src='src\assets\images\privacy.png' style={{ width: '5rem' }} />
          <Typography gutterBottom sx={{  width: '90%' ,fontWeight:'700',textAlign: 'left'}}>
          Privacy
          </Typography>
          <Typography gutterBottom sx={{  width: '90%' ,fontSize:'10px',textAlign: 'left'}}>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with</span>
          </Typography>
          <Typography gutterBottom sx={{  width: '90%' ,fontWeight:'700',textAlign: 'left'}}>
          Policy
          </Typography>
          <Typography gutterBottom sx={{ width: '90%' ,fontSize:'10px',textAlign: 'left'}}>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with</span>
          </Typography>
          <Box sx={{ mt: 2, width: '80%' }}>
            <Button
              onClick={handleClose}
              variant="outlined"
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
              Back
            </Button>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
