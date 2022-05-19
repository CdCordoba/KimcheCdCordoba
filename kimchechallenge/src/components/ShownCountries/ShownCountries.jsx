import React, { useState } from 'react'
import CountryCard from '../CountryCard/CountryCard'
import Paginate from '../Paginate/Paginate';
import styles from './styles.css'

export default function ShownCountries({ countriesShown, sort, search }) {
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [CountriesPerPage] = useState(9);

    const indexLastCountry = currentPage * CountriesPerPage;
    const indexFirstCountry = indexLastCountry - CountriesPerPage;
    const currentCountries = countriesShown.slice(indexFirstCountry, indexLastCountry);

    const paginate = (pageNumber) => {
        for (let i = 1; i <= Math.ceil(countriesShown.length / CountriesPerPage); i++) {
            let page = document.getElementById(i);
            if (page) page.classList.remove("currentPage");
        }
        setCurrentPage(pageNumber)
    }
    const prevPage = () => {
        if (currentPage - 1 >= 1) paginate(currentPage - 1)
    }
    const nextPage = () => {
        if (currentPage + 1 <= countriesShown.length / CountriesPerPage) paginate(currentPage + 1);
    }
    return (
        <div>
            {
                countriesShown.length ?
                    <div className='cards'>
                        {currentCountries?.map((country, i) => {
                            return <CountryCard
                                key={i}
                                id={i}
                                name={country.name}
                                native={country.native}
                                capital={country.capital}
                                emoji={country.emoji}
                                phone={country.phone}
                                languages={country.languages}
                                continent={country.continent.name}
                                sort={sort}
                            />
                        })}
                    </div>
                    : <div className='error404'>
                        <h3>Sorry, we couldn't find a Country named "<span className='notFound'>{search}</span>"</h3>
                        <img src="https://cdn2.iconfinder.com/data/icons/documents-and-files-v-2/100/doc-03-512.png" alt="" />
                    </div>
            }
            {countriesShown.length > 9 && <Paginate CountriesPerPage={CountriesPerPage} totalCountries={countriesShown.length} currentPage={currentPage} paginate={paginate} prevPage={prevPage} nextPage={nextPage} />}

        </div>
    )
}
