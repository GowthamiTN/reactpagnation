import React from "react";
import { useGetUsersQuery } from "./usersApi";
import Page from "./Page";
import "./App.css"

const UserList = () => {
  const {  data: posts, error, isLoading } = useGetUsersQuery();
  /*const [currentPage, setCurrentPage] = useState(1);
  
  const pageSize = 25;
  
  const startIndex = (currentPage - 1) * pageSize;

  const endIndex = startIndex + pageSize;
  const currentPageData = posts.slice(startIndex, endIndex);
  const totalPages=posts.length/pageSize;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };*/
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h2 style={{color: "red"}}>Users List</h2>
      <Page data={posts} itemsPerPage={20} />
    </div>
  );
};

export default UserList;
