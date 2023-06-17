import React from 'react'
import { useLazyAuthenticateEmployeeQuery } from '../../services/authApi'
import { updateUserDetails } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Login() {
    var navigate = useNavigate();
    const [user, setUser] = React.useState({
        username:'',
        password:''
    })
    var dispatch = useDispatch();
    var [authUser,x]=useLazyAuthenticateEmployeeQuery();

    function login(){
        authUser(user).then((res)=>{
            dispatch(updateUserDetails(res.data[0]));
            navigate("/")
        })
    }
  return (
    <div>
        <h1>Login</h1>
        <div>
            <input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}}/><br/>
            <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}}/><br/>
            <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Login