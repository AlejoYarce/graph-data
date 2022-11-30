import React from 'react'

import { ResultsCardContainer, ResultsCardContent, ResultsCardText } from './styles'

const ResultsCard = ({ data, color }) => (
  <ResultsCardContainer>
    <ResultsCardContent color={color}>
      {data[color].map((item, idx) => (
        <ResultsCardText key={`${item}-${idx}`}>{item}</ResultsCardText>
      ))}
    </ResultsCardContent>
  </ResultsCardContainer>
)

export default ResultsCard
