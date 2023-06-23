import React from 'react'
import { useNavigate } from 'react-router-dom'
const LoginSuccess = () => {
    const navigate = useNavigate();
  return (
    <div className='container text-center align-items-center h-50 my-5'>
      <h1>Login was Successfull</h1>
      <button className='btn btn-primary' onClick={()=>navigate("/")}>Logout</button>
    </div>
  )
}

export default LoginSuccess;
