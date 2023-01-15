import './App.css';
import UserList from './Components/UserList';
import Loading from './Components/Loading';
import { useState, useEffect } from 'react';
import axios from "axios";
 
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => { 
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
      setUsers(result.data);
    });
  }, []);
  return (
    <div>
      {users ? (
        <UserList users={users} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default App;
