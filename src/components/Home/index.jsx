import React, { useState } from 'react'

import { SectionContainer } from '~app/styles/global'
import Input from '~app/components/ui/Input'
import { FormContainer, FormContent } from './styles'
import content from '~app/utils/content.json'

const setInitialState = () => {
  let initialState = {}
  content.forEach(item => {
    initialState = {
      ...initialState,
      [item.name]: { value: '', valid: true },
    }
  })

  return initialState
}
const errorMessage = 'Campo Requerido'

const Home = () => {
  const [formFields, setFormFields] = useState(setInitialState())

  const onChange = (name, value, valid) => {
    const localFormFields = {
      ...formFields,
      [name]: { value, valid },
    }

    setFormFields(localFormFields)
  }

  return (
    <SectionContainer>
      <FormContainer>
        <h1>Welcome to Graph Data</h1>

        {JSON.stringify(formFields)}
        <FormContent>
          {content.map((item, idx) => (
            <Input
              key={`${item.name}-${idx}`}
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              value={formFields[item.name]?.value}
              onChange={onChange}
              error={errorMessage}
              showError={!formFields[item.name]?.valid}
              required={item.required}
            />
          ))}
        </FormContent>
      </FormContainer>
    </SectionContainer>
  )
}

export default Home
