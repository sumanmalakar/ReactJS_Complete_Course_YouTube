import React from 'react'
import People from './People'

const Panchayat = ({money}) => {
  return (
    <div>
      <h1>This is Panchayat Component</h1>
      <People money={money} />
    </div>
  );
}

export default Panchayat