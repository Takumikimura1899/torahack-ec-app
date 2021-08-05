// まずはStore関係のmoduleをインポート
// createStoreはreduxからインポートするものと自分で作る関数の名前がかぶるのでasで別名にしておく
// Reducerもインポートしておく

import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

// import { ProductsReducer } from '../products/Reducers';
import { UsersReducer } from '../users/Reducers';

// CreateStore関数の定義
// reduxのCreateStoreメソッドをreturn
// combineReducersでstateを生成

// combineReducers()とは？
// 分割したReducersをまとめる
// stateのカテゴリ毎
// オブジェクトをreturnする(stateのデータ構造)

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      //   products: ProductsReducer,
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
