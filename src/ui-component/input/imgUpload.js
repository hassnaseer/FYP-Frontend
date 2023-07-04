import React, { useState, useRef } from 'react';

const ImageUploadComponent = ({previewSource, setPreviewSource}) => {
  const [hideInput, setHideInput] = useState(false);
  const fileInputRef = useRef(null);
  const refImg = useRef(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setHideInput(true);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleClick}
        ref={refImg}
        tabIndex="0"
      >
        <img
          src={previewSource || 'dummy-image.jpg'}
          alt="Preview"
          style={{ maxWidth: '300px', maxHeight: '300px', cursor: 'pointer' }}
        />
      </button>
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
