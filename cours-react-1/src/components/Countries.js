import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    // Le "useeffect" se joue lorsque le composent est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, [])

    return (
        <div className='countries'>
            <h1>COUNTRIES</h1>
            <ul>
                {
                    data.map((country, index) => (
                        <Card key={index} country={country} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;