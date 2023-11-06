import React, { useState } from 'react';
import axios from '../axios';
import '../css/CreateGroupModal.css';
import { useParams } from 'react-router-dom';

function UserListModal({ isOpen, onClose, EUsers }) {
  const [groupName, setGroupName] = useState('');
  const { groupId } = useParams([]);

  const handleUserClick = (user) => {
    // You can call the axios method or perform any other action when a user is clicked.
    console.log('User clicked:', user);
    axios
      .post('/groups/add', {
        user: {
          userId: user.userId,
        },
        group: {
          groupId: groupId,
        },
      })
      .then((response) => {
        onClose();
      })
      .catch((error) => {
        console.error('Error adding user', error);
      });
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>User List</h2>
        <ul>
          {EUsers.map((user) => (
            <li key={user.userId} className="user-item">
              <div onClick={() => handleUserClick(user)}>{user.email}</div>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default UserListModal;
