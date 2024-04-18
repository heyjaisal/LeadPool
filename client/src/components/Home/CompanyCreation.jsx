import { Box, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FullWidthTextField from '../formItems/TextField';
import BasicSelect from './DropDown';
import { FaMobileScreenButton } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import { fetchIndustries } from '../../helper/pocketBase';
import PhoneInputWithIconAndCountryDropdown from './PhoneInput';
import Btn from '../formItems/Btn';
import PhoneField from '../formItems/PhoneField';
import UploadImage from './UploadImage';


function CompanyCreation() {
    const [formValues,setFormValues]=useState({})
    const [uploadImage,setUploadImage]=useState(false)
    const [options,setOptions]=useState([])
    useEffect(() => {
        const fetchIn = async () => {
            try {
                const res = await fetchIndustries();
                if (res && res.length > 0) {
                    setTimeout(() => {
                    res.forEach(item => {
                            setOptions(prevOptions => [...prevOptions, item.name]);
                    });  }, 1000);
                }
            } catch (error) {
                console.error('Error fetching industries:', error);
            }
        };
        console.log(formValues,'asdfsdaf');
        fetchIn();
      }, [formValues]);
    const handleChange=(e)=>{
         const { name, value } = e.target;
    
        setFormValues((prevFormValues) => {
          return {
            ...prevFormValues,
            [name]: value,
          };
        });
   
    }
    const uploadLogo=()=>{
      setUploadImage(true)
    }
  return (
    <>
    <UploadImage open={uploadImage} onClose={() => setUploadImage(false)} icon='src\assets\images\emailsend.png' text='Verify your email address to complete your registration' />
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ width: '100%' }}>
      <Box sx={{ width: '50%' }} alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5">
            <span className="wback">Create  </span>
            <span className="back">Company</span>
          </Typography>
          <span className="txtp" style={{ width: "70%" }}>
            Enter the required details to create a company profile in Leadpool
          </span>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <img src="src\assets\images\uploadImage1.png" alt="" style={{ width: '3.5rem',cursor:'pointer' }} onClick={uploadLogo} />
          <Typography variant="body1" sx={{ marginLeft: '8px', color: 'rgba(0, 199, 127, 1)', fontFamily: 'poppins',fontSize:'14px' }}>Upload image</Typography>
        </Box>
        <Box mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <label className='labels'>Company name</label>
              <FullWidthTextField noMragin handleChange={handleChange} name='companyName'  value={formValues.name} placeholder='Company Name' height='2.1rem'icon='src\assets\images\work.png'/>
            </Grid>
            <Grid item xs={6}>
              <label className='labels'>Choose Industry</label>
              <BasicSelect noMragin name='chooseIndustry' value={formValues.industry} handleChange={handleChange} height='2.1rem' placeholder='choose Industry' options={options} defaultText='Choose Industry'/>
            </Grid>
          </Grid>
          <Box mt={1}>
          <label className='labels'>Tag line</label>
          <FullWidthTextField noMragin handleChange={handleChange} name='tagLine'  value={formValues.name} placeholder='Tag Line' height='2.1rem'/>
          </Box>
          <Box mt={1}>
          <label className='labels'>website</label>
          <FullWidthTextField noMragin handleChange={handleChange} name='website'  value={formValues.name} placeholder='Website' height='2.1rem' icon='src\assets\images\website.png'/>
          </Box>
          <Box mt={1}>
          <label className='labels'>Phone Number</label>
<Box>
<PhoneField noMragin handleChange={handleChange} name='phone'  value={formValues.phone} placeholder='phone' height='2.1rem' icon='src\assets\images\phone.png'/> 
           </Box>
    </Box>
    <Box mt={1}>
          <label className='labels'>Official Mail</label>
          <FullWidthTextField noMragin handleChange={handleChange} name='officialMail'  value={formValues.officialMail} placeholder='Enter Mail' height='2.1rem' icon='src\assets\images\email.png'/>
          </Box>
          <Box mt={1}>
          <label className='labels'>Address</label>
          <FullWidthTextField noMragin handleChange={handleChange} name='address'  value={formValues.address} placeholder='Enter Address' height='2.1rem' icon='src\assets\images\location.png'/>
          </Box>
          <Box sx={{ mt: 1 }}><Btn submit title='View & Proceed' color='rgba(0, 145, 255, 1)'/></Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}

export default CompanyCreation;
