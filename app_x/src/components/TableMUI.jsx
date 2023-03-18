import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box, Table, TableContainer } from '@mui/material';
import InputStudentSearch from './InputStudentSearch';
import PropTypes from 'prop-types'; 

export default function DataTable({ data }) {

    //const [students, setStudents] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();
    
    const studentsFilter = React.useMemo(() => {
      if (search === '' ) return data;
      const res = data.filter(el => {
            const studentText = el.firstName.toLowerCase();
            const searchText = search.toLowerCase();
            return studentText.includes(searchText);
      })
      return res;
    },[search, data]);
    
    // const studentsFilter = search === '' ? data : data.filter(el => {
    //   const studentText = el.firstName.toLowerCase();
    //   const searchText = search.toLowerCase();
    //   return studentText.includes(searchText);
    // })
    
    const handleSearch = (query) => {
      setSearch(query)
    }

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

  return (
    <Box sx={{ width: '80%'}}>
      <InputStudentSearch handleSearch={handleSearch} />
        <DataGrid
          sx={{ width: '100%', height: '540px'}}
          getRowId={(row) => row._id}
          rows={studentsFilter}
          columns={columns}
          pageSize={100}
          autoPageSize
          disableSelectionOnClick
        />
    </Box>
  );
}

DataTable.propTypes = {
  data: PropTypes.array
}