import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/careers">Careers</NavLink>
    </nav>
  )
}
