import { styled } from '~app/styles/theme'

export const ResultsCardContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
`

export const ResultsCardContent = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px 10px;
  -webkit-box-shadow: 0px 0px 15px 2px ${({ theme, color }) => theme.colors.primary[color]};
  -moz-box-shadow: 0px 0px 15px 2px ${({ theme, color }) => theme.colors.primary[color]};
  box-shadow: 0px 0px 15px 2px ${({ theme, color }) => theme.colors.primary[color]};
`

export const ResultsCardText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  padding: 10px 0;
`
