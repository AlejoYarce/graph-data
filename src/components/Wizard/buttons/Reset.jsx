import React from 'react'
import { useForm } from 'usetheform'

import { Button } from '../styles'

const Reset = () => {
  const { reset, pristine } = useForm()

  return (
    <Button
      disabled={pristine}
      type="button"
      className="button is-text"
      onClick={reset}
    >
      Limpiar
    </Button>
  )
}

export default Reset
