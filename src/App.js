import React, { useEffect, useState } from "react";
import AddUser from "./components/AddUser";
import User from "./components/User";

function App() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users"
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
console.log(users)
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <AddUser onAdd={onAdd}/>
      <div>
        {
          users.map((user) => (
            <User id={user.id} key={user.id} name={user.name} email={user.email}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
