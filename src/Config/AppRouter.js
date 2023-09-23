import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from '../Screen/SignUp'
import Login from '../Screen/Login'
import AdminPanel from '../Screen/AdminPanel'
import Drawer from './Drawer'
export default function AppRouter() {
  return (
    <div>
      <Router>
        <Drawer/>
        <Routes>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="adminpanel" element={<AdminPanel/>}/>
        </Routes>
      </Router>
    </div>
  )
}
