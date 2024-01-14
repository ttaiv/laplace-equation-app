import { CalculateLaplaceSolution3D } from './calculateLaplaceSolution'
import Scatter3DPlot from '../components/3DPlot'

const SolutionPlot3D = () => {
  const { x, y, z, u } = CalculateLaplaceSolution3D(5) // this takes some time
  return (
    <div>
      <Scatter3DPlot x={x} y={y} z={z} u={u} title='The fundamental solution of Laplace equation, n=3' />
      <p>3D plot is a bit harder to interpret than 2D plot. <br />
      Important is that the value (color of the point that can be for example temperature or potential) of the solution
      is smaller the further away from the origin. <br />
      When thinking in terms of potential, fundamental solution is the potential induced by a point charge placed at origin.<br />
      Solution is not defined at the origin and is plotted as zero there. <br  />
      </p>
      <p> You can see that 2D plot behaves very similarly.</p>
    </div>
  )
}

export default SolutionPlot3D