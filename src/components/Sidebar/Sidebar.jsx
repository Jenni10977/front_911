import React from "react";
import './Sidebar.css';
import './../assets/bootstrap-icons/font/bootstrap-icons.css'

const Sidebar = () => {
        return (
            <>
                <div className="sidebar-content">
                    <div className="sidebar-container">
                        <div className="nav-option options">
                            <i className="bi bi-house"></i>
                            <p>Home</p>
                        </div>
                        <div className="nav-option options">
                            <i className="bi bi-people"></i>
                            <p>People</p>
                        </div>
                        <div className="nav-option options">
                            <i className="bi bi-briefcase"></i>
                            <p>Jobs</p>
                        </div>
                        <div className="nav-option options">
                            <i className="bi bi-chat"></i>
                            <p>Messages</p>
                        </div>
                        <div className="nav-option options">
                            <i className="bi bi-bell"></i>
                            <p>Notifications</p>
                        </div>
                        <div className="nav-option options">
                            <i className="bi bi-gear"></i>
                            <p>Settings</p>
                        </div>
                        <div className="nav-option options">
                            <i className="bi bi-question-circle"></i>
                            <p>Help</p>
                        </div>
                        <div className="nav-option options">
                            <i className="bi bi-box-arrow-left"></i>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                
            </>
        );
}

export default Sidebar