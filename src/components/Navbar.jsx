import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"

function Navbar() {
    const { user, logOut } = UserAuth()
    const navigate =useNavigate()
    async function handleLogout() {
        try {
            await logOut()
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to="/">
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            </Link>
            {user ? (<div>
                <Link to="/account">
                    <button className='text-white pr-4 cursor-pointer'>Account</button>
                </Link>
                <button
                    className='bg-red-600 px-6 py-2 rounded cursor-pointer'
                    onClick={handleLogout}
                >Logout</button>
            </div>
            ) : (<div>
                <Link to="/login">
                    <button className='text-white pr-4 cursor-pointer'>Sign In</button>
                </Link>
                <Link to="/signup">
                    <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
                </Link>
            </div>
            )}
        </div >
    )
}

export default Navbar
