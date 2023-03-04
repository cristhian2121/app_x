import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import InputStudentSearch from './InputStudentSearch';
import PropTypes from 'prop-types'; 

export default function DataTable({ data }) {

    const [students, setStudents] = React.useState([]);
    const navigate = useNavigate();
    const location = useLocation()
    //console.log(data)
    //arr.slice(0,5)
    let searchedStudents = [];
    console.log('Render del componente')
    console.log(data);


    React.useEffect(() => {
      console.log('Effect cuando se modifica data');
      setStudents(data)
    }, [data])
    
    const handleSearch = (query) => {
      if( !query.length >= 1){
          console.log('query es vacio');
          console.log(data);
          console.log(students);
          //setStudents( (prevState) => prevState )
        setStudents(data);
      } else {
        console.log('query trae algo');
          searchedStudents = data.filter(el => {
          const studentText = el.firstName.toLowerCase();
          const searchText = query.toLowerCase();
          return studentText.includes(searchText);
        });
        setStudents(searchedStudents);
      }
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

      //const rows = data;
      //console.log(students)


  return (
    <Box sx={{ width: '80%'}}>
      <InputStudentSearch handleSearch={handleSearch} />
      <DataGrid
        getRowId={(row) => row._id}
        rows={students}
        columns={columns}
        pageSize={100}
        autoHeight={true}
        autoPageSize
        disableSelectionOnClick
      />
    </Box>
  );
}

DataTable.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array
}