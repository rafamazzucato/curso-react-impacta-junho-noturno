import axios from 'axios';

const URL = 'http://localhost:3200/api/contatos'
const PREFIX = 'CONTATO_SET_';

export const TYPE_SET_DATA = PREFIX+'DATA';
export const TYPE_SET_NOME = PREFIX+'NOME';
export const TYPE_SET_EMAIL = PREFIX+'EMAIL';
export const TYPE_SET_ASSUNTO = PREFIX+'ASSUNTO';
export const TYPE_SET_MSG_SUCCESS = PREFIX+'MSG_SUCESSO';
export const TYPE_SET_MSG_ERRO = PREFIX+'MSG_ERRO';
export const TYPE_LIMPAR_FORM = 'CONTATO_FORM_LIMPAR';

export const setData = e => ({
    type: TYPE_SET_DATA,
    value : e.target.value
});

export const setNome = e => ({
    type: TYPE_SET_NOME,
    value : e.target.value
});

export const setEmail = e => ({
    type: TYPE_SET_EMAIL,
    value : e.target.value
});

export const setAssunto = e => ({
    type: TYPE_SET_ASSUNTO,
    value : e.target.value
});

export const limparFormContato = _ => ({
    type: TYPE_LIMPAR_FORM
});

const showSuccessMsg = msg => ({
    type: TYPE_SET_MSG_SUCCESS,
    value: msg
});

const showErroMsg = msg => ({
    type: TYPE_SET_MSG_ERRO,
    value: msg
})

export const adicionarContato = (data, nome, email, assunto, curso) => {
    return async dispatch => {
        try {
            if (!data || !nome || !email || !assunto) {
                return dispatch(showErroMsg('Favor preencher todos os campos'));
            }
    
            await axios.post(URL, { data, nome, email, assunto, curso });
            dispatch(limparFormContato());
            return dispatch(showSuccessMsg('Contato salvo com sucesso!'));
        } catch (error) {
            console.log(error);
            return dispatch(showErroMsg('Ocorreu erro ao enviar contato.'));
        }
    }
   
}