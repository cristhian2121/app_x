import { useState, useEffect } from 'react';
import { UserList } from './components/UserList';

function App() {
  
  const [data, setData] = useState([]);

useEffect(() => {

  fetch('http://localhost:3100/users')
  .then( res => res.json())
  .then( data => {
    //console.log(data);
    setData(data)
  })

}, [])


  return (
    <>

    <div className='Main-table'>
      <UserList data={data} />
    </div>
    </>
  )
}

export default App
