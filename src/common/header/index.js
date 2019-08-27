import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store';

class Header extends Component {

    render() {
        const { focused, handleInputFocus, handleInputBlur, } = this.props;
        return (
          <HeaderWrapper>
              <Logo />
              <Nav>
                  <NavItem className="left active">首页</NavItem>
                  <NavItem className="left">下载APP</NavItem>
                  <NavItem className="right">登陆</NavItem>
                  <NavItem className="right">
                      <i className="iconfont">&#xe601;</i>
                  </NavItem>
                  <SearchWrapper>
                      <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                      >
                          <NavSearch
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            className={focused ? 'focused': ''}
                          ></NavSearch>
                      </CSSTransition>
                      <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe615;</i>
                  </SearchWrapper>
              </Nav>
              <Addition>
                  <Button className='writing'>
                      <i className="iconfont">&#xe600;</i>
                      写文章</Button>
                  <Button className='reg'>注册</Button>
              </Addition>
          </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
