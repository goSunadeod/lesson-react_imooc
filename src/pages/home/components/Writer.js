import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, WriterItem,} from '../style';

class Writer extends Component {

    render() {
        const {writerList} = this.props;
        return (
          <WriterWrapper>
              {
                  writerList.map((item) => (
                    <WriterItem key={item.get('id')}>
                        <img
                          className='avatar'
                          src={item.get('imgUrl')}
                          alt=''
                        />
                        <a className="follow">关注</a>
                        <p className="name">{item.get('name')}</p>
                        <p className="desc">{item.get('desc')}</p>
                    </WriterItem>
                  ))
              }
          </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList'])
    }
}

export default connect(mapStateToProps, null)(Writer);
