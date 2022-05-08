import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import User from "./User";

function HomePage() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users"
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error("error", err);
      }
    )
  }

  const onAdd = async (name, email) => {
    await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email:email
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
        return
        } else {
          return res.json()
      }
      })
      .then((data) => {
      setUsers((users) => [...users, data])
      })
      .catch((err) => {
      console.error("error", err)
    })
  }

  const onEdit = async ( id,name, email) => {
    console.log(id)
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id:id,
        name:name,
        email:email
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
  })
      .catch((err) => {
      console.error("error", err)
    })
  }

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
       headers: {
        "Content-type": "application/json"
      }

    })
    .then((res) => {
      if (res.status !== 200) {
        return
      } else {
        setUsers(users.filter(user => {
           return user.id !== id;
        }))    
      }
      })
    .catch((err) => {
      console.log("error delete", err)
      })
  }
  console.log(users);
  
  return (
    <div className="App">
      <h1>Data about users</h1>
      <AddUser onAdd={onAdd} />
      <div>
        { users &&  (users.map((user) => (
            <User
              id={user.id}
              key={user.id}
              name={user.name}
              email={user.email}
              onDelete={onDelete}
              onEdit ={onEdit}
               />
          )))
        }
      </div>
    </div>
  );
}

export default HomePage;