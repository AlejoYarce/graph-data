import { styled } from '~app/styles/theme'
import { Form } from 'usetheform'

export const FormContainer = styled(Form)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  min-height: 730px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* background: #3c9697; */
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  /* box-shadow: 0 1px 1px rgb(16 27 30 / 15%), 0 2px 2px rgb(16 27 30 / 15%),
    0 4px 4px rgb(16 27 30 / 15%), 0 8px 8px rgb(16 27 30 / 15%),
    0 16px 16px rgb(16 27 30 / 15%); */

  &.notVisible {
    display: none;
  }
`

export const FieldsContainer = styled.div`
  width: 100%;
  max-width: 520px;
`

export const ActionsContainer = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-top: 30px;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  border-radius: 11px;
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 40px;
  background-color: ${({ secondary }) => secondary ? '#FFF' : '#000000'};
  color: ${({ secondary }) => secondary ? '' : '#FFFFFF'};

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;

    &:hover {
      text-decoration: initial;
    }
  }
`

export const Output = styled.div`
  margin-top: 40px;
`
