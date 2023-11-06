import React, { useState, useEffect } from 'react';
import axios from '../axios';
import NavigationMenu from './NavigationMenu';
import {useParams, useNavigate} from 'react-router-dom';
import '../css/GroupList.css';
import UserListModal from './UserListModal';

function GroupExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [Userexpense, setUserExpenses] = useState([]);
  const [EUsers, setUsers] = useState([]);
  const {groupId} = useParams([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  const openModal = () => {
    setIsModalOpen(true);
    console.log('opened');
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log('clossed');
    console.log(isModalOpen);
    //window.location.reload();
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      navigate('/login');
    } else {
      console.log(groupId);
      axios.get('/expense/' + groupId)
        .then((response) => {
          console.log(response.data);
          setExpenses(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

        axios.get('/expense/exp', {
          params: {
            groupId: groupId,
            userId: localStorage.getItem('token')
          }
        })
          .then((response) => {
            console.log(response.data);
            setUserExpenses(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
  
      axios.get('/users/')
        .then((response) => {
          console.log(response.data);
          setUsers(response.data);
          setLoading(false); // Data has been loaded, set loading to false
        })
        .catch((error) => {
          console.error('Error fetching user list:', error);
        });
    }
  }, [groupId,navigate]);
  

  
  return (
    <div>
      <NavigationMenu />
      <br></br>
      <button className="open-modal-button" onClick={openModal}>
        Add members
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="group-list">
          <ul>
            {expenses.map((expense) => (
              <li key={expense.expenseId} className="group-item">
                {expense.description}
                <div className="button-container">{expense.amount}</div>
              </li>
            ))}
          </ul>
          {Userexpense}
        </div>
      )}
      {EUsers !== null ? (
        <UserListModal isOpen={isModalOpen} onClose={closeModal} EUsers={EUsers} />
      ) : null}
    </div>
  );
}

export default GroupExpenseList;
