import React from 'react';

export const CursoLista = props => {
    const { excluir, selecionar, lista, isAdmin } = props;
    const exibirLinhas = () => {
        const cursos = lista || [];
        return cursos.map(curso => {
            return (
                <tr key={curso._id}>
                    <td>{curso.codigo}</td>
                    <td>{curso.descricao}</td>

                    {isAdmin ?
                        <td >
                            <button className="btn btn-success mr-1"
                                onClick={() => selecionar(curso)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="ml-1 btn btn-danger"
                                onClick={() => excluir(curso._id)}>
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