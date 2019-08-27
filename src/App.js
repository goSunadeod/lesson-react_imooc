import React, {Component} from 'react';
import {GlobalStyled} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

class App extends Component {
    render() {
        return (
        <div>
            <GlobalStyled />
            <GlobalIcon />
            <Provider store={store}>
                <Header />
            </Provider>
        </div>
        )
    }
}

export default App;
