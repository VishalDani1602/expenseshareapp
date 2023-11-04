import React, { useState } from 'react';
import axios from '../axios';
import '../css/CreateGroupModal.css'; 

function CreateExpenseModal({ isOpen, onClose, onExpenseCreated, selectedGroup }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleCreateExpense = () => {
    if (description.length === 0 || amount <= 0 || date.length === 0) {
      window.alert('Please fill in all fields with valid data.');
    } else {
      axios
        .post('/expense/create',
          {
          "description": description,
          "amount": amount,
          "date": date,
          "user": {
            "userId": localStorage.getItem('token')
          },
          "group": {
            "groupId": selectedGroup.groupId
          }
        }
        )
        .then((response) => {
          onClose();
        })
        .catch((error) => {
          console.error('Error creating expense:', error);
        });
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Create New Expense</h2>
        <label>Description:</label>
        <input
          type="text"
          placeholder="Expense Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Expense Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleCreateExpense}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CreateExpenseModal;