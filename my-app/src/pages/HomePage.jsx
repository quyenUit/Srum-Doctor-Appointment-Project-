import React from 'react'
import DoctorList from '../components/DoctorList'

import SystemInput from '../components/SystemInput'
import Stage from '../components/Stage'

const HomePage = () => {
  return (
    <div>
        <Stage/>
        <SystemInput/>
      <DoctorList/>
    </div>
  )
}

export default HomePage