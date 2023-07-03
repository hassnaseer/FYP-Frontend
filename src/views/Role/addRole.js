import React,{useState} from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import SearchComponent from 'ui-component/input/search';
import {
    FormControl,
    FormGroup,
    FormLabel,
    TextField,
    Button,
    Grid,
    Typography,
    Container,
    Box,
} from '@mui/material';
import * as Yup from 'yup';

const CreateRoleForm = () => {
  const [searchValue, setSearchValue] = useState('');
    const initialValues = {
        name: '',
        role: [],
        staff: [],
        hotel: [],
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
    });

    const handleSubmit = (values) => {
        console.log(values);
    };
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        setPage(0);
      };
    // const Hotel = [
    //     { value: 'delete', label: 'Delete' },
    //     { value: 'create', label: 'Create' },
    //     { value: 'update', label: 'Update' },
    //     { value: 'view', label: 'View' },
    // ];
    const Staff = [
        { value: 'delete', label: 'Delete', id: 1 },
        { value: 'create', label: 'Create', id: 3 },
        { value: 'update', label: 'Update', id: 3 },
        { value: 'view', label: 'View', id: 4 },
    ];
    const Role = [
        { value: 'delete', label: 'Delete' },
        { value: 'create', label: 'Create' },
        { value: 'update', label: 'Update' },
        { value: 'view', label: 'View' },
    ];

    return (
        <Container>
             <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box>
          <Typography variant="subtitle1">Roles</Typography>
        </Box>
        <Box>
          <SearchComponent searchValue={searchValue} handleSearchChange={handleSearchChange} />
          <Button variant="contained" color="primary" size="medium">
            Add Role
          </Button>
        </Box>
      </Box>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({setFieldValue }) => (
                <Form>
                    <FormControl component="fieldset">
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Grid>
                                    <Typography variant="h4">Name of the Role</Typography>
                                </Grid>
                                <TextField type="text" label="Name" color="secondary" id="name" name="name" onChange={(event) => setFieldValue("name", event.target.value)}/>
                                <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                            </Grid>
                            <Grid sx={{ mt: '24px' }}>
                                <Typography variant="h3">Select Permissions</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mt: '24px' }}>
                                <Typography variant="h4">Role</Typography>
                            </Grid>
                            <FormGroup>
                                <Grid
                                    container
                                    sx={{ margin: '15px 46px 24px 46px', display: 'flex', flexDirection: 'row', columnGap: '110px', flexWrap: 'wrap' }}>
                                    {Role.map((data, index) => (
                                        <Grid item key={index}>
                                            <FormLabel>
                                                <Field type="checkbox" name="role" value={data.value} />
                                                {data.label}
                                            </FormLabel>
                                        </Grid>
                                    ))}
                                </Grid>
                            </FormGroup>
                            <Grid item xs={12} md={12} sx={{ mt: '24px' }}>
                                <Typography variant="h4">Staff</Typography>
                            </Grid>
                            <FormGroup>
                                <Grid
                                    container
                                    sx={{ margin: '15px 46px 24px 46px', display: 'flex', flexDirection: 'row', columnGap: '110px', flexWrap: 'wrap' }}>
                                    {Staff.map((data, index) => (
                                        <Grid item key={index}>
                                            <FormLabel>
                                                <Field type="checkbox" name="staff" value={data.value} />
                                                {data.label}
                                            </FormLabel>
                                        </Grid>
                                    ))}
                                </Grid>
                            </FormGroup>
                            <Grid container
                                direction="row" justifyContent="flex-end">
                                <Button sx={{
                                    border: 'none',
                                    borderRadius: '8px',
                                    width: '145px',
                                    background: 'linear-gradient(180deg, #7B3EA2 0%, #5D2686 100%)'
                                }}
                                    type="submit" variant="contained">
                                    Create Role
                                </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </Form>
                )}
            </Formik>
        </Container>
    );
};

export default CreateRoleForm;
