import React, { useState } from 'react'

import Text from '~app/components/Wizard/fields/Text'
import Ratio from '~app/components/Wizard/fields/Ratio'
import Email from '~app/components/Wizard/fields/Email'
import Select from '~app/components/Wizard/fields/Select'
import Reset from '~app/components/Wizard/buttons/Reset'

import { Button, ButtonsContainer, FormContainer } from '../styles'

const renderElements = (field, onChange) => {
  switch (field?.type) {
    case 'radio':
      return (
        <Ratio
          onChange={onChange}
          label={field?.label}
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
}

const Form = ({
  back,
  next,
  currentStep,
  fields,
  nextPage,
  prevPage,
  onSubmit,
  ...props
}) => {
  const [children, setChildren] = useState([])

  const onChange = (e, options) => {
    const item = options.find((child) => child.label === e)

    setChildren(children.concat(item?.children))
  }

  return (
    <FormContainer {...props}>
      <div>
        {fields?.map((field, _index) => renderElements(field, onChange))}

        {children?.map((field, _index) => renderElements(field, onChange))}
      </div>

      <ButtonsContainer>
        <div>
          {back && (
            <Button type="button" onClick={prevPage}>
              Anterior
            </Button>
          )}
        </div>

        <div>
          <Reset />
        </div>

        <div>
          {next === 'SUBMIT' ? (
            <Button type="submit">
              Finalizar
            </Button>
          ) : (
            next && (
              <Button type="submit" onClick={nextPage}>
                Siguiente
              </Button>
            )
          )}
        </div>
      </ButtonsContainer>
    </FormContainer>
  )
}

export default Form
