'use client'
import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const ContourPlot = ({ x, y, z, title }: { x: number[], y: number[], z: number[][], title: string }) => {
  return (
    <Plot
      data={[
        {
          x,
          y, 
          z,
          type: 'contour'
        }
      ]}
      layout={{
        width: 600,
        height: 600,
        title
      }}
    />
  )
}

export default ContourPlot