import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'

const RountersCall = () => {
  return (
    <Routes><Route path='' element={<HomePage/>}/></Routes>
  )
}

export default RountersCall