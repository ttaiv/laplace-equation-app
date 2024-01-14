'use client'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css' // to use default style
import CollapsibleHeader from '../components/CollapsibleHeader'
import FundamentalSolution from './FundamentalSolution'
import Introduction from './Introduction'

const LaplacePage = () => {
  return (
    <div>
        <h1>
          The Laplace equation 
          <div style={{display: 'inline-block', width: '10px'}}></div>
          <InlineMath>{String.raw`\nabla^2 u = 0`}</InlineMath>
        </h1>
        <CollapsibleHeader title='Introduction' showInitially={true}>
          <Introduction />
        </CollapsibleHeader>
        <CollapsibleHeader title='Fundamental solution' showInitially={false}>
          <FundamentalSolution />
        </CollapsibleHeader>
      <CollapsibleHeader title='External links' showInitially={false}>
        <ul>
          <li>
            Great <a href='https://youtu.be/nmvs0vrBT18?si=x8IlwLI1fVEjZ-Py'>YouTube video </a>
            by Steve Brunton about Laplace&apos;s equation and Poisson&apos;s equation.
          </li>
          <li>
            <a href='https://en.wikipedia.org/wiki/Laplace%27s_equation'>Wikipedia article </a>
            about Laplace&apos;s equation.
          </li>
        </ul>
      </CollapsibleHeader>
    </div>
  )
}

export default LaplacePage