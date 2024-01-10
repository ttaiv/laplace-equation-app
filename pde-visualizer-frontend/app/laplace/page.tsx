'use client'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css' // to use default style
import Visualizer from './Visualizer'
import { useState } from 'react'
import CollapsibleHeader from '../components/CollapsibleHeader'

const LaplacePage = () => {
  const [showFundamentalSolution, setShowFundamentalSolution] = useState(false)

  return (
    <div>
        <h1>
          The Laplace equation 
          <div style={{display: 'inline-block', width: '10px'}}></div>
          <InlineMath>{String.raw`\nabla^2 u = 0`}</InlineMath>
        </h1>
        <CollapsibleHeader title='Fundamental solution'>
          <div>
            <p> The fundamental solution of the Laplace equation is given by: </p>
            <p><InlineMath>{String.raw`\Phi(x) = -\frac{1}{2\pi}\ln\left| x \right|`}</InlineMath> in two dimension, </p>
            <p><InlineMath>{String.raw`\Phi(x) = \frac{1}{4\pi |x|}`}</InlineMath> in three dimensions. </p>
            <h3>Visualize!</h3>
            <Visualizer />
          </div>
        </CollapsibleHeader>
    </div>
  )
}

export default LaplacePage