// Plot contour plot as a test of the Plotly.js library
'use client'
import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const ContourPlot = () => {
  const x = [1, 2, 3, 4, 5]
  const y = [1, 2, 3, 4, 5]
  const z = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9]
  ]

  return (
    <Plot
      data={[
        {
          x: x,
          y: y,
          z: z,
          type: 'contour'
        }
      ]}
      layout={{
        width: 600,
        height: 600,
        title: 'Contour Plot'
      }}
    />
  )
}

export default ContourPlot