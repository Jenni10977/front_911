import React from "react";
import './Profile.css'
const Profile = () =>{
    return (
      <>
      <div className="profile-container">
        <div className="card">
          <div className="img-perfil">
            <img src="" alt=""></img>/
          </div>
          <div className="content">
            <div className="Details">
              <h2>Profile</h2><br /><span>Profile of the user</span>
              <div className="data">
                <h3>Name<br/><span>user</span></h3>
                <h3>Email<br/><span>user</span></h3>
                <h3>Phone<br/><span>user</span></h3>
              </div>
              <div className="action-btn">
                <button>Settings</button>
                <button>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Profile