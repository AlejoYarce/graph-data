import React, { useState } from 'react'

import Text from '~app/components/Wizard/fields/Text'
import Radio from '~app/components/Wizard/fields/Radio'
import Select from '~app/components/Wizard/fields/Select'

import { FieldsContainer, FormContainer } from '../styles'
import ButtonsContainer from '../buttons/ButtonsContainer'

const TipoDePersona = ({ form = {}, prevPageHandler, ...props }) => {
  const [showJuridicaChildrenField, setShowJuridicaChildrenField] = useState(false)

  const onChange = (e, options, name) => {
    const item = options.find((child) => child.label === e)

    if (name === 'Persona') {
      setShowJuridicaChildrenField(item?.showChildren)
    }
  }

  return (
    <FormContainer name={form.key} {...props}>
      <FieldsContainer>
        <Text {...form.nitField} />
        <Radio {...form.tipoDePersonaField} onChange={onChange} />
        {showJuridicaChildrenField && (
          <Select {...form?.juridicaChildrenField} />
        )}
      </FieldsContainer>

      <ButtonsContainer
        back={form?.back}
        prevPageHandler={prevPageHandler}
        next={form?.next}
      />
    </FormContainer>
  )
}

export default TipoDePersona
