import {Link,useNavigate} from "react-router-dom"
import React from "react"
import  axios from "axios"

const Signup = () => {
    const navigate=useNavigate()
    const [state,setState]=React.useState(false)
    const [username,setUsername]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const registerHandler=(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3006/signup",{
            username:username,
            email:email,
            password:password
        })
        .then((data)=>{
            console.log(data)
            alert("registerd successfully")
            //if data send successfully use navigate
            navigate("/Login")
        })
        .catch((error)=>{
            console.log(error)
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
                        <form onSubmit={registerHandler}>
                            <div className='form-group'>
                            <label >username</label>
                                <input type="text" className='form-control' value={username} onChange={(event)=>{setUsername(event.target.value)}} required/> <br />
                                <label >email</label>
                                <input type="text" className='form-control'value={email} onChange={(event)=>{setEmail(event.target.value)}} required/> <br />
                                <label >password</label>
                                <input type="password" className='form-control'value={password} onChange={(event)=>{setPassword(event.target.value)}} required/><br></br>
                                <div className='form-group'>
                                    <input type="checkbox" onChange={(event)=>{
                                        setState(event.target.checked)
                                    }}/> please accept terms and condition
                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-2">
                                        <button className='btn btn-success' disabled={!state}>register</button>
                                    </div>
                                    
                                </div>
                              <h5 className='mt-2'>  <p className='ml-2'>existing user? please <Link to={"/Login"}>login</Link></p></h5>
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

export default Signup
