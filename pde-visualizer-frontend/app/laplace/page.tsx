import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { CalculateLaplaceSolution2D, CalculateLaplaceSolution3D } from "./actions/CalculateLaplaceSolution"
import ContourPlot from '../components/ContourPlot'
import Scatter3DPlot from '../components/3DPlot'

const Solution2D = async () => {
  const { x, y, z } = await CalculateLaplaceSolution2D(5)
  return (
    <div>
      <p> The fundamental solution of the Laplace equation in two dimension is given by: </p>
      <BlockMath>{String.raw`\Phi(x) = -\frac{1}{2\pi}\ln\left| x \right|`}</BlockMath>
      <ContourPlot x={x} y={y} z={z} title='The fundamental solution of Laplace equation, n=2' />
    </div>
  )
}

const Solution3D = async () => {
  const { x, y, z, u } = await CalculateLaplaceSolution3D(5)
  return (
    <div>
      <p> The fundamental solution of the Laplace equation in three dimension is given by: </p>
      <BlockMath>{String.raw`\Phi(x) = \frac{1}{4\pi |x|}`}</BlockMath>
      <Scatter3DPlot x={x} y={y} z={z} u={u} title='The fundamental solution of Laplace equation, n=3' />
    </div>
  )
}

const LaplacePage = () => {
  return (
    <div>
        <h1>
          The Laplace equation 
          <div style={{display: 'inline-block', width: '10px'}}></div>
          <InlineMath>{String.raw`\nabla^2 u = 0`}</InlineMath>
        </h1>
        <h2>The fundamental solution</h2>
        <Solution2D />
        <Solution3D />
    </div>
  )
}

export default LaplacePage