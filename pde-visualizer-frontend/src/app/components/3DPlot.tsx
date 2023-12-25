'use client'
import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const Scatter3DPlot = ({ x, y, z, u, title }: { x: number[], y: number[], z: number[], u: number[] , title: string }) => {
  return (
    <Plot
    data={[
      {
        x,
        y,
        z,
        mode: 'markers',
        marker: {
          size: 5,
          color: u,
          colorscale: 'Viridis',
          colorbar: { // add a color bar
            title: 'Intensity', // title of the color bar
            titleside: 'right',
            thickness: 20,
            len: 1,
            outlinewidth: 0,
          },
        },
        type: 'scatter3d',
 
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
  );
}

export default Scatter3DPlot