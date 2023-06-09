import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {CgProfile} from "react-icons/cg"
import {TbLogout} from "react-icons/tb"
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
              localStorage.getItem("token")? <li className="nav-item dropdown mr-5">
              <Link className="nav-link dropdown-toggle text-white mr-5"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <CgProfile size={30}/>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item ml-4" to={"/Profile"} >Profile</Link>
                <Link className="dropdown-item"  onClick={()=>{ localStorage.removeItem("token") 
              alert("Succesfully Logout")
              navigate("/")
            }} ><TbLogout size={25} color='red'/> Logout</Link>
                
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
