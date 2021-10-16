import React, { useState } from "react";
import "./App.css";

const App=()=>{
  const [users, setUsers] = useState([]);
  const getUsers = async() => {
    const response = await fetch ("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
  };

  return (
    <div className="App">
      <div className="Nav">
        <h1>LetsGrowMore</h1>
        <div className="button1">
          <button onClick={getUsers} id="btn">Get Users</button>
        </div>  
      </div>
      <h2 id="text"><b>Click "Get Users" to fetch the details</b></h2>
    <div className="grid">
      {
      users.map(({ id, email, first_name, last_name, avatar})=>{
        return(
          <div className="card">
          <div className="image">
            <img src={avatar}></img>
          </div>
          <div className="info">
           <p>ID : {id}</p>
           <p>First Name : {first_name}</p>
           <p>Last Name : {last_name}</p>
           <p>Email : {email}</p>
          </div>
          </div>
    
        )}
      )}
   </div>
    </div>
      );    
    }

    export default App;