import React from 'react';

export const CursoLista = props => {

    const exibirLinhas = () => null;

    return (
        <div>
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>);
}