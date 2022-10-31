import { styled } from '~app/styles/theme'

import { Input, Select } from 'usetheform'

export const CustomInput = styled(Input)`
  border: 3px solid #000000;
  box-shadow: 3px 5px 0px rgb(0 0 0 / 40%);
  border-radius: 8px;
  padding: 10px 8px;
  width: 400px;
  height: auto;
  margin-top: 8px;
  margin-bottom: 20px;
`

export const DropDown = styled(Select)`
  border: 3px solid #000000;
  box-shadow: 3px 5px 0px rgb(0 0 0 / 40%);
  border-radius: 8px;
  padding: 10px 8px;
  width: 400px;
  height: auto;
  margin-top: 8px;
`

export const Label = styled.label`
  font-size: 14px;
`

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  label {
    display: flex;
    gap: 5px;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }
`

export const Check = styled.label`
  display: flex;
  font-size: 14px;
  gap: 5px;
  align-items: center;
`

export const SelectItemContainer = styled.div`

`
