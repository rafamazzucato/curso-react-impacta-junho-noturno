import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export const Menu = _ => {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(URL);
            setLista(result.data);
        }
        fetchData();
    }, [setLista]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                ABC Cursos
        </Link>
            <button className="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cursos">Cursos{lista && lista.length > 0 ? `(${lista.length})` : ''}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul> </div>
        </nav>
    )
};