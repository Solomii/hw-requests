import React, {useState} from 'react';

const User = ({ id, name, email, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  
  const handleDelete = async () => {
    await onDelete(id);
  }

  const handleEdit = () => {
   setIsEdit(!isEdit);
  }

 const handleOnEditSubmit = async (e) => {
    e.preventDefault();
    await onEdit(id, e.target.name.value, e.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {
        isEdit ? (
      <form onSubmit={handleOnEditSubmit}>
      <input defaultValue={name} name="name" placeholder='name...'/>
      <input defaultValue={email} name="email" placeholder='email...' />
      <button onSubmit={handleOnEditSubmit}>Update</button>
      </form>
      ) : (
       <>  
        <div className='user__box' >  
         <div className='user__span'>
           <span >{name}</span>
           <span>{email}</span>
        </div>        
       <div className='user__box__button'>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
       </div>
      </div> 
     </> 
     ) }
    </div>
  )
}

export default User;