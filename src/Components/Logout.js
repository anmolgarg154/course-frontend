import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../Action';
import { connect } from 'react-redux';

function Logout({commonData,setLogin}) {
    const nav = useNavigate()
    function doLogout(){
        setLogin('N');
        nav('/login')
    }
    useEffect(()=>{setLogin()},[])
  return (
    <div>
      
    </div>
  )
}

let connectToStore = (state)=>({commonData:state})
let dispatchToStore = (dispatch)=>({
    setLogin:(value)=>dispatch(setLogin(value))
})
export default connect (connectToStore,dispatchToStore) (Logout);
