import { styled } from '~app/styles/theme'
import { Form } from 'usetheform'

export const FormContainer = styled(Form)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 800px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #3c9697;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgb(16 27 30 / 15%), 0 2px 2px rgb(16 27 30 / 15%),
    0 4px 4px rgb(16 27 30 / 15%), 0 8px 8px rgb(16 27 30 / 15%),
    0 16px 16px rgb(16 27 30 / 15%);

  &.notVisible {
    display: none;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
  padding: 8px 50px;

  & :hover {
    background-color: #000000;
    color: #ffff;
  }
`

export const Output = styled.div`
  margin-top: 40px;
`
