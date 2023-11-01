import React from 'react'
// import { csv } from "csv-parser"
// import path from 'path'
// import fs from 'fs'

// const label = "Label"

const Dropdown = (props) => {
  return (
    <div>
        {props.label}
        <div>
            <select name="" id=""  style={{
                border: "1px solid black",
                borderRadius: "10px",
                height: "30px",
                width: "200px",
                marginTop: "10px",
                padding: "10px"
            }}>
                <option value="">Trĩ nội</option>
                <option value="">Trĩ ngoại</option>
            </select>
        </div>
    </div>
  )
}

export default Dropdown