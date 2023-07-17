import React, { useState } from 'react';
import Table from "ui-component/Tables/table"
import SearchComponent from 'ui-component/input/search';
import Modal from "ui-component/modal/Modal"
import {
    Button,
    Typography,
    Container,
    Box,
} from '@mui/material';

const Amenities = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        setPage(0);
    };
    return (
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                    <Typography variant="subtitle1">Amenities</Typography>
                </Box>
                <Box>
                    <SearchComponent searchValue={searchValue} handleSearchChange={handleSearchChange} />
                    <Button variant="contained" color="primary" size="medium" onClick={openModal}>
                        Add Amenities
                    </Button>
                </Box>
            </Box>
            <Table searchValue={searchValue} />
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                title="Add Amenities"
                message="Add Amenities"
            />
        </Container>
    )
}
export default Amenities;
