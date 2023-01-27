import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export default function DataTable({data}) {

    const navigate = useNavigate();

    const handleOnClick = (data) => {
        console.log(data.row);
        navigate(`/student/${data.row._id}`,  
        );
      }; 

    const columns = [
        { field: 'firstName', headerName: 'Nombre', width: 130 },
        { field: 'lastName', headerName: 'Apellido', width: 130 },
        { field: 'nickName', headerName: 'Correo', width: 230 },
        { field: 'gender', headerName: 'Género', width: 80 },
        { field: 'shirtSize', headerName: 'Talla', width: 80 },
        { field: 'deliveryDate', headerName: 'Fecha de entrega', width: 130 },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 90,
          renderCell: ( rowData ) => {
              return (
                  <Button onClick={ () => handleOnClick(rowData)} variant="contained">Detalle</Button>
              )
          }
      
        },
      ];

      const rows = data;

  return (
    <Box sx={{ width: '80%'}}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight={true}
        autoPageSize
        disableSelectionOnClick
      />
    </Box>
  );
}