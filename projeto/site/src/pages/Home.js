import React from 'react';
import { Cabecalho } from '../components/Cabecalho';

export class HomePage extends React.Component {
    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Seja Bem Vindo" subtitulo="ABC Cursos a melhor plataforma de cursos para seu estudo"/>
            </div>
        )
    }
}