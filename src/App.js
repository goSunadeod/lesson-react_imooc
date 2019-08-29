import React, {Component} from 'react';
import {GlobalStyled} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { asyncComponent } from './asyncComponent'
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
// import Writer from './pages/write';
import store from './store';

const Writer = asyncComponent(() => import("./pages/write"))

class App extends Component {
    render() {
        return (
        <div>
            <GlobalStyled />
            <GlobalIcon />
            <Provider store={store}>
                <BrowserRouter>
                    <>
                        <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/write' component={Writer}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                    </>
                </BrowserRouter>
            </Provider>
        </div>
        )
    }
}

export default App;
