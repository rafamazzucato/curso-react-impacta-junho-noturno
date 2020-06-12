import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import {getListaCursos, excluirCurso, selecionarCurso} from '../../actions/cursos';

const CursoLista = props => {
    const { selecionarCurso, cursos, isAdmin , getListaCursos, excluirCurso} = props;

    useEffect(()=>{
        getListaCursos()
    }, [getListaCursos]);

    const exibirLinhas = () => {
        const lista = cursos || [];
        return lista.map(curso => {
            return (
                <tr key={curso._id}>
                    <td>{curso.codigo}</td>
                    <td>{curso.descricao}</td>

                    {isAdmin ?
                        <td >
                            <button className="btn btn-success mr-1"
                                onClick={() => selecionarCurso(curso)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="ml-1 btn btn-danger"
                                onClick={() => excluirCurso(curso._id)}>
                                <i className="fa fa-trash-o"></i>
                            </button>

                        </td>
                        :
                        <>
                            <td>{curso.cargaHoraria}</td>
                            <td>{curso.preco}</td>
                            <td>{curso.categoria}</td>
                        </>
                    }
                </tr>
            )
        });
    }

    return (
        <div>
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        {isAdmin ?
                            <th></th>
                            :
                            <>
                                <th>Carga Horária</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>);
}

const mapStoreToProps = store => ({
    cursos: store.cursos.lista
});

const mapActionsToProps = dispatch => bindActionCreators({
    getListaCursos,
    excluirCurso,
    selecionarCurso
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(CursoLista);
export { conectado as CursoLista};