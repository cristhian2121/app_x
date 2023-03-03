import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import InputStudentSearch from './InputStudentSearch';

export default function DataTable({data}) {

    const [students, setStudents] = React.useState([]);
    //console.log(data)
    //arr.slice(0,5)
    let searchedStudents = [];
    
    const handleSearch = (query) => {

    if( !query.length >= 1){
      setStudents(data);
      //searchedStudents = data;
    } else {
        searchedStudents = data.filter(el => {
        const studentText = el.firstName.toLowerCase();
        const searchText = query.toLowerCase();
        return studentText.includes(searchText);
      });
      setStudents(searchedStudents);
    }
    }


    const navigate = useNavigate();
    const location = useLocation()


    const handleOnClick = (user) => {
        navigate(`/student/${user.row._id}`); 
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

      //const rows = data;
      //console.log(searchedStudents)

  return (
    <Box sx={{ width: '80%'}}>
      <InputStudentSearch handleSearch={handleSearch} />
      <DataGrid
        getRowId={(row) => row._id}
        rows={students}
        columns={columns}
        pageSize={10}
        autoHeight={true}
        autoPageSize
        disableSelectionOnClick
      />
    </Box>
  );
}