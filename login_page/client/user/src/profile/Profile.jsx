import React from 'react'
import axiosInstance from '../Axios/Axios'

const Profile = () => {
    let [username,setuserName]=React.useState(" ")
    let [useremail,setuserEmail]=React.useState(" ")
    React.useEffect(()=>{
        axiosInstance.get("http://localhost:3006/profile")
        .then((res)=>{
            setuserName(res.data.username)
            setuserEmail(res.data.email)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (
    <div>
      <div className="contaner">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-4 mt-5">
                Hello  {username}
                <ul>
                    <li>user name:  {username}</li>
                    <li>user email: {useremail}</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
