import React from 'react'
import { Input, useValidation, Collection } from 'usetheform'

import { Label, RadioContainer } from './styles'

const required = (value) => (value && value !== '' ? undefined : 'Required')

const Ratio = ({ label, name, groupName, onChange, options }) => {
  const [status, validation] = useValidation([required])

  return (
    <div>
      <RadioContainer>
        <Label>{label}</Label>
        <Collection object touched name={name} {...validation}>
          {options?.map((option) => (
            <label>
              <Input
                type="radio"
                name={groupName}
                onChange={(e) => onChange(e, options)}
                value={option?.value}
              />
              {option?.label}
            </label>
          ))}
        </Collection>
      </RadioContainer>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  )
}

export default Ratio
