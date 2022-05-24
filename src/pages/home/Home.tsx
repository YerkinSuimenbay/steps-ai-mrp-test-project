import React from 'react'
import './home.scss'

export const Home: React.FC = () => {
  const today = new Date().toLocaleString().slice(0, 10)
 
  return (
    <div className="page home">
      <h2 className="page__title">Welcome to Home Page</h2>

      <p>Today is {today}</p>
    </div>
  )
}
