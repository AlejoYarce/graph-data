import { styled } from '~app/styles/theme'
import { mq } from '~app/styles/media'

export const GaugeContainer = styled.div`
  width: 100%;
  padding: 50px 20px;
  max-width: ${({ theme }) => theme.breakpoints.lg}px;

  ${mq('md')`
    padding: 50px 22px;
  `}
`
export const GaugeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${mq('md')`
    gap: 40px;
  `}
`
export const GaugeCard = styled.div`
  width: 105px;
  height: 105px;
  background-color: ${({ theme, color }) => theme.colors.primary[color]};
  border-radius: 50%;
  padding: 10px;

  /* ${mq('sm')`
    width: 120px;
    height: 120px;
  `}

  ${mq('md')`
    width: 200px;
    height: 200px;
  `} */
`
