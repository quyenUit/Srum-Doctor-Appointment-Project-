import React from 'react'

// const label = "Label"

const InputField = (props) => {
  return (
    <div>
        {props.label}
        <div>
            <input type="text" name="" id="" style={{
                border: "1px solid blue",
                font: "13px",
                borderRadius: "6px",
                height: "30px",
                width: "200px",
                marginTop: "10px"
            }}/>
        </div>
    </div>
  )
}

export default InputField