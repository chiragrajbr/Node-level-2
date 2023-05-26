import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {CgProfile} from "react-icons/cg"
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
              localStorage.getItem("token")  ? <li ></li> : <li className='nav-item'><Link to={"/Login"}  className='nav-link text-white' >Login</Link>  </li>
            }
             {
              localStorage.getItem("token")? <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle text-white"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <CgProfile size={30}/>
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link class="dropdown-item" >Profile</Link>
                <Link class="dropdown-item"  onClick={()=>{ localStorage.removeItem("token") 
              alert("Succesfully Logout")
              navigate("/")
            }} >Logout</Link>
                
              </div>
            </li>:<li></li>
             }    
          </ul>
          
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbar
