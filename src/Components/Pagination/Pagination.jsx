/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-plusplus */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  onNextClick,
  onPreviousClick,
}) {
  const path = window.location.pathname;
  const pageNumbers = [];
  console.log('url', window.location);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li className="page-item">
        <Link
          className="page-link"
          onClick={onPreviousClick}
          to={path}
          aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </Link>
      </li>
      {pageNumbers.map((number) => (
        <>
          <li className="page-item">
            <Link
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              className="page-link"
              to={path}
              onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        </>
      ))}
      <li className="page-item">
        <Link
          className="page-link"
          onClick={onNextClick}
          to={path}
          aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </Link>
      </li>
    </ul>
  );
}
