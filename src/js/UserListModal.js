import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../css/UserListModal.css';
import { useParams } from 'react-router-dom';

function UserListModal({ isOpen, onClose }) {
  const [users, setUsers] = useState([]);
  let selectedGroup = useParams([]);
  useEffect(() => {
    // Fetch the list of users when the modal is opened
    if (isOpen) {
      axios.get('/users/')
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user list:', error);
        });
    }
  }, [isOpen]);

  const handleSendRequest = (userId) => {
    axios.post('/groups/add', {
        "user": {
          "userId": userId
        },
        "group": {
          "groupId": selectedGroup.groupId
        }
      })
    .then((response) => {
      // Handle the response as needed
      console.log('POST request successful');
    })
    .catch((error) => {
      console.error('Error sending POST request:', error);
    });
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.userId}>
              <div
                className="clickable-list-item"
                onClick={() => handleSendRequest(user.userId)}
              >
                {user.email}
              </div>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default UserListModal;
