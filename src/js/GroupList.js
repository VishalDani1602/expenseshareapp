import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../css/GroupList.css'

function GroupList() {
  const [groups, setGroups] = useState([]);

  const token = localStorage.getItem('token');
  useEffect(() => {
    axios.get("/groups/"+token)
      .then((response) => {
        console.log(response.data);
        setGroups(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="group-list">
      <ul>
        {groups.map((group) => (
          <li key={group.groupId} className="group-item">
            {group.name}
            <div className="button-container">
        <button className="button-view">View</button>
        <button className="button-add">Add Expense</button>
      </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupList;
