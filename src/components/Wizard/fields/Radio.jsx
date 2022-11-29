import React from 'react'
import { Input, useValidation, Collection } from 'usetheform'

import { Label, RadioContainer } from './styles'

const required = (value) => (value && value !== '' ? undefined : 'Campo requerido')

const Radio = ({ label, name, onChange = () => { }, options }) => {
  const [status, validation] = useValidation([required])

  return (
    <div>
      <RadioContainer>
        <Label>{label}</Label>
        <Collection object touched name={name} {...validation}>
          {options?.map((option, index) => (
            <label key={`${name}-radio-${index}`}>
              <Input
                type="radio"
                name={name}
                onChange={(e) => onChange(e, options, name, label)}
                value={option?.value}
              />
              {option?.label}
              <span className="checkmark"></span>
            </label>
          ))}
        </Collection>
        {status.error && <p className="help is-danger">{status.error}</p>}
      </RadioContainer>
    </div>
  )
}

export default Radio
