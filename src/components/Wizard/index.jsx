import React, { useState } from 'react'
import { useMultipleForm } from 'usetheform'
import ReactJson from 'react-json-view'

// Data
import questions from '~app/utils/questions'

// Components
import Form from '~app/components/Wizard/forms'

import { Container } from './styles'

const Wizard = () => {
  const [currentPage, setPage] = useState(1)
  const [wizardState, updateJson] = useState({})

  const nextPage = () => setPage((prev) => ++prev)
  const prevPage = () => setPage((prev) => --prev)

  const [getWizardState, wizard] = useMultipleForm((state) => updateJson(state))

  const onSubmitWizard = () => console.log(getWizardState())

  return (
    <Container>
      {questions.map((item, index) => {
        return (
          <Form
            className={currentPage !== index + 1 && 'notVisible'}
            key={`form-${item?.key}`}
            currentPage={index + 1}
            currentStep={item?.key}
            fields={item?.fields}
            back={item?.back}
            next={item?.next}
            name={item?.key}
            prevPage={prevPage}
            nextPage={nextPage}
            onSubmit={item?.next === 'SUBMIT' ? onSubmitWizard : nextPage}
            {...wizard}
          />
        )
      })}

      <br />

      <div>
        <ReactJson src={wizardState} />
      </div>
    </Container>
  )
}

export default Wizard
