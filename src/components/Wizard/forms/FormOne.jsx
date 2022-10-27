import React from 'react'

import Text from './../fields/Text'
import Ratio from '../fields/Ratio'
import Select from '../fields/Select'
import Reset from './../buttons/Reset'

import { Button, ButtonsContainer, FormContainer } from '../styles'

const FormOne = (props) => {
  return (
    <FormContainer {...props}>
      <Text label="First Name" name="name" placeholder="Escribir información..." />
      <Text
        label="Last Name"
        name="lastname"
        placeholder="Escribir información..."
      />
      <Select />
      <Ratio />
      <ButtonsContainer>
        <div className="control">
          <Button type="submit" className="button is-link">
            Siguiente
          </Button>
        </div>
        <div className="control">
          <Reset />
        </div>
      </ButtonsContainer>
    </FormContainer>
  )
}

export default FormOne
