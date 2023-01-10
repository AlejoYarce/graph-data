import { styled } from '~app/styles/theme'

export const ResultsCardContainer = styled.div`
  width: 100%;
  padding: 0 20px 40px 20px;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 3px;
  }
`

export const ResultsCardContent = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  border: 4px solid ${({ theme, color }) => theme.colors.primary[color]}90;
  /*
  -webkit-box-shadow: 0px 0px 15px 2px ${({ theme, color }) => theme.colors.primary[color]};
  -moz-box-shadow: 0px 0px 15px 2px ${({ theme, color }) => theme.colors.primary[color]};
  box-shadow: 0px 0px 15px 2px ${({ theme, color }) => theme.colors.primary[color]};
  */
`

export const ResultsCardText = styled.p`
  font-size: 14px;
  /* font-weight: 600; */
  line-height: 1.3;
  padding: 10px 0;
`
