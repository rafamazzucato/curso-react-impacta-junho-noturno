import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { CursoPage } from '../pages/Cursos';
import { ContatoPage } from '../pages/Contato';
import { HomePage } from '../pages/Home';

export const Rotas = _ => (
    <Switch>
        <Route path="/cursos" component={CursoPage}/>
        <Route path="/contato" component={ContatoPage}/>
        <Route path="*" component={HomePage}/>
    </Switch>
);