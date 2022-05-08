import React from 'react';
import { useNavigate } from "react-router-dom";

const User = ({ id, name, email, onDelete,onEdit }) => {
  const navigate = useNavigate ();
  
  const handleDelete = async () => {
    await onDelete(id);
  }

  const handleEdit = (id) => {
    console.log(id, name, email);
    onEdit(id,name,email)
    navigate(`/EditUser/${id}`);
  }

  return (
    <div>
      <span>{name}</span>
      <span>{email}</span>
      <span>
        <button onClick={() => handleEdit(id)}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </span>
    </div>
  )
}

export default User;