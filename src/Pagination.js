import React, { useState, useEffect } from 'react';

const Pagination = ({ apiUrl, itemsPerPage }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/todos`);
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  const totalPages=data.length/25;
  console.log(totalPages)
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div >
      <ul className="userList">
      {currentPageData.map((item) =>
        <li key={item.id} className="userItem">
          {item.title}
        </li>
      )}
    </ul>
      {/* Pagination buttons */}
      <div className='pagination'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
