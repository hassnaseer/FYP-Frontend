import React, { useState } from 'react';
import SearchComponent from 'ui-component/input/search';
import Table from "ui-component/Tables/table"
import {
    Button,
    Typography,
    Container,
    Box,
} from '@mui/material';

const ListRole = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        setPage(0);
    };

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
            <Table searchValue={searchValue} />
        </Container>
    );
};

export default ListRole;
