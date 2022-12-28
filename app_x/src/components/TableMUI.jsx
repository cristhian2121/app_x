import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function DataTable() {

    const navigate = useNavigate();

    const handleOnClick = (el) => {
        console.log("**");
        navigate(`/user/${el.id}`);
      }; 

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User name', width: 130 },
        { field: 'nickName', headerName: 'Nick name', width: 130 },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 90,
          renderCell: (data) => {
              return (
                  <Button id={data.id} onClick={handleOnClick} variant="contained">Detail</Button>
              )
          }
      
        },
      ];

      const rows = [
        { id: 1, username: 'Snow', nickName: 'Jon', age: 35 },
        { id: 2, username: 'Lannister', nickName: 'Cersei', age: 42 },
        { id: 3, username: 'Lannister', nickName: 'Jaime', age: 45 },
        { id: 4, username: 'Stark', nickName: 'Arya', age: 16 },
      
      ];

  return (
    <div style={{ height: 400, width: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}