import React, { useState } from "react";
import bannerImage from '../logo2.png';

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    console.log(`Name: ${name}`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Retype Password: ${retypePassword}`);
  };

  return (
    <div className="flex justify-around items-center h-screen bg-gray-900">
<section class="flex flex-col md:flex-row h-screen items-center">

  <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="bg-gray-800 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

  
      <div className="bg-gray-800 text-white p-8 w-full max-w-md rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full bg-gray-700 rounded-md"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md bg-gray-700"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md bg-gray-700"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="retypePassword">
              Retype Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md bg-gray-700"
              type="password"
              id="retypePassword"
              name="retypePassword"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            Register
          </button>
        </form>
      </div>
  </div>

</section>
    
    </div>
  );
};

export default Register;
