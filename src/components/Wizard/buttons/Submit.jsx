import React from 'react'
import { useForm } from 'usetheform'

import { Button } from '../styles'

const Submit = ({ children }) => {
  const { isValid } = useForm()
  return (
    <Button disabled={!isValid} type="submit" className="button is-link">
      {children}
    </Button>
  )
}

export default Submit
