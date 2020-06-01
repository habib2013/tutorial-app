import React from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';



const Pagination = (props) => {
const {itemsCount,pageSize,onPageChange,currentPage} = props;
console.log(currentPage);
const pagesCount =Math.ceil( itemsCount/pageSize);
const pages = _.range(1,pagesCount + 1)

if(pagesCount === 1) return null;

   return <nav>
      <ul className="pagination">
{pages.map(page => 
         <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link"
             onClick = {() => onPageChange(page)}>{page}</a>
         </li>
   
   )}

      </ul>
   </nav>;
}
 
Pagination.propTypes =  {
   itemsCount:PropTypes.number,pageSize,onPageChange,currentPage

};
export default Pagination;