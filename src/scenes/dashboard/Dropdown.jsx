import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ updated, data, apiFunction, updater }) {

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <Select value={updated} label="User Type" onCLick={(e) => {
          console.log(e.target.value);
          apiFunction(e.target.value, updater)
        }}>
          {
            data && data.map(({ name, value }, index) =>
              <MenuItem key={index} value={value}  >{name}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}
