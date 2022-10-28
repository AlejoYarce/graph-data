import React from 'react'
import { Input, useValidation, Collection } from 'usetheform'

import { RadioContainer } from './styles'

const required = (value) => (value && value !== '' ? undefined : 'Required')

const Ratio = ({ name, groupName, options }) => {
  const [status, validation] = useValidation([required])

  return (
    <div>
      <RadioContainer>
        <Collection object touched name={name} {...validation}>
          {options?.map((option) => (
            <label>
              <Input type="radio" name={groupName} value={option?.value} />
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
