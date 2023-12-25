import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { CalculateLaplaceSolution2D, CalculateLaplaceSolution3D } from "./actions/CalculateLaplaceSolution"
import ContourPlot from '../components/ContourPlot'
import Scatter3DPlot from '../components/3DPlot'

const LaplacePage = async () => {
  const { x, y, z } = await CalculateLaplaceSolution2D(5)
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
        <ContourPlot x={x} y={y} z={z} title='The fundamental solution of Laplace equation, n=2' />
      </div>
    </div>
  )
}

export default LaplacePage