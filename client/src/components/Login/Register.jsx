import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PasswordInput from "../formItems/PasswordInput";
import FullWidthTextField from "../formItems/TextField";
import LoginIcon from "../../assets/images/loginIcon.png";
import Btn from "../formItems/Btn";
import '../App.css'
import { useNavigate } from "react-router-dom";
import { register } from "../../helper/pocketBase";
import CustomizedDialogs from "./SendLink";
function Register() {
    const [formValues, setFormValues] = useState({
        emailVisibility: false,
        name: "",
        email: "",
        username: "",
        password: "",
        passwordConfirm: ""
      });
      const [errors, setErrors] = useState({});
      const [dialogue,setDialogue]=useState(false)
  const navigate = useNavigate();
  const [sendLink,setSendLink]=useState(false)
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: name === "emailVisibility" ? checked : value
    }));
    // Clear errors when input changes
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (typeof value === 'string' && !value.trim()) {
  
        validationErrors[key] = `Please enter your ${key} `
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSendLink(true)

     await register(formValues).then(()=>{
        setDialogue(true)
        navigate("/")
     }
     ).catch((err)=>{
        console.log(err);
     })

  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div>
    <CustomizedDialogs open={sendLink} onClose={() => setSendLink(false)} icon='src\assets\images\emailsend.png' text='Verify your email address to complete your registration' />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src={LoginIcon}
            alt="Login Icon"
            style={{ width: "3rem", height: "3rem" }}
          />
          <Typography variant="h5">
            <span className="wback">Create </span>
            <span className="back">Account</span>
          </Typography>
          <span className=" txtp" style={{ width: "70%" }}>
            Enter necessary information to create a user account in Leadpool{" "}
          </span>
        </Box>
        <form onSubmit={handleSubmit}>
        <Box sx={{ mt:1}}>
            <label
              className="labels"
              style={{ width: "100%", textAlign: "left" }}
            >
              Name
            </label>
            <FullWidthTextField
            handleChange={handleChange} name='name'  value={formValues.name}
              noMragin
              height="2.1rem"
              placeholder="Name"
              icon="src\assets\images\user.png"
            />
             {errors.name && (
              <Typography
                variant="caption"
                color="error"
                style={{ width: "100%", textAlign: "left"}} // Set a consistent width for the error message
              >
                {errors.name}
              </Typography> )}
          </Box>
          <Box sx={{ mt:errors.name? 0 :1 }}>
            <label
              className="labels"
              style={{ width: "100%", textAlign: "left" }}
            >
              Email
            </label>
            <FullWidthTextField
            handleChange={handleChange} name='email'  value={formValues.email}
              noMragin
              height="2.1rem"
              placeholder="Email"
              icon="src\assets\images\email.png"
            /> {errors.email && (
                <Typography
                  variant="caption"
                  color="error"
                  style={{ width: "100%", textAlign: "left"}} // Set a consistent width for the error message
                >
                  {errors.email}
                </Typography> )}
          </Box>
          <Box sx={{ mt:errors.email?0: 1 }}>
  <label
    className="labels"
    style={{ width: "100%", textAlign: "left" }}
  >
    Username
  </label>
<FullWidthTextField
  handleChange={handleChange} name='username'  value={formValues.username}
  noMragin
  height="2.1rem"
  placeholder="Username"
  icon="src\assets\images\user.png"

/>
  {errors.username && (
    <Box >
      <Typography
        variant="caption"
        color="error"
        style={{ width: "100%", textAlign: "left" }}
      >
        {errors.username}
      </Typography>
    </Box>
  )}
  <FormControlLabel
    onChange={handleChange}
    value={formValues.emailVisibility}
    type='Checkbox'
    name='emailVisibility'
    control={<Checkbox sx={{ color: "rgba(183, 182, 189, 1)" }} />}
    label={
      <span
        className="labels"
        style={{
          color: "rgba(183, 182, 189, 1)",
          fontFamily: "poppins",
        
        }}
      >
        Same as email
      </span>
    }
    labelPlacement="end"
  />
</Box>

          <Box >
            <label
              className="labels"
              style={{ width: "100%", textAlign: "left" }}
            >
              Password
            </label>
            <PasswordInput
            value={formValues.password}
            name='password'
            handleChange={handleChange}
              noMargin
              id="outlined-adornment-password"
              label="Password"
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <label
              className="labels"
              style={{ width: "100%", textAlign: "left" }}
            >
              Confirm Password
            </label>
            <PasswordInput
              value={formValues.passwordConfirm}
              name='passwordConfirm'
              handleChange={handleChange}
              noMargin
              id="outlined-adornment-password"
              label=" Confirm Password"
            />
          </Box>

          <Box sx={{ mt: 1 }}>
            <Btn submit title="Create Account" color="rgba(0, 145, 255, 1)" />
          </Box>
        </form>
        <div>
          <Box sx={{ mt: 1 }}>
            <span
              className="labels"
              style={{ color: "rgba(183, 182, 189, 1)", fontFamily: "poppins" }}
            >
              Remembered your password?{" "}
            </span>
            <span
              className="labels link"
              style={{ color: "rgba(0, 145, 255, 1)", fontFamily: "poppins" }}
              onClick={handleLogin}
            >
              Login
            </span>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Register;
