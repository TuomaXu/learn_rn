import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


//安装dva-core  react-redux  redux
import {create} from 'dva-core';
import {Provider} from 'react-redux';

import App2 from './App2';
import App3 from './App3';

import user from './user';
import counter from './counter';

const app = create();
// console.log(app);
app.model(user);
app.model(counter);
app.start(); 

const App = () => {
    return (
      <Provider store={app._store}>
        <App3/>
      </Provider>
    );
};

export default App; 



