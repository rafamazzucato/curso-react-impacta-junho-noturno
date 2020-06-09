import React from 'react';

export const Cabecalho = props => (
    <header className="pb-2 mt-4 mb-2 border-bottom">
        <h2><strong>{props.titulo}</strong> -
             <small className="ml-2">{props.subtitulo}</small></h2>
    </header>
);