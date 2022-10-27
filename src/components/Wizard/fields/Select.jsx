import React from 'react'

import { DropDown, Label } from './styles'

const Select = ({ items, label }) => {
  return (
    <div>
      <Label>{label}</Label>
      <div>
        <DropDown name="country">
          <option value="">Select a {label}</option>
          {items?.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </DropDown>
      </div>
    </div>
  )
}

export default Select
