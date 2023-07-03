import React, { useState,useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import DeleteModal from "../modal"
import Pagination from 'ui-component/pagination/pagination';

const data = [
  { id: 1, name: 'John Doe', age: 1 },
  { id: 2, name: 'Jane Smith', age: 2 },
  { id: 3, name: 'Ali', age: 3 },
  { id: 4, name: 'Ahmed', age: 4 },
  { id: 5, name: 'Rock', age: 5 },
  { id: 6, name: 'Start', age: 6 },
  { id: 7, name: 'Junior', age: 7 },
  { id: 8, name: 'Smith', age: 8 },
  { id: 9, name: 'Doe', age: 9 },
  // Add more data as needed
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },

  // Add more columns as needed
];

const DataTable = ({searchValue}) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let filteredData;

  filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchValue?.toLowerCase())
  );

  useEffect(() => {
    filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  }, [searchValue])
  

  const handleClickChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleClickChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleDelete = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ cursor: 'pointer' }}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell sx={{
                cursor: 'pointer',
                textAlign: 'center' // Center align the text
              }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  {/* Add more columns as needed */}
                  <TableCell sx={{
                    textAlign: 'center' // Center align the text
                  }}>
                    <Button variant="contained" color="primary">
                      Button 1
                    </Button>
                    <Button variant="contained" color="secondary" onClick={openModal}>
                      Button 2
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination page={page} count={filteredData?.length} rowsPerPage={rowsPerPage} handleChangePage={handleClickChangePage} handleChangeRowsPerPage={handleClickChangeRowsPerPage} />
      <DeleteModal
        open={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        title="Delete Item"
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};

export default DataTable;
