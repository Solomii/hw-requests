import React from 'react'

const AddUser = ({onAdd}) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";

  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <p>Add user</p>
        <input placeholder='name...' name="name" />
        <input placeholder='email...' name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
      </form>

    </div>
  )
}

export default AddUser;