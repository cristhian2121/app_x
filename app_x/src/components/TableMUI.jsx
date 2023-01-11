import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function DataTable({data}) {

    const navigate = useNavigate();

    const handleOnClick = (el) => {
        console.log("**");
        //navigate(`/user/${el.id}`);
      }; 

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        { field: 'nickName', headerName: 'Nick name', width: 230 },
        { field: 'gender', headerName: 'Genero', width: 80 },
        { field: 'shirtSize', headerName: 'Talla', width: 80 },
        { field: 'deliveryDate', headerName: 'Fecha de entrega', width: 130 },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 90,
          renderCell: (data) => {
              return (
                  <Button variant="contained">Detail</Button>
              )
          }
      
        },
      ];

      const rows = data;

  return (
    <div 
    style={{  width: '65%' }}
    >
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight={true}
        autoPageSize
        disableSelectionOnClick
      />
    </div>
  );
}