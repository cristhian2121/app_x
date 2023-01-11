import React, { useEffect, useState } from 'react';
import DataTable from '../components/TableMUI';

const StudentsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3100/students")
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            setData(data);
          });

        }, []);

  return (
    <>
        <div className='listado-estudiantes'>
        <h2>Estudiantes</h2>
        <DataTable data={data} />
        </div>
    </>
  )
}

export default StudentsList