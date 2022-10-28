import React from 'react'

import { DropDown, Label } from './styles'

const Select = ({ items, name, label }) => {
  return (
    <div>
      <Label>{label}</Label>
      <div>
        <DropDown name={name}>
          <option value="">Select a {label}</option>
          {items?.map((item, index) => (
            <option key={`opt-${index}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </DropDown>
      </div>
    </div>
  )
}

export default Select
