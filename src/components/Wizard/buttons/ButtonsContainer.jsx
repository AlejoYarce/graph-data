import React from 'react'

import { ActionsContainer, Button } from '../styles'
import Submit from '~app/components/Wizard/buttons/Submit'

const ButtonsContainer = ({ back, prevPageHandler, next }) => (
  <ActionsContainer>
    <div>
      {back && (
        <Button type="button" onClick={prevPageHandler} secondary>
          Anterior
        </Button>
      )}
    </div>

    <Submit type="submit">
      {next === 'SUBMIT' ? 'Finalizar' : 'Siguiente'}
    </Submit>
  </ActionsContainer>
)

export default ButtonsContainer
