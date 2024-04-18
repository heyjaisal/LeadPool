import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CompanyCard from "./CompanyCard";

function CompanyList() {
    const btn = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "24px",
        letterSpacing: "0.5px",
        textAlign: "center",
      };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Box sx={{ width: "50%" }} alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5">
            <span className="wback">Choose </span>
            <span className="back">Your Company</span>
          </Typography>
          <span className="txt" style={{ width: "80%", textAlign: "center" }}>
            Enter the required details to create a company profile in Leadpool
          </span>

          <CompanyCard
            title="Lilac infotech"
            note="Administrator"
            img="src\assets\images\lilac.png"
          />

          <CompanyCard
            title="Software Campus"
            note="Billing Agent"
            img="src\assets\images\scampus.png"
          />
           <CompanyCard
            title="Google "
            note="Manager"
            img="src\assets\images\googlecomp.png"
          />
           <CompanyCard
            title="Apple"
            note="Administrator"
            img="src\assets\images\applecomp.png"
          />
         <Button sx={{mt:4,width:'100%',backgroundColor:'rgba(0, 145, 255, 1)',...btn}} variant="contained">Proceed</Button>
        </Box>
       
      </Box>
    </Box>
  );
}

export default CompanyList;
