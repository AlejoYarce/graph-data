import React, { useEffect, useState } from 'react'
import { useMultipleForm } from 'usetheform'
import axios from 'axios'
import { useRouter } from 'next/router'

import questions from '~app/utils/questions'

import { Container } from './styles'
import TipoDePersona from '~app/components/Wizard/forms/TipoDePersona'
import SimpleFields from '~app/components/Wizard/forms/SimpleFields'
import DemandasLaborales from '~app/components/Wizard/forms/DemandasLaborales'
import NumeroEmpleados from '~app/components/Wizard/forms/NumeroEmpleados'
import { destroyItem, getItem, setItem } from '~app/utils/cookies'
import { calculateResult, mapWizardState } from '~app/utils/utils'
import Loader from '../ui/Loader'

const Wizard = () => {
  const [currentPage, setPage] = useState(1)
  const [wizardState, setWizardState] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const nextPageHandler = () => setPage((prev) => ++prev)
  const prevPageHandler = () => setPage((prev) => --prev)

  const [getWizardStatus, wizardApi] = useMultipleForm((state) => setWizardState(state))

  useEffect(() => {
    destroyItem('flags')
  }, [])

  const onSubmitWizard = async () => {
    setIsLoading(true)

    const wizardState = getWizardStatus()
    const state = mapWizardState(wizardState)

    const actualFlags = getItem('flags')

    await axios.post(
      '/api/airtable-post',
      { ...state, Flags: JSON.stringify(actualFlags) },
      { headers: { 'Content-Type': 'application/json' } },
    )

    router.push(`/${state.Documento}`)
  }

  const setFlagsHandler = (newFlag) => {
    const actualFlags = getItem('flags')
    setItem('flags', { ...actualFlags, ...newFlag })
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <TipoDePersona
        className={currentPage !== 1 && 'notVisible'}
        form={questions.tipoDePersona}
        prevPageHandler={prevPageHandler}
        onSubmit={nextPageHandler}
        {...wizardApi}
      />
      <SimpleFields
        className={currentPage !== 2 && 'notVisible'}
        form={questions.datosPersonales}
        prevPageHandler={prevPageHandler}
        onSubmit={nextPageHandler}
        {...wizardApi}
      />
      <DemandasLaborales
        className={currentPage !== 3 && 'notVisible'}
        form={questions.demandasLaborales}
        prevPageHandler={prevPageHandler}
        onSubmit={nextPageHandler}
        setFlags={setFlagsHandler}
        {...wizardApi}
      />
      <NumeroEmpleados
        className={currentPage !== 4 && 'notVisible'}
        form={questions.numeroEmpleados}
        prevPageHandler={prevPageHandler}
        onSubmit={nextPageHandler}
        setFlags={setFlagsHandler}
        {...wizardApi}
      />
      <SimpleFields
        className={currentPage !== 5 && 'notVisible'}
        form={questions.contratoLaboral}
        prevPageHandler={prevPageHandler}
        onSubmit={nextPageHandler}
        setFlags={setFlagsHandler}
        {...wizardApi}
      />
      <SimpleFields
        className={currentPage !== 3 && 'notVisible'}
        form={questions.procesosAbiertos}
        prevPageHandler={prevPageHandler}
        onSubmit={onSubmitWizard}
        setFlags={setFlagsHandler}
        {...wizardApi}
      />
    </Container>
  )
}

export default Wizard
