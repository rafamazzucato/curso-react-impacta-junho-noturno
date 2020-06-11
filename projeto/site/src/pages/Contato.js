import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { ContatoFormulario } from '../components/contato/Formulario';

export class ContatoPage extends React.Component {
    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="entre em contato conosco"/>
                <ContatoFormulario/>
            </div>
        )
    }
}