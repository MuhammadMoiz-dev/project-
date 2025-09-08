import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link ,useNavigate} from 'react-router-dom'


function Navbar({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const auth = getAuth();
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(uid);
                console.log(uid);

            } else {
                console.log('plz signup now');

            }
        });
    })
    function logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            alert('LogOut Successfull')
            navigate('/')
        }).catch((error) => {
            alert(error)
        });
    }



    return (
        <>
            <div className='h-[10vh] w-full bg-blue-600 flex items-center justify-between px-3 text-white text-2xl'>

                <Link to='/Home'>Home </Link>
                <Link to='/about'>About </Link>
                <Link to='/contact'>Contact </Link>
                {user ? (
                    <button onClick={logout} className='border-2 p-2 rounded-4xl'>LogOut </button>
                ) : (<>
                    <Link to='/login' className='border-2 p-2 rounded-4xl'>Login </Link>
                    <Link to='/signup' className='border-2 p-2 rounded-4xl'>SignUP </Link>
                </>
                )}


            </div>
            {children}
        </>
    )
}

export default Navbar
