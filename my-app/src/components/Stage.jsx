import React from 'react'

const Stage = (props) => {
  return (
    <div style={{
        textAlign: "center",
        backgroundColor: "white",
        height: "30px",
        width: "150px",
        borderRadius: "10px",
        border: "1px solid black",
        marginRight: "20px"
    }}>
        {props.stageName}</div>
  )
}

export default Stage