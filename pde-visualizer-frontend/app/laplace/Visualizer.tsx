import { useState } from 'react'
import SolutionPlot2D from './SolutionPlot2D'
import SolutionPlot3D from './SolutionPlot3D'
enum PlotState {
  Plot2D,
  Plot3D,
  None
}

const Visualizer = () => {
  const [currentPlot, setCurrentPlot] = useState(PlotState.None)
  console.log('currentPlot', currentPlot)
  return (
    <div>
      <button onClick={() => setCurrentPlot(PlotState.Plot2D)}>Plot 2D</button>
      <button onClick={() => setCurrentPlot(PlotState.Plot3D)}>Plot 3D</button>
      {currentPlot === PlotState.Plot2D && <SolutionPlot2D />}
      {currentPlot === PlotState.Plot3D && <SolutionPlot3D />}
    </div>
  )
}

export default Visualizer