let obj = {total:0,isLogin:true, isProfile:{}, Logout :'N'}
export function AppReducer(state=obj,action) {
  if(action.type === 'setLogin'){
    return{...state, isLogin:action.value}
  }
  else {
    return state;
  }
}


