import React from 'react'
import DoctorList from '../components/DoctorList'
import Stage from '../components/Stage'
import Dropdown from '../components/Dropdown'
import InputField from '../components/InputField'

const HomePage = () => {
  return (
    <div>
        <div className='header' style={{
            display: 'flex'
        }}>
            <Stage stageName='Input symptoms'></Stage>
            <Stage stageName='Set appointment'></Stage>
            <Stage stageName='Input infomation'></Stage>
        </div>
        <div className=''>
            <Dropdown label='What are your symptoms? *'></Dropdown>
        </div>
        <div className=''>
            <table>
                <tr>
                    <td><InputField label='First name *'></InputField></td>
                    <td style={{width: "50px"}}></td>
                    <td><InputField label='Last name *'></InputField></td>
                </tr>
                <tr>
                    <td><InputField label='Age *'></InputField></td>
                    <td style={{width: "50px"}}></td>
                    <td><InputField label='Gender *'></InputField></td>
                </tr>
                <tr>
                    <td><InputField label='Phone number *'></InputField></td>
                    <td style={{width: "50px"}}></td>
                    <td></td>
                </tr>
            </table>
        </div>
      <DoctorList/>
    </div>
  )
}

export default HomePage