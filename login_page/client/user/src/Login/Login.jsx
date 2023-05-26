import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()
  const[email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")
  const loginHandler=(event)=>{
    event.preventDefault()
    axios.post("http://localhost:3006/login",{
                                              email:email,
                                              password:password
                                            }).then((res)=>{
                                                      alert("login successfully")
                                                      const token=res.data.token
                                                      localStorage.setItem("token",token)
                                                      navigate("/")
                                                      
                                                    })
                                                .catch((er)=>{
                                                      console.log(er)
                                                      alert("invalid email or password")
                                                    })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <div className="card mt-4">
                    <div className="card-body">
                        <form onSubmit={loginHandler}>
                            <div className='form-group'>
                                <label >email</label>
                                <input type="text" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/> <br />
                                <label >password</label>
                                <input type="password" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><br></br>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-2">
                                        <button className='btn btn-primary'>login</button>
                                    </div>
                                    
                                </div>
                              <h5 className='mt-2'>  <p className='ml-2'>new user? please <Link to={"/Signup"}>signup</Link></p></h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
