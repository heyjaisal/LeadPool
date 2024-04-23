
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CompanyCard from "./CompanyCard";
import { useNavigate } from "react-router-dom";

function CompanyList() {
  const navigate=useNavigate()
  const btn = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "0.5px",
    textAlign: "center",
  };

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanySelect = (title) => {
    setSelectedCompany(title);
  };
const handleSubmit=()=>{
navigate('/dashboard')
}
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
          <span
            className="txt"
            style={{ width: "80%", textAlign: "center", marginBottom: "2vh" }}
          >
            Enter the required details to create a company profile in Leadpool
          </span>

          <CompanyCard
            title="Lilac infotech"
            note="Administrator"
            img="src\assets\images\lilac.png"
            onSelect={handleCompanySelect}
            selected={selectedCompany === "Lilac infotech"}
          />

          <CompanyCard
            title="Software Campus"
            note="Billing Agent"
            img="src\assets\images\scampus.png"
            onSelect={handleCompanySelect}
            selected={selectedCompany === "Software Campus"}
          />
          <CompanyCard
            title="Google "
            note="Manager"
            img="src\assets\images\googlecomp.png"
            onSelect={handleCompanySelect}
            selected={selectedCompany === "Google "}
          />
          <CompanyCard
            title="Apple"
            note="Administrator"
            img="src\assets\images\applecomp.png"
            onSelect={handleCompanySelect}
            selected={selectedCompany === "Apple"}
          />
          <Button
            sx={{ mt: 4, width: "100%", backgroundColor: "rgba(0, 145, 255, 1)", ...btn }}
            variant="contained" onClick={handleSubmit}
          >
            Proceed
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CompanyList;
