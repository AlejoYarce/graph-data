import React from 'react'
import { Input, useValidation, Collection } from 'usetheform'

import { RadioContainer } from './styles'

const required = (value) => (value && value !== '' ? undefined : 'Required')

const Ratio = () => {
  const [status, validation] = useValidation([required])

  return (
    <div className="field">
      <RadioContainer>
        <Collection object touched name="myGender" {...validation}>
          <label className="radio">
            <Input type="radio" name="gender" value="M" />
            Male
          </label>
          <label className="radio">
            <Input type="radio" name="gender" value="F" />
            Female
          </label>
          <label className="radio">
            <Input type="radio" name="gender" value="Other" />
            Other
          </label>
        </Collection>
      </RadioContainer>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  )
}

export default Ratio
