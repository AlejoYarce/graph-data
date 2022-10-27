import React from 'react'

import Text from './../fields/Text'
import Ratio from '../fields/Ratio'
import Reset from './../buttons/Reset'

import { Button, ButtonsContainer, FormContainer } from '../styles'

const Form = (props) => {
  const { back, currentStep, fields, prevPage } = props

  return (
    <FormContainer {...props}>

      <div>
        {fields?.map((field, index) => {
          return (
            <div>{field.name}</div>
          )
        })}
      </div>

      <ButtonsContainer>
        <div>
          {back ? (
            <Button type="button" onClick={prevPage} className="button is-text">
              Previous
            </Button>
          ) : (
            <Button type="submit">Siguiente</Button>
          )}
        </div>
        <div>
          <Reset />
        </div>
      </ButtonsContainer>
    </FormContainer>
  )
}

export default Form
