
import React from 'react'
import {Route, Routes as RouteContainer} from "react-router-dom"
import Index from '../pages/Index'
const Routes = () => {
  return (
    <>
     
    <RouteContainer>
      <Route path='/' element={<Index/>} />
    </RouteContainer>
    </>
  )
}

export default Routes