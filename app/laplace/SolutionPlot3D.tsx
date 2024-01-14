import { CalculateLaplaceSolution3D } from './calculateLaplaceSolution'
import Scatter3DPlot from '../components/3DPlot'

const SolutionPlot3D = () => {
  const { x, y, z, u } = CalculateLaplaceSolution3D(5) // this takes some time
  return (
    <div>
      <Scatter3DPlot x={x} y={y} z={z} u={u} title='The fundamental solution of Laplace equation, n=3' />
    </div>
  )
}

export default SolutionPlot3D