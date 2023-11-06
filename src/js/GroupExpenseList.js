import React, { useState, useEffect } from 'react';
import axios from '../axios';
import NavigationMenu from './NavigationMenu';
import {useParams, useNavigate} from 'react-router-dom';
import '../css/GroupList.css';
import UserListModal from './UserListModal';

function GroupExpenseList() {
  const [expenses, setExpenses] = useState([]);
  let selectedGroup = useParams([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }else{
      axios.get('/expense/'+selectedGroup.groupId)
        .then((response) => {
          console.log(response.data);
          setExpenses(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }}, [selectedGroup]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };
  return (
    
    <div>
      <NavigationMenu />
      <br></br>
      <button className="open-modal-button" onClick={openModal}>
        Add members
      </button>
      <div  className="group-list">
      <ul>
        {expenses.map((expense) => (
          <li key={expense.expenseId} className="group-item">
            {expense.description}
            <div className="button-container">
              {expense.amount}
            </div>
          </li>
        ))}
      </ul>
      </div>
      <UserListModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    
  );
}

export default GroupExpenseList;
