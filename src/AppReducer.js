let obj = {total:0,isLogin:'N', isProfile:{}, Logout :'N'}
export function AppReducer(state=obj,action) {
  if(action.type === 'setLogin'){
    return{...state, isLogin:action.value}
  }else if(action.type === 'LogoutUser'){
    return{...state, Logout:action.value}
  }
  else {
    return state;
  }
}


