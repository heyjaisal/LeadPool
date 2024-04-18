import { useState } from 'react';
import React from 'react'
import PhoneInput from 'react-phone-number-input'

const PhoneInputWithIconAndCountryDropdown = () => {
const [pherror,setPhoneNumberError]=useState()
const [phone,setPhone]=useState()
  
    return  <PhoneInput
    containerStyle={{ marginRight: 5}}
    // ref={phoneInputRef}
    placeholder="Enter phone number"
    defaultValue={phone}
    multiline={false}
    // disabled={!editable}
    layout="second"
    onChange={(newValue) => {
        setPhoneNumberError('');
        setPhone(newValue);
    }}
    withDarkTheme
    withShadow
    autoFocus
/>
  }
export default PhoneInputWithIconAndCountryDropdown;

