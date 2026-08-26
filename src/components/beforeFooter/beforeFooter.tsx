import React from 'react'

const beforeFooter = () => {
  return (
    <div className='hidden md:block'>
        <div
      className="bg-cover bg-center min-h-[400px] flex items-center justify-end p-4 sm:p-6 md:p-10" // Add padding for better spacing on smaller screens
      style={{ backgroundImage: "url('/beforeFooter/beforeFooter.jpg')" }}
    >
      <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-6 sm:mr-10 md:mr-20 lg:mr-40">
        Join us and become a part of a vibrant <br />
        community where your well-being is <br />
        our top priority
      </h3>
    </div>
    </div>
  )
}

export default beforeFooter
