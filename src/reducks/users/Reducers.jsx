// Reducersの役割
// Actionsからデータを受け取りStoreのstateをどう変更するのか決める
// Store内のstateの管理人

// まずinitialStateを作る

// Reducersの書き方
// 1. Actionsファイル内のモジュール全てをimport(Actionsという名前をつける)
// 2. initialStateをimport

import * as Actions from './Actions';
import initialState from '../store/initialState';

// こちらのコードの解説は写真で
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
