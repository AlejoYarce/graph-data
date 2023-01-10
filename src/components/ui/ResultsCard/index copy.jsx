import React from 'react'

import { ResultsCardContainer, ResultsCardContent, ResultsCardText } from './styles'

const ResultsCard = ({ title, data, color }) => data[color].length > 0 && (
  <ResultsCardContainer>
    <h2>{title}</h2>
    <ResultsCardContent color={color}>
      {data[color].map((item, idx) => (
        <ResultsCardText key={`${item}-${idx}`}>{item}</ResultsCardText>
      ))}
    </ResultsCardContent>
  </ResultsCardContainer>
)

export default ResultsCard
