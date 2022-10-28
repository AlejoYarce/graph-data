import React, { useState } from 'react'
import ReactJson from 'react-json-view'
import { useMultipleForm } from 'usetheform'

// Data
import questions from '~app/utils/questions'

// Components
import Form from '~app/components/Wizard/forms'

import { Container, Output } from './styles'

const Wizard = () => {
  const [currentPage, setPage] = useState(1)
  const nextPage = () => setPage((prev) => ++prev)
  const prevPage = () => setPage((prev) => --prev)

  const [getWizardState, wizard] = useMultipleForm((state) => updateJson(state))
  const onSubmitWizard = () => console.log(getWizardState())

  const [wizardState, updateJson] = useState({})

  return (
    <Container>
      {questions.map((item, index) => {
        return (
          <Form
            key={`form+${index}`}
            currentPage={index + 1}
            currentStep={item?.key}
            fields={item?.fields}
            back={item?.back}
            next={item?.next}
            name={item?.name}
            prevPage={prevPage}
            onSubmit={nextPage}
            {...wizard}
          />
        )
      })}

      <Output>
        <ReactJson src={wizardState} />
      </Output>
    </Container>
  )
}

export default Wizard
