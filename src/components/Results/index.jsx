
import Gauge from '~app/components/ui/Gauge'
import ResultsCard from '~app/components/ui/ResultsCard'
import { ResultsContainer } from './styles'

const Results = ({ result }) => {
  return (
    <ResultsContainer>
      <Gauge values={result.values} />
      <ResultsCard flags={result.flags} />
    </ResultsContainer>
  )
}

export default Results
