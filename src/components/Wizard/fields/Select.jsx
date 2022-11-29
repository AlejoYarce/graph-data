import React from 'react'
import { useValidation } from 'usetheform'

import { DropDown, Label } from './styles'

const required = value => (value && value !== '' ? undefined : 'Campo requerido')
const Select = ({ options, name, label }) => {
  const [status, validation] = useValidation([required])

  return (
    <div>
      <Label>{label}</Label>
      <div>
        <DropDown name={name} touched {...validation}>
          <option value="">Select a {label}</option>
          {options?.map((item, index) => (
            <option key={`opt-${index}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </DropDown>
      </div>

      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  )
}

export default Select
