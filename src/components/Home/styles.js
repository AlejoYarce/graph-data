import { mq } from '~app/styles/media'
import { styled } from '~app/styles/theme'

export const FormContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
  margin: 0 auto;
`

export const FormContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0px 40px;

  ${() => mq('lgs')`
    gap: 0px 80px;
  `}
`
