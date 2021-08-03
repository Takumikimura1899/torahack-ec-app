// Actionsは要求をウケて変更依頼をReducerにかける役割
// アプリからStoreへデータを送る為のpayload(データの塊)を渡す役割
//つまりアプリから受け取ったデータをReducersへ渡す
// なぜActionsを使うのか？
// 純粋にデータだけを記述する為
// どのstateをどう変更するかはReducersに任せる

// Actionsの書き方
// 1.Action Typeを定義してexport
// 2.typeとpayloadを記述する
// 3.プレーンなobjectを返す

export const SIGN_IN = 'SIGN_IN';

export const signInAction = (userState) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGN_OUT = 'SIGN_OUT';

export const signOutAction = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      uid: '',
      username: '',
    },
  };
};
