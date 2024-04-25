import React from 'react'

interface contactCardProps {
   type: String,
   data: String
}

const ContactCard = ({type, data}: contactCardProps) => {
  return (
    <div className='w-full h-40 bg-white text-black border-white border-2 flex flex-col justify-center items-center hover:bg-black hover:text-white hover:border-white '>
            <h3>{type}</h3>
            <hr className="w-1/3 py-3 border-black hover:border-white"></hr>
            <p className='text-base lg:text-lg'>{data}</p>
    </div>
  )
}

export default ContactCard