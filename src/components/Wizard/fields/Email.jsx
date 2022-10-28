import React from 'react'
import { useValidation } from 'usetheform'

import { CustomInput as Input, Label } from './styles'

const email = (value) =>
  !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    ? undefined
    : 'Mail not Valid'
const required = (value) => (value && value !== '' ? undefined : 'Required')

const Email = ({ label, name, placeholder }) => {
  const [status, validation] = useValidation([required, email])
  return (
    <div>
      <Label>{label}</Label>
      <div>
        <Input
          touched
          type="text"
          name={name}
          placeholder={placeholder}
          {...validation}
        />
      </div>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  )
}

export default Email
