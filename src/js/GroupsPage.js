import React , { useState } from 'react';
import GroupList from './GroupList';
import CreateGroupModal from './CreateGroupModal';
import NavigationMenu from './NavigationMenu';
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/GroupsPage.css';

function GroupsPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groups, setGroups] = useState([]);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      window.location.reload();
    };
  
    const onGroupCreated = (newGroup) => {
      setGroups([...groups, newGroup]);
    };
  return (
    <div>
      <NavigationMenu />
      
      <div className="my-component">
      <h2>Groups</h2>
      <button className="open-modal-button" onClick={openModal}>
        Create Group
      </button>
      <GroupList />
      <div>
      </div>
      <CreateGroupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    </div>
  );
}

export default GroupsPage;
