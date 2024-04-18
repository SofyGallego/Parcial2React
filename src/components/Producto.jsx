import { cleanup } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import Characters from "./Characters";


const Producto = () =>{

    const [characters, setCharacters] = useState([]);

    const initialUrl ="https://rickandmortyapi.com/api/character";

    const fetchCharacters = (url) =>{
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error))
    };

    useEffect(() =>{
        fetchCharacters(initialUrl);
    }, [])

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-uppercase" href="/">Rick & Morty</a>
                </div>
            </nav>
    
            <div className="container mt-5">
                <Characters characters={characters} />
            </div>
        </>
    )
    
}

export default Producto;