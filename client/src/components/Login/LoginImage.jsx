import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


function LoginImage() {
  const Item1 = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(247, 249, 252, 1)",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%", // Set height to 100% of the parent container (Grid item)
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    display: "flex", // Use flexbox display
    justifyContent: "center", // Align items horizontally at the center
    alignItems: "center", // Align items vertically at the center
    height: "100%", // Set height to 100% of the parent container (Grid item)
  }));

  return (

          <Paper style={{ height: "100%" }}>
            <Item1>
              <img
                src="src\assets\images\login.png"
                alt=""
                style={{ maxWidth: "100%", height: "50%" }}
              />
            </Item1>
          </Paper>
       
  );
}

export default LoginImage;
