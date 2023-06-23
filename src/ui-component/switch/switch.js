import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function ColorSwitches({handleChange}) {
  return (
    <div>
      <Switch {...label} defaultChecked color="secondary" onChange={(event)=>handleChange(event.target.checked)}/>
    </div>
  );
}