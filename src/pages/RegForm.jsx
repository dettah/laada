import React from 'react'
import Logo from '../Components/Logo'

const RegForm = () => {
    return (
        <div>


            <form className='flex flex-col items-center'>
                <div className='my-16'>
                    <Logo/>
                </div>
                <div className="mb-4 w-[40%] text-left ">
                    <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
                </div>
                <div className="mb-6 w-[40%] text-left">
                    <label htmlFor="password" className="block text-gray-700 text-lg font-semibold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
                </div>
             
                    <button type="submit" className="w-[40%] bg-[#E01A4F] text-white py-2 px-4 rounded-md focus:outline-none ">Login</button>
                    <p className='text-sm mt-2 '>By logging in, you agree to the <span> Privacy Policy</span> and <span> Terms of services </span> of La’ada</p>
               
            </form>
        </div>
    )
}

export default RegForm