import React from 'react';
import Pagination from './Pagination.js';
const Users = () => {
const apiUrl = 'https://jsonplaceholder.typicode.com';
  return (
    <div>
      <h2>User Todos</h2>
      <Pagination apiUrl={apiUrl} itemsPerPage={10} />
    </div>
  );
};
export default Users;
