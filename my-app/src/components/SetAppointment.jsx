import React from 'react'
import DoctorList from './DoctorList'
import { Link } from 'react-router-dom'
import Button from './Button'

const SetAppointment = () => {
  return (
    <div>
        <DoctorList/>
    <div className="text-center my-6">
          <Link to="/InformationInput">
            {" "}
            {/* Specify the route you want to navigate to */}
            <Button onClick="" className="" title="Next" />
          </Link>
        </div>
    </div>
  )
}

export default SetAppointment