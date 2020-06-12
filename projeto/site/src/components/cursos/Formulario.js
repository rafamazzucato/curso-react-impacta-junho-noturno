import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    setCodigo,
    setDescricao,
    setCargaHoraria,
    setCategoria,
    setPreco,
    limpar,
    salvar
} from '../../actions/cursos';

class CursoFormulario extends React.Component {

    render() {
        const {
            _id,
            codigo,
            descricao,
            cargaHoraria,
            preco,
            categoria,

            setCodigo,
            setDescricao,
            setCargaHoraria,
            setPreco,
            setCategoria,

            salvar,
            limpar } = this.props;

            console.log(this.props);
        return (
            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-3 col-form-label">
                            Código:
                 </label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control"
                                id="codigo"
                                value={codigo}
                                onChange={setCodigo}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-3 col-form-label">
                            Descrição:
                 </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="descricao"
                                value={descricao}
                                onChange={setDescricao} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-3 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="cargaHoraria"
                                value={cargaHoraria}
                                onChange={setCargaHoraria}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-3 col-form-label">
                            Preço:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="preco"
                                value={preco}
                                onChange={setPreco} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-3 col-form-label">Categoria:</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="categoria"
                                value={categoria}
                                onChange={setCategoria} >
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button
                            className="btn btn-primary ml-3 mb-3"
                            onClick={e => salvar(e, _id, codigo, descricao, cargaHoraria, preco, categoria)}>
                            { _id ? 'Atualizar' : 'Adicionar'}
                        </button>
                        <button
                            className="btn btn-secondary ml-3 mb-3"
                            onClick={limpar}>
                            { _id ? 'Cancelar' : 'Limpar'}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    _id : store.cursos._id,
    codigo : store.cursos.codigo,
    descricao : store.cursos.descricao,
    cargaHoraria : store.cursos.cargaHoraria,
    preco : store.cursos.preco,
    categoria : store.cursos.categoria,
});

const mapActionsToProps = dispatch => bindActionCreators({
    setCodigo,
    setDescricao,
    setCargaHoraria,
    setCategoria,
    setPreco,
    limpar,
    salvar
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(CursoFormulario);

export { conectado as CursoFormulario}