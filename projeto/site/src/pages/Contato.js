import React from 'react';
import { Cabecalho } from '../components/Cabecalho';

export class ContatoPage extends React.Component {
    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="entre em contato conosco"/>
            </div>
        )
    }
}