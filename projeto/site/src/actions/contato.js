const PREFIX = 'CONTATO_SET_';
export const TYPE_SET_DATA = PREFIX+'DATA';
export const TYPE_SET_NOME = PREFIX+'NOME';
export const TYPE_SET_EMAIL = PREFIX+'EMAIL';
export const TYPE_SET_ASSUNTO = PREFIX+'ASSUNTO';
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