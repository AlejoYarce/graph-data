import React from 'react'
import { useValidation } from 'usetheform'

import { CustomInput as Input, Label, TextContainer } from './styles'

const required = value => (value && value !== '' ? undefined : 'Campo requerido')
const isValidNumber = (value) => (!(value && !/^\d+$/.test(value)) ? undefined : 'Solo ingresar números')
const isValidEmail = (value) => (!(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? undefined : 'Correo no válido')

const Text = ({ label, type, isEmail, isNumeric, ...props }) => {
  const validations = [required]
  if (isNumeric) {
    validations.push(isValidNumber)
  }
  if (isEmail) {
    validations.push(isValidEmail)
  }
  const [status, validation] = useValidation(validations)

  return (
    <TextContainer>
      <Label>{label}</Label>
      <div>
        <Input type={type} touched {...props} {...validation} />
      </div>

      {status.error && <p className="help is-danger">{status.error}</p>}
    </TextContainer>
  )
}

export default Text
