import React from 'react'

function Pagination({postsPerPage, totalPosts, paginate}) {
  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i);
  }

  return (
    <nav className='container mt-5 d-flex justify-content-center mb-5'>
      <ul className='pagination'>
        {pageNumber.map(number => {
          return <li className='page-item' key={number}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default Pagination
