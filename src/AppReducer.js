let obj = {total:0,isLogin:'N', isProfile:{}}
export function AppReducer(state=obj,action) {
  if(action.type === 'setLogin'){
    return{...state, isLogin:action.value}
  }
  else {
    return state;
  }
}


