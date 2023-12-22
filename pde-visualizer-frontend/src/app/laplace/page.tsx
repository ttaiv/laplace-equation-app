import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

const LaplacePage = () => {
  return (
    <div>
      <div>
        <h1>The Laplace Equation</h1>
        <InlineMath>{String.raw`\nabla^2 u = 0`}</InlineMath>
      </div>
      <div>
        <h2>The fundamental solution</h2>
        <p>
          The fundamental solution of the Laplace equation in two dimension is given by:
        </p>
        <BlockMath>{String.raw`\Phi(x) = -\frac{1}{2\pi}\ln\left| x \right|`}</BlockMath>
        
      </div>
    </div>
  )
}

export default LaplacePage