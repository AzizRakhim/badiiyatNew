import React, { useEffect, useState } from 'react';
import Slider from '../Main/Slider/Slider';
import "./Nasr.scss";
import obj from '../../Object';
import NasrSearch from './NasrSearch/NasrSearch';
import NasrCategory from './NasrCategory/NasrCategory';
import Pagination from '../Main/Pagination/Pagination';
import Header from '../Header/Header';

function Nasr() {
  let [arr, setArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(3);

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
      <main className='nasr-main'>
        <Slider />
        <NasrSearch 
          arr={currentPosts}
          setArr={setArr}
        />
        <div className='container'>
          <NasrCategory
            arr={currentPosts}
            setArr={setArr}
          />
        </div>
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={arr.length}
          paginate={paginate}
        />
      </main>
    </>
  )
}

export default Nasr
