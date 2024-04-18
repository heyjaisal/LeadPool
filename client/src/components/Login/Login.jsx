import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import LoginImage from './LoginImage'
import Register from "./Register";
import CompanyCreation from "../Home/CompanyCreation";
import CompanyDetail from "../Home/CompanyDetail";
import CompanyList from "../Home/CompanyList";


function Login(props) {
  const Item1 = styled(Paper)(() => ({
    backgroundColor: "rgba(247, 249, 252, 1)",

    display: "flex",
    justifyContent: "center",
    height: "100%", 
  }));
  const Item2 = styled(Paper)(() => ({
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    height: "100%",

  }));

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={0} style={{ height: "100vh" }}>
        <Grid sm={12} xs={12} md={4} item>
         <LoginImage/>
        </Grid>
        <Grid sm={12} xs={12}  md={8} item >
        {props.login? <Item2>
            <LoginForm/>
          </Item2>:props.forgotPassword?
          <Item1><ForgotPassword /></Item1>
          :props.register?
          <Item2><Register /></Item2>:props.companyCreation?
          <Item2><CompanyCreation /></Item2>:props.companyDetail?
          <Item2><CompanyDetail /></Item2>:props.companyList?
          <Item2><CompanyList /></Item2>:''
          }
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
