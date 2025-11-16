import React, { memo } from 'react'

const Parent = () => {

    console.log('Parent load');
    
  return (
    <div>Parent</div>
  )
}

export default memo(Parent)