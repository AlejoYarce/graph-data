import { styled } from '~app/styles/theme'

import { Input, Select } from 'usetheform'

export const CustomInput = styled(Input)`
  border: 3px solid #000000;
  box-shadow: 3px 5px 0px rgb(0 0 0 / 40%);
  border-radius: 8px;
  padding: 10px 8px;
  width: 100%;
  height: auto;
  margin-top: 8px;
`

export const DropDown = styled(Select)`
  border: 3px solid #000000;
  box-shadow: 3px 5px 0px rgb(0 0 0 / 40%);
  border-radius: 8px;
  padding: 10px 8px;
  width: 100%;
  height: auto;
  margin-top: 8px;
`

export const Label = styled.span`
  font-size: 18px;
  font-weight: 600;
`

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    padding-left: 35px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  label:hover input ~ .checkmark {
    background-color: #ccc;
  }

  label input:checked ~ .checkmark {
    background-color: black;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input:checked ~ .checkmark:after {
    display: block;
  }

  label .checkmark:after {
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: white;
  }
`

export const Check = styled.label`
  display: flex;
  font-size: 14px;
  gap: 5px;
  align-items: center;
`

export const TextContainer = styled.div`
  margin-bottom: 30px;
`
