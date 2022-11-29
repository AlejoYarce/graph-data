import React from 'react'

import Text from '~app/components/Wizard/fields/Text'
import Radio from '~app/components/Wizard/fields/Radio'

import { FieldsContainer, FormContainer } from '../styles'
import ButtonsContainer from '../buttons/ButtonsContainer'

const SimpleFields = ({ form = {}, prevPageHandler, setFlags, ...props }) => {
  const onChange = (e, options, name, label) => {
    const item = options.find((child) => child.label === e)

    if (item.flag) {
      setFlags({ [label]: item.flag })
    }
  }

  return (
    <FormContainer name={form.key} {...props}>
      <FieldsContainer>
        {form?.fields?.map((field, _index) => {
          switch (field?.type) {
            case 'text':
              return <Text key={`${field.name}-${_index}`} {...field} />

            case 'radio':
              return <Radio key={`${field.name}-${_index}`} onChange={onChange} {...field} />

            default:
              return null
          }
        })}
      </FieldsContainer>

      <ButtonsContainer
        back={form?.back}
        prevPageHandler={prevPageHandler}
        next={form?.next}
      />
    </FormContainer>
  )
}

export default SimpleFields
