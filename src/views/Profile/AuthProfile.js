import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateProfile } from 'Redux/Profile/actions';
import ImageUploadComponent from 'ui-component/input/imgUpload';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { toast } from 'react-toastify';

// ============================|| FIREBASE - LOGIN ||============================ //

const ProfileAuth = ({ ...others }) => {
  const [previewSource, setPreviewSource] = useState();

  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          address: '',
          rating: 0,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          name: Yup.string().max(255).required('Name is required'),
          phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Must be a valid phone number')
            .required('Phone number is required'),
          address: Yup.string().max(255).required('Address is required'),
        })}
        onSubmit={async (values) => {
          try {
            dispatch(UpdateProfile(values, previewSource));
          } catch (err) {
            toast.error(err);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <ImageUploadComponent previewSource={previewSource} setPreviewSource={setPreviewSource} />
            <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-name-login">Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name-login"
                type="text"
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Name"
              />
              {touched.name && errors.name && (
                <FormHelperText error id="standard-weight-helper-text-name-login">
                  {errors.name}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.phone && errors.phone)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-phone-login">Phone Number</InputLabel>
              <OutlinedInput
                id="outlined-adornment-phone-login"
                type="text"
                value={values.phone}
                name="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Phone Number"
              />
              {touched.phone && errors.phone && (
                <FormHelperText error id="standard-weight-helper-text-phone-login">
                  {errors.phone}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.address && errors.address)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-address-login">Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-address-login"
                type="text"
                value={values.address}
                name="address"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Address"
              />
              {touched.address && errors.address && (
                <FormHelperText error id="standard-weight-helper-text-address-login">
                  {errors.address}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.rating && errors.rating)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-rating-login">rating</InputLabel>
              <OutlinedInput
                id="outlined-adornment-rating-login"
                type="number"
                value={values.rating}
                name="rating"
                onBlur={handleBlur}
                onChange={handleChange}
                label="rating"
              />
              {touched.rating && errors.rating && (
                <FormHelperText error id="standard-weight-helper-text-rating-login">
                  {errors.rating}
                </FormHelperText>
              )}
            </FormControl>
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Save
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ProfileAuth;
