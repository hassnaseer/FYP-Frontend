import React from 'react'

import Tabs from "ui-component/tabs"

const Setting=()=> {
    const [value, setValue] = React.useState('Profile');
    const data =[
        {id:1, value: "Profile", label:"Profile"},
        {id:2, value: "Billing", label:"Billing"},
        {id:3, value: "Security", label:"Security"}
      ]
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Tabs data={data} handleChange={handleChange} value={value}/>
  )
}

export default Setting;