import React from 'react'
import styles from './styles.css'

const ASIA = 'https://static.thenounproject.com/png/194338-200.png';
const AFRICA = 'https://static.thenounproject.com/png/1072282-200.png';
const SOUTH = 'https://static.thenounproject.com/png/512266-200.png';
const NORTH = 'https://static.thenounproject.com/png/301975-200.png';
const EUROPE = 'https://static.thenounproject.com/png/224029-200.png';
const OCEANIA = 'https://static.thenounproject.com/png/301972-200.png'
const ANTARTICA = 'https://static.thenounproject.com/png/22640-200.png'
export default function CountryCard({ id, name, capital, native, emoji, phone, languages, continent, sort }) {
    let returnLenguages = languages?.map(e => e.name).join(", ")
    let groupByContinent = sort === "continent";
    let image = '';
    switch (continent) {
        case "Africa":
            image = AFRICA;
            break;
        case "Asia":
            image = ASIA;
            break;
        case "Europe":
            image = EUROPE;
            break;
        case "North America":
            image = NORTH;
            break;
        case "South America":
            image = SOUTH;
            break;
        case "Oceania":
            image = OCEANIA;
            break;
        case "Antarctica":
            image = ANTARTICA;
            break;
    }

    return (
        <div>


            <div className='card'>
                {
                    groupByContinent ?
                        <div>
                            <img className='icon' src={image} alt="" />
                            <h1>{continent}</h1>
                        </div>
                        :
                        <div>
                            <img className='icon' src='https://media.istockphoto.com/vectors/talk-icon-color-black-and-white-outline-isolated-vector-sign-symbol-vector-id1326217696?b=1&k=20&m=1326217696&s=170667a&w=0&h=KT1U4ZoGVq_1Bd_qnnnHa_jydAakdisPiB_9Yk8FcZY=' alt="" />
                            <h1>{returnLenguages}</h1>
                        </div>
                }
                <h2 className='name'>{`${native !== name ? native : name} ${emoji}`}</h2>
                {native !== name && <h3>({name})</h3>}
                <div className='info'>
                    <p>{capital ? 'Capital: ' + capital : "No Capital"}</p>
                    <p>Code: {phone}</p>
                    {groupByContinent
                        ?
                        languages.length > 0 ?
                            <p>{`${languages?.length > 1 ? 'Languages' : 'Language'}: ${returnLenguages}`}</p>
                            : <p>No Language</p>
                        :
                        <p>Continent: {continent}</p>

                    }
                </div>

            </div>
        </div>
    )
}
