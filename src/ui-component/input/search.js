import React from 'react'
import { IconSearch } from '@tabler/icons-react';
import {
  TextField,
  InputAdornment,
} from '@mui/material';

const Search = ({ searchValue, handleSearchChange }) => {
  return (
    <TextField
      placeholder="Search"
      value={searchValue}
      sx={{
        '& .MuiFormControl-root-MuiTextField-root': {
          background: 'rgba(123, 62, 162, 0.05) !important'
        },
        '& .MuiOutlinedInput-root': {
          width: '230px',
          '&.Mui-focused fieldset': {
            border: '1px solid',
            borderColor: '#562C82',
            background: 'rgba(123, 62, 162, 0.05)'
          }
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconSearch stroke={1.5} size="1.2rem" />
          </InputAdornment>
        )
      }}
      onChange={handleSearchChange}
      variant="outlined"
      size="small"
    />
  )
}
export default Search;
