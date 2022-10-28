import React from 'react'

import Text from '~app/components/Wizard/fields/Text'
import Ratio from '~app/components/Wizard/fields/Ratio'
import Email from '~app/components/Wizard/fields/Email'
import Select from '~app/components/Wizard/fields/Select'
import Reset from '~app/components/Wizard/buttons/Reset'

import { Button, ButtonsContainer, FormContainer } from '../styles'

const Form = (props) => {
  const { back, currentStep, fields, prevPage } = props

  return (
    <FormContainer {...props}>
      <div>
        {fields?.map((field, index) => {
          switch (field?.type) {
            case 'radio':
              return (
                <Ratio
                  options={field?.options}
                  groupName={field?.name}
                  name={field?.name}
                />
              )

            case 'text':
              return (
                <Text
                  label={field?.label}
                  name={field?.name}
                  placeholder={field?.placeholder}
                />
              )

            case 'email':
              return (
                <Email
                  label={field?.label}
                  name={field?.name}
                  placeholder={field?.placeholder}
                />
              )

            case 'dropdown':
              return (
                <Select
                  label={field?.label}
                  name={field?.name}
                  items={field?.options}
                />
              )

            default:
              return null
          }
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
