'use client'
import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const Scatter3DPlot = ({ x, y, z, u, title }: { x: number[], y: number[], z: number[], u: number[][][], title: string }) => {

  return (
    <Plot
    data={[
      {
        x,
        y, 
        z,
        mode: 'markers',
        type: 'scatter3d',
        marker: {
          size: 3,
          color: u, // use intensity for color coding
          colorscale: 'Viridis', // choose a colorscale
          colorbar: { // add a color bar
            title: 'Intensity', // title of the color bar
            titleside: 'right',
            thickness: 20,
            len: 1,
            outlinewidth: 0,
          }
        }
      }
    ]}
      layout={{
        width: 600,
        height: 600,
        title,
        scene: {
          xaxis: { title: 'X' },
          yaxis: { title: 'Y' },
          zaxis: { title: 'Z' },
        },
      }}
    />
  )
}

export default Scatter3DPlot