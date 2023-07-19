// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from '../redux/apiCalls';

// const Users = () => {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.user);

//   useEffect(() => {
//     dispatch(getUser());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <div>
//         {users.map((user) => (
//           <div key={user.id}>
//             {user.name}
//             {user.email}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Users;
