import  { useState, useEffect } from 'react';
import axios from 'axios';
import { apiDomain } from '../utils/utils';
import { AiFillDelete} from 'react-icons/ai'
import './order.css'
import { useSelector } from 'react-redux';

const Users = () => {
  const user = useSelector((state) => state.user.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiDomain}/users`,{
        headers:{Authorization: `${user.token}`}
      });
      setUsers(response.data);
      
    } catch (error) {
      console.error('Error fetching  data:', error);
    }
  };
  const handleDelete = (Title) => {
    axios.delete(`${apiDomain}/users/${Title}`)
      .then((response) => {
        if (response.data.message) {
          alert('user deleted successfully');
        }
        fetchUsers();
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };

  return (
    <div>
      <h1>Registered users</h1>
      <table className="order-table">
        <thead>
          <tr>
            
            <th>UserName</th>
            <th>Email</th>
            <th>password</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <button onClick={() => handleDelete(user.username)} style={{border: "none", width:"50px", color:"red",borderRadius:"5px", background:'transparent'}}><AiFillDelete/></button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;





