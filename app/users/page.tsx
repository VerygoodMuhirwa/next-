"use client"
import React from 'react'
interface User{
    id: number,
    name:string,
}
const UsersPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"})
    const users: User[] = await res.json();

  return (
    <div>
      <p>
        {" "}
        <p>{new Date().toLocaleString()}</p>
      </p>
      <ul>
        {users.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage