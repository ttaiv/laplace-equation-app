'use client'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css' // to use default style
import { useState } from 'react'
import CollapsibleHeader from '../components/CollapsibleHeader'
import FundamentalSolution from './FundamentalSolution'

const LaplacePage = () => {
  const [showFundamentalSolution, setShowFundamentalSolution] = useState(false)

  return (
    <div>
        <h1>
          The Laplace equation 
          <div style={{display: 'inline-block', width: '10px'}}></div>
          <InlineMath>{String.raw`\nabla^2 u = 0`}</InlineMath>
        </h1>
        <CollapsibleHeader title='Introduction' showInitially={true}> </CollapsibleHeader>
        <CollapsibleHeader title='Fundamental solution' showInitially={false}>
          <FundamentalSolution />
        </CollapsibleHeader>
      <CollapsibleHeader title='External links' showInitially={false}> </CollapsibleHeader>
    </div>
  )
}

export default LaplacePage