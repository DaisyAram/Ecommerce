import React from 'react';
import './Components.css'; 

const Notification = ({ message, onClose }) => {
    return (
        <div className="notification-overlay">
            <div className="notification">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Notification;