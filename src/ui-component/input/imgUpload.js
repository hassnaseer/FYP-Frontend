import { Box, Button, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import User1 from 'assets/images/users/user-round.svg';

const ImageUploadComponent = ({ previewSource, setPreviewSource }) => {
  const [hideInput, setHideInput] = useState(false);
  const fileInputRef = useRef(null);
  const refImg = useRef(null);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setPreviewSource(file);
    setHideInput(false);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Box sx={{ background: ' #F5F5F5', width: '100%', height: '400px', marginTop: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        <Box component="img" src={previewSource || User1} sx={{ width: '240px', height: '240px' }} />

        <Button color="primary" variant='contained' 
        onClick={handleClick}
        onKeyDown={handleClick}
        ref={refImg}
        sx={{ marginTop: '10px', height: '40px', width: '77px', textTransform: 'capitalize' }}>Browse</Button>

        <Typography sx={{ fontSize: '12px', marginTop: '20px' }}>Browse and upload a photo that is only either in PNG or jpg format</Typography>

      </Box>
      {!hideInput && (
        <input
          type="file"
          onChange={handleFileInputChange}
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
      )}
    </div>
  );
};

export default ImageUploadComponent;

