import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { CursoLista } from '../components/cursos/Lista';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class HomePage extends React.Component {

    state = {
        lista: []
    }

    componentDidMount(){
        this.getLista();
    }

    async getLista(){
        try{
            const result = await axios.get(URL);
            this.setState({lista: result.data})
        }catch(e){
            console.log(e);
        }
    }

    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Seja Bem Vindo" subtitulo="ABC Cursos a melhor plataforma de cursos para seu estudo"/>
                <CursoLista lista = {this.state.lista} isAdmin={false} />
            </div>
        )
    }
}