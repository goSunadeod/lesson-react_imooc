import React, {Component} from 'react';
import {GlobalStyled} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import Header from './common/header'

class App extends Component {
    render() {
        return (
        <div>
            <GlobalStyled />
            <GlobalIcon />
            <Header />
        </div>
        )
    }
}

export default App;
