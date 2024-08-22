import React from 'react'
import District from './District'

const StateGov = ({money}) => {
  return (
    <div>
      <h1>This is State Gov Component</h1>
      <District money={money} />
    </div>
  );
}

export default StateGov