import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import ShownCountries from '../ShownCountries/ShownCountries';
import styles from './styles.css'

const GET_COUNTRIES = gql`{
        countries{
          code
          name
          native 
          capital
          phone,
          currency
          languages{
            name
          }
          continent{
            name
          }
          emoji,
          emojiU,
        }
}`
export default function Home() {
    const { data, loading } = useQuery(GET_COUNTRIES);
    const imgLoading = 'https://cbswire.dk/wp-content/uploads/2022/01/giphy-earth-kopi.gif';

    const [sort, setSort] = useState("continent")
    const [search, setSearch] = useState('');
    function handleSort(e) {
        const { id } = e.target;
        let language = document.getElementById('language');
        let continent = document.getElementById('continent');
        if (id === "continent") {
            setSort("continent")
            language.classList.remove('pressed')
            continent.classList.add('pressed');
        } else {
            setSort("language")
            language.classList.add('pressed')
            continent.classList.remove('pressed');
        }
    }
    function device() {
        const ua = navigator.userAgent;

        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return ("mobile");
        }
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        return ('desktop')
    }
    function handleSearch(e) {
        const { value } = e.target
        e.preventDefault();
        setSearch(value);
    }

    function openKimche() {
        window.open("https://www.kimche.co/")
    }
    return (
        <div>
            <img onClick={openKimche} className='header' src="https://www.kimche.co/wp-content/uploads/2021/12/cropped-logo-kimche-_2_.png" alt="" />

            <div className="inputs">
                <form>
                    <div className='searcher'>
                        <img className={device() === 'mobile' || device() === 'tablet' ? 'noneDisplay' : ''} src="https://cdn-icons-png.flaticon.com/512/251/251116.png" alt="" />
                        <input className='searchBar' type="search" placeholder='Type a Country...' onChange={handleSearch} />
                    </div>
                </form>
                <div className='filters'>
                    <h3>Group By</h3>
                    <button className='pressed' id="continent" onClick={handleSort}>Continent</button>
                    <button id="language" onClick={handleSort}>Language</button>
                </div>
            </div>

            {loading ? <img className='loading' src={imgLoading} alt='loading' />
                : data &&
                <div>
                    <ShownCountries countriesShown={data?.countries.filter(e => e.name.toLowerCase().slice(0, search.length) === search.toLowerCase())} sort={sort} search={search} />


                </div>

            }
        </div>
    )
}
