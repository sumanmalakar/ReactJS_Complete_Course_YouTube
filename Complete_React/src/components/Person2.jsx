import React from 'react'

const Person2 = ({name,age,salary,ram}) => {
  return (
    <div>
        <h2>Name = {name}</h2>
        <h3>Age = {age}</h3>
        <h4>Salary = {salary}</h4>
        <h5>Ram = {ram}</h5>
    </div>
  )
}

export default Person2