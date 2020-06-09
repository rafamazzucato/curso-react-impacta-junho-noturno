import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/umd/popper.min';

import { Menu } from './components/Menu';
import { Rotas } from './components/Rotas';

export const App = props => (
    <div>
        <Menu/>
        <Rotas/>
    </div>
);