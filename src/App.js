import React, {Component} from 'react';
import {GlobalStyled} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
    render() {
        return (
        <div>
            <GlobalStyled />
            <GlobalIcon />
            <Provider store={store}>
              <>
                <Header />
                <BrowserRouter>
                    <>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' component={Detail}></Route>
                    </>
                </BrowserRouter>
               </>
            </Provider>
        </div>
        )
    }
}

export default App;
