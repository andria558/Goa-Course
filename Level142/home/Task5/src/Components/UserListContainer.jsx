import React from 'react'

const UserListContainer = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <UserList users={users} />;
}

export default UserListContainer;