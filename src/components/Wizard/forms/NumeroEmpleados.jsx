import React, { useState } from 'react'

import Radio from '~app/components/Wizard/fields/Radio'

import { FieldsContainer, FormContainer } from '../styles'
import ButtonsContainer from '../buttons/ButtonsContainer'

const NumeroEmpleados = ({ form = {}, prevPageHandler, setFlags, ...props }) => {
  const [showNumeroEmpleadosChildren, setShowNumeroEmpleadosChildren] = useState(false)
  const [showReglamentoInteroChildren, setShowReglamentoInteroChildren] = useState(false)
  const [showManualSancionesChildren, setShowManualSancionesChildren] = useState(false)

  const onChange = (e, options, name, label) => {
    const item = options.find((child) => child.label === e)
    if (name === 'Número Empleados') {
      setShowNumeroEmpleadosChildren(item?.showChildren)
    }
    if (name === 'Reglamento Interno') {
      setShowReglamentoInteroChildren(item?.showChildren)
    }
    if (name === 'Manual de Sanciones') {
      setShowManualSancionesChildren(item?.showChildren)
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
        {showNumeroEmpleadosChildren && (
          <>
            <Radio {...form.reglamentoInternoField} onChange={onChange} />
            {showReglamentoInteroChildren && (
              <Radio {...form.reglamentoInteroChildren} onChange={onChange} />
            )}
            <Radio {...form.manualSancionesField} onChange={onChange} />
            {showManualSancionesChildren && (
              <Radio {...form.manualSancionesChildren} onChange={onChange} />
            )}
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

export default NumeroEmpleados
