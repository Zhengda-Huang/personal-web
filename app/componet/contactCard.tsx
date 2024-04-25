import React from 'react'

interface contactCardProps {
   type: String,
   data: String
}

const ContactCard = ({type, data}: contactCardProps) => {
  return (
    <div className='w-full h-40 bg-white text-black border-white border-2 flex flex-col justify-center items-center hover:bg-black hover:text-white'>
            <h3>{type}</h3>
            <p>{data}</p>
    </div>
  )
}

export default ContactCard