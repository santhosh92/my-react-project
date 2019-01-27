import React, {Component} from 'react';
import {render} from 'react-dom';
import AppRouters from './AppRouters';

import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

render(<Provider store={store}><AppRouters/></Provider>, document.getElementById('root'));