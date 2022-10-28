import React from 'react'

import { CustomInput as Input, Label } from './styles'

const Text = ({ label, ...props }) => {
  return (
    <div>
      <Label>{label}</Label>
      <div>
        <Input type="text" {...props} />
      </div>
    </div>
  )
}

export default Text
