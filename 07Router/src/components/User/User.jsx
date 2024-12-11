import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <div className='text-center bg-blue-100 ' >User : {id} </div>
  )
}

export default User