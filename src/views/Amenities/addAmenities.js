import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Login } from 'Redux/Auth/action';

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
import Select from "ui-component/select";

import { toast } from 'react-toastify';

// ============================|| FIREBASE - LOGIN ||============================ //

const AddAmenities = ({ ...others }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const data = [
        { id: 1, value: "Role", label: "Role" },
        { id: 2, value: "staff", label: "Staff" },
        { id: 3, value: "Management", label: "Management" }
    ]

    const handleSelect = (event) => {
        // for select options
        setValue(event.target.value);
    };

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('Name is required'),
                })}
                onSubmit={async (values) => {
                    try {
                        dispatch(Login(values));
                    } catch (err) {
                        toast.error(err)
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-name-login">Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-name-login"
                                type="name"
                                value={values.name}
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="name Address / Username"
                                inputProps={{}}
                            />
                            {touched.name && errors.name && (
                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                            <Select data={data} handleChange={handleSelect} label="Role" value={value} />
                            {touched.name && !value && (
                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                    Type is Required
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                                    Add
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AddAmenities;
