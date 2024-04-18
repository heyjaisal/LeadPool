import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function UploadImage(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    props.onClose();

    navigate("/");
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle
          sx={{
            mt: 0,
            pt: 1,
            pb: 3,
            height: "10px",
            fontFamily: "poppins",
            fontSize: "16px",
          }}
          id="customized-dialog-title"
        >
          Upload Logo
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            height: "auto",
          }}
          dividers={{ top: true, bottom: false }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1vh",
            }}
          >
            <img
              src="src\assets\images\imagedIcon.png"
              style={{ width: "70px", marginBottom: "20px" }}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="src\assets\images\openCamera.png"
              style={{ width: "70px", height: "50px" }}
              alt=""
            />
            <img
              src="src\assets\images\openGallery.png"
              style={{ width: "70px", height: "50px" }}
              alt=""
            />
            <img
              src="src\assets\images\exphoto.png"
              style={{ width: "70px" }}
              alt=""
            />
            <img
              src="src\assets\images\exphoto.png"
              style={{ width: "70px" }}
              alt=""
            />
            <img
              src="src\assets\images\exphoto.png"
              style={{ width: "70px" }}
              alt=""
            />
          </div>
          {[...Array(5)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {[...Array(5)].map((_, colIndex) => (
                <img
                  key={colIndex}
                  src="src\assets\images\exphoto.png"
                  style={{ width: "70px" }}
                  alt=""
                />
              ))}
            </div>
          ))}
        </DialogContent>
        <DialogActions
          sx={{
            mt: 0,
            mb: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            autoFocus
            variant="outlined"
            onClick={handleClose}
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              width: "calc(50% - 8px)",
            }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            variant="contained"
            onClick={handleClose}
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              width: "calc(50% - 8px)",
            }}
          >
            Upload
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
