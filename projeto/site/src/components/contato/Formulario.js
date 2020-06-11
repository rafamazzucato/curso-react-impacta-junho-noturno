import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import { 
    setData, 
    setNome, 
    setEmail, 
    setAssunto,
    limparFormContato
} from '../../actions/contato';

const URL = 'http://localhost:3200/api/contatos'

const ContatoFormulario = (props) => {

    const { data, nome, email, assunto, curso,
            setData, setNome, setEmail, setAssunto,
            limparFormContato   
    } = props;

    const adicionar = async(e) => {
        try{
            e.preventDefault();
            
            if(!data || !nome || !email || !assunto){
                alert('Favor preencher todos os campos');
                return;
            }

            await axios.post(URL, {data, nome, email, assunto, curso});
            alert('Contato salvo com sucesso!');
            limparFormContato();
        }catch(error){
            console.log(error);
            alert('Ocorreu erro ao enviar contato.');
        }
    }


    return (
        <div>
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="data"
                        className="col-sm-3 col-form-label">Data:</label>
                    <div className="col-sm-5 col-6">
                        <input type="date"
                            className="form-control" id="data"
                            value={data}
                            onChange={setData} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="nome"
                        className="col-sm-3 col-form-label">Nome:</label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="nome"
                            value={nome}
                            onChange={setNome} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email"
                        className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="email"
                            className="form-control" id="email"
                            value={email}
                            onChange={setEmail} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="assunto"
                        className="col-sm-3 col-form-label">Assunto:</label>
                    <div className="col-sm-9">
                        <textarea className="form-control"
                            id="assunto" rows="5"
                            value={assunto}
                            onChange={setAssunto} />
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={adicionar}>
                        Adicionar
               </button>
                </div>
            </form>
        </div>
    )
}

const mapStoreToProps = store => ({
    data : store.contato.data,
    nome : store.contato.nome,
    email : store.contato.email,
    assunto : store.contato.assunto,
    curso : store.contato.curso
});

const mapActionsToProps = dispatch => (bindActionCreators({
    setData,
    setNome,
    setEmail,
    setAssunto,
    limparFormContato
}, dispatch));

const conectado = connect(mapStoreToProps, mapActionsToProps)(ContatoFormulario);
export {conectado as ContatoFormulario}