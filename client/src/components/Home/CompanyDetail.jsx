import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyCard from "./CompanyCard";

function CompanyDetail() {
  const navigate = useNavigate();
  const caption = {
    fontFamily: "Poppins",
    fontSize: "13px",
    fontWeight: 500,
    color: "rgba(183, 182, 189, 1)",
  };

  const btn = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    textAlign: "center",
    backgroundColor:'rgba(0, 145, 255, 1)'
  };
  const values = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "left",
  };

  const backToEdit = () => {
    navigate("/createCompany");
  };
  const handleSubmit = () => {
    navigate("/companyList");
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
            <span className="wback">Create </span>
            <span className="back">Company</span>
          </Typography>
          <span className="txt" style={{ width: "80%", textAlign: "center" }}>
            Enter the required details to create a company profile in Leadpool
          </span>
            <CompanyCard title='Lilac infotech'img='src\assets\images\lilac.png' note='Soution for Revelotion'/>
          <Box
            sx={{
              pb: 2,
              pt: 2,
              width: "100%",
              boxShadow: "5px 10px #F0FFFF",
              justifyContent: "left",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ ...caption }}>
              <span>Industry</span>
            </Typography>
            <Typography sx={{ mt: 0, ...values }}>
              <span>Software Development</span>
            </Typography>
            <Typography sx={{ mt: 1, ...caption }}>
              <span>Website</span>
            </Typography>
            <Typography sx={{ ...values }}>
              <span>www.lilacinfotech.com</span>
            </Typography>
            <Typography sx={{ mt: 1, ...caption }}>
              <span>Phone Number</span>
            </Typography>
            <Typography sx={{ ...values }}>
              <span>+91 9874 987 987</span>
            </Typography>
            <Typography sx={{ mt: 1, ...caption }}>
              <span>Official Email</span>
            </Typography>
            <Typography sx={{ ...values }}>
              <span>lilacinfotech@gmail.com</span>
            </Typography>
            <Typography sx={{ mt: 1, ...caption }}>
              <span>Address</span>
            </Typography>
            <Typography sx={{ ...values, width: "60%" }}>
              <span>Cyber Park, Calicut, Palazhi, Kerala India - 656 656</span>
            </Typography>
          </Box>
         
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ width: "100%", mt: 2, ...btn }}
            >
              Create Company
            </Button>
            <Button
              onClick={backToEdit}
              variant="outlined"
              sx={{ width: "100%", mt: 2, color: "rgba(0, 145, 255, 1)" }}
            >
              Back to Edit
            </Button>
         
        </Box>
      </Box>
    </Box>
  );
}

export default CompanyDetail;
