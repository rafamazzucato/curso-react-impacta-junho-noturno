import moment from 'moment';
import { TYPE_SET_DATA, 
    TYPE_SET_NOME, 
    TYPE_SET_EMAIL, 
    TYPE_SET_ASSUNTO,
    TYPE_LIMPAR_FORM
} from '../actions/contato';

const INITIAL_STATE = {
    data : moment().format('yyyy-MM-DD'),
    nome : '',
    email : '',
    curso : null,
    assunto : ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TYPE_SET_DATA : return {...state, data : action.value}
        case TYPE_SET_NOME : return {...state, nome : action.value}
        case TYPE_SET_EMAIL : return {...state, email : action.value}
        case TYPE_SET_ASSUNTO : return {...state, assunto : action.value}
        case TYPE_LIMPAR_FORM : return INITIAL_STATE
        default: return state;
    }
}