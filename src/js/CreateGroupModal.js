import React, { useState } from 'react';
import axios from '../axios';
import '../css/CreateGroupModal.css'; 

function CreateGroupModal({ isOpen, onClose, onGroupCreated }) {
  const [groupName, setGroupName] = useState('');

  const handleCreateGroup = () => {

    console.log(groupName.length);
    if(groupName.length === 0){
      window.alert('Group name should not be empty.');
    }else{
    
    axios
      .post('/groups/create', { "name": groupName , "creatorId" : localStorage.getItem('token')}) 
      .then((response) => {
        onClose();
      })
      .catch((error) => {
        console.error('Error creating group:', error);
      });
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Create New Group</h2>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)
          }
        />
        <button onClick={handleCreateGroup}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CreateGroupModal;
