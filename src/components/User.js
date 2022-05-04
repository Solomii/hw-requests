import React from 'react'

const User = ({id, name, email}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <span>
        <button>edit</button>
        <button>delete</button>
      </span>
    </div>
  )
}

export default User;