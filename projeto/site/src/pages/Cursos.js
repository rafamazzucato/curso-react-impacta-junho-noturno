import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { CursoFormulario } from '../components/cursos/Formulario';
import { CursoLista } from '../components/cursos/Lista';

export class CursoPage extends React.Component {

    initialState = {
        codigo: '1010',
        descricao: 'Descrição Teste',
        cargaHoraria: 20,
        preco: 150.75,
        categoria: 'REDES'
    }

    state = this.initialState

    render() {
        const {codigo, descricao, cargaHoraria, preco, categoria} = this.state

        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos" />
                <div className="row border-bottom">
                    <div className="col-md-6">
                        <CursoFormulario 
                        codigo={codigo} 
                        descricao={descricao}
                        cargaHoraria ={cargaHoraria}
                        preco={preco}
                        categoria={categoria}
                        />
                    </div>
                    <div className="col-md-6">
                        <CursoLista />
                    </div>
                </div>
            </div>
        );
    }
}