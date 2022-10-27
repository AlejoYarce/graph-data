import React from 'react'

import { CustomInput as Input, Label } from './styles'

const Text = ({ label, ...props }) => {
  return (
    <div className="field">
      <Label className="label">{label}</Label>
      <div className="control">
        <Input type="text" className="input" {...props} />
      </div>
    </div>
  )
}

export default Text
