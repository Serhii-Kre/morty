import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber, setPageNumber, info}) => {
    
    return (
        <ReactPaginate 
          className="pagination justify-content-center"
          nextLabel = "Next"
          previousLabel = "Prev"
          previousClassName ="btn btn-light"
          nextClassName ="btn btn-light"
          pageClassName = "page-item"
          pageLinkClassName = "page-link"
          onPageChange = {(data)=> {setPageNumber(data.selected+1) }}
          activeClassName = "active"
          pageCount={info?.pages} /> 
    )
}

export default Pagination
