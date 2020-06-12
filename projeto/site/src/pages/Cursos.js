import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { CursoFormulario } from '../components/cursos/Formulario';
import { CursoLista } from '../components/cursos/Lista';

export class CursoPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos" />
                <div className="row border-bottom">
                    <div className="col-md-6">
                        <CursoFormulario />
                    </div>
                    <div className="col-md-6">
                        <CursoLista 
                            isAdmin={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}