import React from 'react'
import UserView from './UserView';
import { useState } from 'react';
import { useEffect } from 'react';

const UserConteiner = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fake fetch imitacia
    setTimeout(() => {
      const fakeUsers = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ];
      setUsers(fakeUsers);
    }, 1000);
  }, []);

  return <UserView users={users} />;
}

export default UserConteiner;