import React from 'react'

const User = ({ id, name, email, onDelete }) => {
  
  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <span>
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
      </span>
    </div>
  )
}

export default User;