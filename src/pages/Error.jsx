import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center w-full h-screen pt-60'>
        <p className='text-4xl mb-4'>Sorry, Page Not Found</p>
        <Link to={'/'} className='font-bold underline'>Click to Go back to the home page</Link>
    </div>
  )
}

export default Error