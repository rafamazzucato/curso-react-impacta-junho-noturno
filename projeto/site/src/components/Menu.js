import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = props => {
    const{cursos, email} = props;

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
            {
                email ? 
                    <div>Olá {email}</div>
                : null
            }
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cursos">Cursos{cursos && cursos.length > 0 ? `(${cursos.length})` : ''}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul> 
            </div>
            
            
        </nav>
    )
};

const mapStoreToProps = store => ({
    cursos: store.cursos.lista,
    email: store.contato.email
});

const conectado = connect(mapStoreToProps, null)(Menu);
export { conectado as Menu};