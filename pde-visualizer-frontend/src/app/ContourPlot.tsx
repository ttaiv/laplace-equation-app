// Plot contour plot as a test of the Plotly.js library
'use client'
import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

// Function to calcuate length of a vector, given x and y components
const vectorLength = (x: number, y: number) => {
  return Math.sqrt(x * x + y * y)
}

// Function to calculate value of Fundamental solution of Laplace's equation
const phi = (x: number, y: number) => {
  return - 1/(2*Math.PI) * Math.log(vectorLength(x, y))
}

function linspace(start: number, end: number, num: number) {
  const step = (end - start) / (num - 1);
  return Array.from({length: num}, (_, i) => start + (i * step));
}

function zip(array1: number[], array2: number[]): [number, number][] {
  return array1.map((value, index) => [value, array2[index]]);
}

const ContourPlot = () => {
  const x = linspace(-5, 5, 100)
  const y = linspace(-5, 5, 100)
  const z = zip(x, y).map(([x, y]) => phi(x, y))

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