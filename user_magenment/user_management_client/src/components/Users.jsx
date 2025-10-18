import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    console.log(users)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('http://localhost:5000/users');
                if (!res.ok) throw new Error('failed to fetch');
                const data = await res.json();
                setUsers(data);
            }
            catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [])
    const handleUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUsers = { name, email };
        // console.log(name,email);
        // send data to database 
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUsers)
        })
        .then(res=>res.json())
        .then(data=>setUsers(prev=>[...prev,data]));



        e.target.reset();
    }
    const handleDelete =(id)=>{
        console.log('clicked',id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.message);
            setUsers(prev=>prev.filter(user=>user.id!==id));
        })
        .catch(err=>console.log(err));
    }
    return (
        <div>

            <div>
                <form onSubmit={handleUser}>
                    <input type="text" name="name" id="" placeholder='Enter your name' />
                    <br /><br />
                    <input type="email" name="email" id="" placeholder='Enter your email' />
                    <br /><br />
                    <input type="submit" value="Add user" />
                </form>
            </div>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} <button onClick={()=>handleDelete(user.id)}>x</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;