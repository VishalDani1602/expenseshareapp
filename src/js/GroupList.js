import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../css/GroupList.css';
import CreateExpenseModal from './CreateExpenseModal';

function GroupList() {
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('/groups/' + token)
      .then((response) => {
        console.log(response.data);
        setGroups(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const openModal = (group) => {
    setShowModal(true);
    console.log(group.groupId);
    setSelectedGroup(group);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="group-list">
      <ul>
        {groups.map((group) => (
          <li key={group.groupId} className="group-item">
            {group.name}
            <div className="button-container">
              <button className="button-view" >View</button>
              <button className="button-add" onClick={() => openModal(group)}>Add Expense</button>
            </div>
          </li>
        ))}
      </ul>
      <CreateExpenseModal isOpen={showModal} onClose={closeModal} selectedGroup={selectedGroup}/>
    </div>
  );
}

export default GroupList;
