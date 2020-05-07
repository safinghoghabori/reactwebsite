import React from "react";

function Paginations({ totalUsers, userPerPage, handlePagination }) {
  const paginations = [];
  const pageNumber = Math.ceil(totalUsers / userPerPage);

  for (let i = 1; i <= pageNumber; i++) {
    paginations.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        <li className="active">
          {paginations.map((number) => (
            <a href="" onClick={() => handlePagination(number)}>
              {number}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Paginations;
