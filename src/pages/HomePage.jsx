import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Create from '../components/Create'
import Read from '../components/Read'
import SingleUser from '../components/SingleUser'
const HomePage = () => {
  return (
    <div className="container-fluid">
         <Routes>
        <Route exact path='/create' element={<Create/>}/>
        <Route path='/' element={<Read/>}/>
        <Route path='/user/:id' element={<SingleUser />} /> {/* here i m doing update nd delete*/}
         {/* Use colon : before id to capture the parameter */}

    </Routes>
    </div>
  )
}

export default HomePage