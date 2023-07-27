import React from 'react'

const LoadingPage = () => {
  return (
    <div className="absolute left-28 mt-1 sm:ml-40 sm:mt-2 md:ml-64 md:mt-24 lg:ml-80 lg:mt-24 flex items center">
        <span className="px-6 py-2 bg-gradient-to-r from-green-800 via-green-400 inline-block text-transparent bg-clip-text to-rose-400 text-xl font-bold">
          Loading...
        </span>
    </div>
  )
}

export default LoadingPage