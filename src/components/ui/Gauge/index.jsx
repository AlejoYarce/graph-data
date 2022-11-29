import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { GaugeContainer, GaugeContent, GaugeCard } from './styles'

const Gauge = () => {
  const percentage = 66

  return (
    <GaugeContainer>
      <GaugeContent>
        <GaugeCard color='green'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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
            value={percentage}
            text={`${percentage}%`}
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
        <GaugeCard color='red'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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
