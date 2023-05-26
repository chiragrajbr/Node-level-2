import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  
 
  return (
    <div>
    <div className="container-fluid">
      <nav className='navbar navbar-expand-lg bg-info'>
        <div className=' navbar navbar-brand text-white'>USERAUTHENTICATION</div>
        <div className="ml-auto">
       
          <ul className='navbar-nav'>
    
            {
              localStorage.getItem("token")  ? <li className='nav-item'><Link to={"/Login"} className='nav-link text-white' onClick={()=>{ localStorage.removeItem("token") 
              alert("Succesfully Logout")
              navigate("/")
            }} >logout</Link>       </li> : <li className='nav-item'><Link to={"/Login"}  className='nav-link text-white' >Login</Link>  </li>
            }
                 
          </ul>
          
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbar
