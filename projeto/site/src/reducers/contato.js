import moment from 'moment';
import { TYPE_SET_DATA, 
    TYPE_SET_NOME, 
    TYPE_SET_EMAIL, 
    TYPE_SET_ASSUNTO,
    TYPE_LIMPAR_FORM,
    TYPE_SET_MSG_SUCCESS,
    TYPE_SET_MSG_ERRO
} from '../actions/contato';

const INITIAL_STATE = {
    data : moment().format('yyyy-MM-DD'),
    nome : '',
    email : '',
    curso : null,
    assunto : '',
    msgSucesso : '',
    msgErro : ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TYPE_SET_DATA : return {...state, data : action.value}
        case TYPE_SET_NOME : return {...state, nome : action.value}
        case TYPE_SET_EMAIL : return {...state, email : action.value}
        case TYPE_SET_ASSUNTO : return {...state, assunto : action.value}
        case TYPE_SET_MSG_SUCCESS : return {...state, msgSucesso : action.value, msgErro: ''}
        case TYPE_SET_MSG_ERRO : return {...state, msgErro : action.value, msgSucesso: ''}
        case TYPE_LIMPAR_FORM : return INITIAL_STATE
        default: return state;
    }
}