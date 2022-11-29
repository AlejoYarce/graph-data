import React, { useState } from 'react'

import Text from '~app/components/Wizard/fields/Text'
import Radio from '~app/components/Wizard/fields/Radio'

import { FieldsContainer, FormContainer } from '../styles'
import ButtonsContainer from '../buttons/ButtonsContainer'

const DemandasLaborales = ({ form = {}, prevPageHandler, setFlags, ...props }) => {
  const [showJuzgadoField, setShowJuzgadoField] = useState(false)
  const [showEtapaChildrenField, setShowEtapaChildrenField] = useState(false)

  const onChange = (e, options, name, label) => {
    const item = options.find((child) => child.label === e)
    if (name === 'Demandas Laborales') {
      setShowJuzgadoField(item?.showChildren)
    }
    if (name === 'Estado Demanda') {
      setShowEtapaChildrenField(item?.showChildren)
    }

    if (item.flag) {
      setFlags({ [label]: item.flag })
    }
  }

  return (
    <FormContainer name={form.key} {...props}>
      <FieldsContainer>
        {form?.fields?.map((field, _index) => (
          <Radio key={`${field.name}-${_index}`} {...field} onChange={onChange} />
        ))}
        {showJuzgadoField && (
          <>
            <Text {...form.juzgadoField} />
            <Radio {...form.etapaField} onChange={onChange} />
            {showEtapaChildrenField && <Text {...form.etapaChildrenField} />}
          </>
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

export default DemandasLaborales
