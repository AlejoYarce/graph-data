import React, { useState } from 'react'

import Text from '~app/components/Wizard/fields/Text'
import Radio from '~app/components/Wizard/fields/Radio'
import Select from '~app/components/Wizard/fields/Select'

import { FieldsContainer, FormContainer } from '../styles'
import ButtonsContainer from '../buttons/ButtonsContainer'

const renderElements = (field, onChange, _index) => {
  switch (field?.type) {
    case 'radio':
      return (
        <Radio
          key={`${field?.name}-${_index}`}
          label={field?.label}
          name={field?.name}
          onChange={onChange}
          options={field?.options}
        />
      )

    case 'text':
      return (
        <Text
          key={`${field?.name}-${_index}`}
          {...field}
        />
      )

    case 'email':
      return (
        <Text
          key={`${field?.name}-${_index}`}
          {...field}
          isEmail
        />
      )

    case 'number':
      return (
        <Text
          key={`${field?.name}-${_index}`}
          {...field}
          isNumeric
        />
      )

    case 'dropdown':
      return (
        <Select
          key={`${field?.name}-${_index}`}
          label={field?.label}
          name={field?.name}
          options={field?.options}
        />
      )

    default:
      return null
  }
}

const Form = ({
  formItem,
  currentStep,
  prevPageHandler,
  ...props
}) => {
  const [children, setChildren] = useState([])

  const back = formItem?.back
  const next = formItem?.next
  const fields = formItem?.fields

  const onChange = (e, options) => {
    const item = options.find((child) => child.label === e)

    setChildren(children.concat(item?.children))
  }

  return (
    <FormContainer {...props}>
      <FieldsContainer>
        {fields?.map((field, _index) => renderElements(field, onChange, _index))}

        {children?.map((field, _index) => renderElements(field, onChange, _index))}
      </FieldsContainer>

      <ButtonsContainer
        back={back}
        prevPageHandler={prevPageHandler}
        next={next}
      />
    </FormContainer>
  )
}

export default Form
