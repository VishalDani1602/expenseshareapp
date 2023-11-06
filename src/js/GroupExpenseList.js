import React, { useState, useEffect } from 'react';
import axios from '../axios';
import NavigationMenu from './NavigationMenu';
import {useParams, useNavigate} from 'react-router-dom';
import '../css/GroupList.css';

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

  return (
    
    <div>
      <NavigationMenu />
      <div  className="group-list">
      <ul>
        {expenses.map((expense) => (
          <li key={expense.expenseId} className="group-item">
            {expense.description}
            <div className="button-container">
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default GroupExpenseList;
