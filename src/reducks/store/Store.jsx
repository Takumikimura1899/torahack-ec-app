// まずはStore関係のmoduleをインポート
// createStoreはreduxからインポートするものと自分で作る関数の名前がかぶるのでasで別名にしておく
// Reducerもインポートしておく

import { createStore as reduxCreateStore, combineReducers } from 'redux';

// import { ProductsReducer } from '../products/Reducers';
import { UsersReducer } from '../users/Reducers';

// CreateStore関数の定義
// reduxのCreateStoreメソッドをreturn
// combineReducersでstateを生成

// combineReducers()とは？
// 分割したReducersをまとめる
// stateのカテゴリ毎
// オブジェクトをreturnする(stateのデータ構造)

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      //   products: ProductsReducer,
      users: UsersReducer,
    })
  );
}
