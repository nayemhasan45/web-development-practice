import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [user, setUser] = useState(initialUsers);

  console.log(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        newUser._id = data.insertedId;
        const newUsers = [...user, newUser];
        setUser(newUsers);
        e.target.reset();
      });
  };
  const handleDelete = (id) => {
    console.log('clicked ', id);
    fetch(`http://localhost:3000/users/${id}`,{
      method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('deleted id',data);
      if(data.deletedCount){
        const reaminingUsers = user.filter(usr=>usr._id!==id);
        setUser(reaminingUsers);
      }
    })
  };
  return (
    <div>
      <h1>Total users: {user.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
      {user.map((usr) => (
        <p key={usr._id}>
          {usr.name} : {usr.email}{" "}
          <button onClick={() => handleDelete(usr._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
