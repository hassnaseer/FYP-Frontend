import React from 'react'
import {
    TablePagination,
    Pagination,
  } from '@mui/material';

const PaginationTable = ({count,rowsPerPage, page, handleChangePage, handleChangeRowsPerPage})=> {
  return (
    <TablePagination
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    sx={{
      '& .MuiTablePagination-displayedRows': {
        display: 'none'
      },
      '& .MuiTablePagination-toolbar': {
        marginRight: '90%'
      },
      '& .MuiTablePagination-selectLabel': {
        color: 'black',
        fontSize: '14px'
      }
    }}
    count={count}
    rowsPerPage={rowsPerPage}
    page={page}
    ActionsComponent={() => (
      <div>
        <Pagination
          size="medium"
          sx={{
            minWidth: '100%',
            width: '100%',
            '& .MuiPaginationItem-root': {
              color: '#562C82',
              fontSize: '14px',
              fontWeight: 500
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              color: 'white !important',
              fontWeight: 500,
              fontSize: '12px',
              backgroundColor: '#562C82',
              '&:hover': {
                backgroundColor: '#562C82'
              }
            },
            '& .MuiPagination-ul': {
              flexWrap: 'unset',
              background: '#FAFAFF',
              border: '1px solid #FAFAFF',
              borderRadius: '8px',
              paddingTop: '4px',
              paddingBottom: '4px'
            }
          }}
          shape="rounded"
          count={10}
          page={page}
          onChange={(_, newPage) => handleChangePage(newPage)}
        />
      </div>
    )}
    onRowsPerPageChange={handleChangeRowsPerPage}
    style={{ float: 'left' }}
    
  />
  )
}
export default PaginationTable;
