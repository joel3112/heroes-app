import React from 'react';

const Pagination = ({ current, total }) => {
  if (total === 1) {
    return null;
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${current === 1 ? 'disabled' : ''}`}>
          <a className="page-link" href={`?page=${current - 1}`}>
            Previous
          </a>
        </li>

        <li className="page-item">
          <a className="page-link" href={`?page=${current}`}>
            {current}
          </a>
        </li>

        <li className="page-item" key="separator">
          <span className="page-link separator">de</span>
        </li>

        <li className="page-item">
          <a className="page-link" href={`?page=${total}`}>
            {total}
          </a>
        </li>

        <li className={`page-item ${current === total ? 'disabled' : ''}`}>
          <a className="page-link" href={`?page=${current + 1}`}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
