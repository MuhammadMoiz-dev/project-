import { Link, useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from '../Config/firebase'
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate()
  let [email, setemail] = useState('')
  let [pass, setpass] = useState('')
  function Submitbtn() {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Succesfully SignUp, Your Id is:' + user.uid);
        navigate('/login')

      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);

      });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            onClick={() => Submitbtn()}
          >
            Sign Up
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link className="text-blue-500" to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
