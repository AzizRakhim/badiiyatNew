import React, { useEffect, useState } from 'react'
import Category from './Category/Category'
import Search from './Search/Search'
import Slider from './Slider/Slider';
import obj from '../../Object';
import Pagination from './Pagination/Pagination';
import Header from '../Header/Header';

function Main() {
  let [arr, setArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    setArr(obj)
  }, []);

  let indexOfLastPage = currentPage * postsPerPage
  let indexOfFirstPage = indexOfLastPage - postsPerPage;
  let currentPosts = arr.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <Header />
      <main className='site-main'>
        <Slider />
        <Search 
          arr={currentPosts}
          setArr={setArr}
        />
        <Category
          arr={currentPosts}
          setArr={setArr}
        />
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={arr.length}
          paginate={paginate}
        />
      </main>
    </>
  )
}

export default Main
