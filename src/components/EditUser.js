import React from 'react';
import User from "./User";

const EditUser = () => {
  return (
    <div>
      <User/>
        <form>
        <p>Edit user</p>
        <input placeholder='name...' name="name"/>
        <input placeholder='email...' name="email" />
        <button>Update</button>
      </form>
    </div>
  )
}

export default EditUser;