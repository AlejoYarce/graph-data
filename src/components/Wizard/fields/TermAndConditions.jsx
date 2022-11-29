import React from 'react'
import { Input, useValidation } from 'usetheform'

import { Check } from './styles'

const required = (value) => (value && value !== '' ? undefined : 'Campo requerido')

const TermAndConditions = () => {
  const [status, validation] = useValidation([required])

  return (
    <div className="field">
      <div className="control">
        <Check>
          <Input touched type="checkbox" name="agreed" {...validation} />I agree
          to the terms and conditions
        </Check>
      </div>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  )
}

export default TermAndConditions
