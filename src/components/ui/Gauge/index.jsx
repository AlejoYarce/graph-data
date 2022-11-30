import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { GaugeContainer, GaugeContent, GaugeCard, GaugeTitle } from './styles'

const Gauge = ({ values }) => {
  return (
    <GaugeContainer>
      <GaugeTitle>Resultados</GaugeTitle>
      <GaugeContent>
        <GaugeCard color='red'>
          <CircularProgressbar
            value={values.red}
            text={`${values.red}%`}
            strokeWidth={3}
            styles={buildStyles({
              textSize: '20px',
              pathTransitionDuration: 1,
              pathColor: `white`,
              textColor: 'white',
              trailColor: 'transparent',
            })}
          />
        </GaugeCard>
        <GaugeCard color='orange'>
          <CircularProgressbar
            value={values.orange}
            text={`${values.orange}%`}
            strokeWidth={3}
            styles={buildStyles({
              textSize: '20px',
              pathTransitionDuration: 1,
              pathColor: `white`,
              textColor: 'white',
              trailColor: 'transparent',
            })}
          />
        </GaugeCard>
        <GaugeCard color='green'>
          <CircularProgressbar
            value={values.green}
            text={`${values.green}%`}
            strokeWidth={3}
            styles={buildStyles({
              textSize: '20px',
              pathTransitionDuration: 1,
              pathColor: `white`,
              textColor: 'white',
              trailColor: 'transparent',
            })}
          />
        </GaugeCard>
      </GaugeContent>
    </GaugeContainer>
  )
}

export default Gauge
