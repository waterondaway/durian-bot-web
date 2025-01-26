import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-dark">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 animate-pulse">404 Not Found</h1>
        <p className="text-l mb-6">Oops! The page you're looking for doesn't exist.</p>
      </div>
    </div>
  )
}

export default NotFound
