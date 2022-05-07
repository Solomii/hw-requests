import React from 'react';

const EditUser = () => {
  return (
    <div>
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