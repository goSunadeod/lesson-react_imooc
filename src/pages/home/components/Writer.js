import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, WriterItem,} from '../style';

class Writer extends PureComponent {

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
                        <div className="follow">关注</div>
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
