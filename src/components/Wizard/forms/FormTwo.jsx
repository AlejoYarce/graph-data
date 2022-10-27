import React from 'react'

import Email from '../fields/Email'
import Selection from '../fields/Ratio'
import TermAndConditions from '../fields/TermAndConditions'

import Submit from '../buttons/Submit'
import Reset from '../buttons/Reset'

import { Button, ButtonsContainer, FormContainer } from '../styles'

const FormTwo = ({ prevPage, ...props }) => {
  return (
    <FormContainer {...props}>
      <Email />
      <Selection />
      <TermAndConditions />
      <ButtonsContainer>
        <div className="control">
          <Button type="button" onClick={prevPage} className="button is-text">
            Previous
          </Button>
        </div>
        <div className="control">
          <Reset />
        </div>
        <div className="control">
          <Submit type="submit">Submit Wizard</Submit>
        </div>
      </ButtonsContainer>
    </FormContainer>
  )
}

export default FormTwo
