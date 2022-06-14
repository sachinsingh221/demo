import "antd/dist/antd.min.css";
import React from 'react';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import Routes from './router';
import ThemeContext from './context';

const App = () => (
  <Provider store={store}>
    <ThemeContext>
        <Routes/>
    </ThemeContext>
  </Provider>
);
export default App;