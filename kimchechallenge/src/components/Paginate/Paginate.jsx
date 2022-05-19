import React from 'react';
import styles from './styles.css'

const Paginate = ({ CountriesPerPage, currentPage, totalCountries, nextPage, prevPage }) => {
    let totalPages = Math.ceil(totalCountries / CountriesPerPage);
    return (
        <div>
            <h4>See More Countries</h4>
            <div className='paginate'>
                {<button className={currentPage - 1 <= 0 ? 'hidden' : ''} onClick={prevPage}>{'<<'}</button>}
                <h3>Page {currentPage}</h3>
                {<button className={currentPage + 1 > totalPages ? 'hidden' : ''} onClick={nextPage}>{'>>'}</button>}
            </div>
        </div>
    )
}

export default Paginate;