import React, {useCallback, useEffect, useState} from 'react';
import ReactHookRedux from 'react-hooks-redux';
import { Map } from 'immutable';

const { Provider, store } = ReactHookRedux({
    isDev: true, // 打印日志
    initialState: Map({ products: ['iPhone'] }),
});

function actionAddProduct(product) {
    return {
        type: 'add the product',
        reducer(state) {
            return state.update('products', p => {
                p.push(product);
                return [...p];
            });
        },
    };
}
let num = 0;
function Button() {
    function handleAdd() {
        num += 1;
        store.dispatch(actionAddProduct('iPhone' + num)); //dispatch
    }
    return <button onClick={handleAdd}>add-product</button>;
}

function Page() {
    const state = store.useContext();
    // 从immutable获取对象，如果products未改变，会从堆中获取而不是重新生成新的数组
    const products = state.get('products');

    return useCallback(
      <div>
          <Button />
          {products.map((v, index) => (
            <div key={index}>{v}</div>
          ))}
      </div>,
      [products], // 如果products未发生改变，不会进行进行重渲染
    );
}

export default function App() {
    return (
      <Provider>
          <Page />
      </Provider>
    );
}
