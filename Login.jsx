import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let [email, setemail] = useState('')
  let [pass, setpass] = useState('')
  function Submitbtn() {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(user.uid);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={e => setemail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={e => setpass(e.target.value)}
              value={pass}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            onClick={() => Submitbtn()}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?  <Link className="text-blue-500" to='/signup'>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
