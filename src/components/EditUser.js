import React from 'react';
import { useNavigate } from "react-router-dom";

const EditUser = ({id}) => {
  const navigate = useNavigate();
   const handleUpdate = () => {
    navigate('/');    
  }
  return (
    <div>
        <form>
        <p>Edit user</p>
        <input placeholder='name...' name="name"/>
        <input placeholder='email...' name="email" />
        <button onClick={() => handleUpdate(id)}>Update</button>
      </form>
    </div>
  )
}

export default EditUser;