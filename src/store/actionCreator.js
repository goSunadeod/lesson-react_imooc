import {INIT_DATA, CHANGE_VALUE, ADD_TODO_ITEM} from './actionType';
import axios from 'axios';

export const changeValue = (value) => (
  {
      type: CHANGE_VALUE,
      value
  }
)

export const addItem = () => (
  {
      type: ADD_TODO_ITEM
  }
)

export const initData = (data) => (
  {
      type: INIT_DATA,
      data
  }
)

export const getTodo = () => {
    return (dispatch) => {
        axios.get('/api/todo').then(res => {
            const data = res.data;
            const action = initData(data);
            dispatch(action)
        })
    }
}