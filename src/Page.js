import React, { useState } from 'react';
import "./App.css"

const Page = ({data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //console.log(data);
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
  <div>
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

export default Page;
