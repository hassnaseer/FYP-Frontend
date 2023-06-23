import React from 'react';
// material-ui
import { Grid } from '@mui/material';

// project imports
import Select from "ui-component/select";
import Tabs from "ui-component/tabs"

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const [value, setValue] = React.useState('staff');

  const data =[
    {id:1, value: "Role", label:"Role"},
    {id:2, value: "staff", label:"Staff"},
    {id:3, value: "Management", label:"Management"}
  ]
  
  const handleChange = (event, newValue) => {
    // for select options
    // setValue(event.target.value);
    //for tabs
    setValue(newValue);
  };
  console.log(value,"value")

  return (
  <Grid>
    <Select data={data} handleChange={handleChange} label="Role" value={value}/>
    <Tabs data={data} handleChange={handleChange} value={value}/>
  </Grid>
  )
};

export default SamplePage;
