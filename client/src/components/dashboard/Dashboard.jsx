import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import { PiChartBarThin} from "react-icons/pi";
import { FiFileText } from "react-icons/fi";
import { styled } from "@mui/material/styles";
import { GoTasklist } from "react-icons/go";
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import Paper from "@mui/material/Paper";
import { FaRegHandshake } from "react-icons/fa6";
import Collapse from '@mui/material/Collapse';
import { FaRegUser } from "react-icons/fa";
import Options from "./Options";
import Img from "./Img";
import DashboardOption from "./DashboardOption";
import SearchBar from "./SearchBar";
function Dashboard(props) {
    const [isCollapse,setIsCollapse]=useState(false)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleCollapse=()=>{
    setIsCollapse(!isCollapse)
  }
  return (
    <Box
      sx={{
        backgroundColor: "rgba(240, 240, 246, 1)",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2} sx={{ mt: 2, ml: 3 }}>
            <Box
              sx={{
                height: "90vh",
                backgroundColor: "rgba(255, 255, 255, 1)",
                pt: 2,
                borderRadius: "10px",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <img
                  src="src\assets\images\leadPool.png"
                  style={{ width: "6rem" }}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  mt: 2,
                  ml: 1,
                  mb: 2,
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "rgba(183, 182, 189, 1)",
                }}
              >
                MAIN MENU
              </Box>
              <Box>
                <Typography sx={{ ml: 2, mt: 1 }}>
                  <Options img={<LiaHomeSolid />} title="Dashboard" />
                </Typography>
                <Typography sx={{ ml: 2, mt: 1 }}>
                  <Options img={<PiChartBarThin/>} title="Followup" />
                </Typography>
                <Typography sx={{ ml: 2, mt: 1 }}>
                  <Options img={<FiFileText/>} title="Proposal" />
                </Typography>
                <Typography sx={{ ml: 2, mt: 1 }}>
                  <Options img={<GoTasklist/>} title="Tasks" />
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  ml: 1,

                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(183, 182, 189, 1)",
                  cursor:'pointer',
                  display:'flex'
                }}
             
              >CREATE</Box>
              <Box
                sx={{
                  mt: 2,
                  ml: 1,

                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(183, 182, 189, 1)",
                  cursor:'pointer',
                  display:'flex'
                }}
                onClick={handleCollapse}
              >
              <Typography>+</Typography><Typography style={{marginLeft:'10px'}}>Create</Typography> <Typography sx={{ml:1}}>{isCollapse? <ExpandMore/>:<ExpandLess/>}</Typography> 
              </Box>
              <Collapse in={isCollapse} timeout='auto' unmountOnExit> <Box>
                <Typography sx={{ ml: 2}}>
                  <Options img={<FaRegUser />} title="New Customer" />
                </Typography>
                <Typography sx={{ ml: 2,mt:1}}>
                  <Options img={<Img />} title="New Lead" />
                </Typography>
                <Typography sx={{ ml: 2,mt:1}}>
                  <Options img={<FiFileText />} title="New Proposal" />
                </Typography>
                <Typography sx={{ ml: 2,mt:1}}>
                  <Options img={<FaRegHandshake />} title="New Deal" />
                </Typography>
                </Box></Collapse>
              
            </Box>
          </Grid>
          <Grid item xs={9} sx={{ mt: 2, ml: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left box */}
          <Box sx={{ height: '5vh' }}>
            <SearchBar />
          </Box>
          {/* Right box */}
          <Box sx={{ height: '5vh' ,mr:4}}>
            <Typography  sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
        src="src\assets\images\lilac.png"
        alt=""
        style={{ borderRadius: '50%', width: '3.5vw', height: '8vh' }}
      />
      <Box><Typography
      sx={{
        mt:1,
        ml:1,
   
        fontWeight: 700,
        fontFamily: 'Poppins',
        fontSize: '12px',
        textAlign: 'center',
      }}>Lilac infotech</Typography>  <Typography
      variant="body1"
      sx={{
     
        fontFamily: 'Poppins',
     
        fontSize: '10px',
        color:'rgba(183, 182, 189, 1)',
        textAlign: 'center',
      }}
    >
      Administration
    </Typography></Box>
      <Typography
      sx={{ml:1,mt:2}}
      >
        <FaChevronDown/>
      </Typography>
            </Typography>
          </Box>
        </Box>
          <Box
              sx={{
                height: "78vh",
                backgroundColor: "rgba(255, 255, 255, 1)",
                mt: 5,
                pt:2,
                borderRadius: "10px",
                justifyContent:"center",
                textAlign:'center',
              }}
            >{props.title=='dashboard'?<DashboardOption/>:'hello'}</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
