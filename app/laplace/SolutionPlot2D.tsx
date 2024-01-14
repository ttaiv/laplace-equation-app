import { CalculateLaplaceSolution2D } from './calculateLaplaceSolution'
import { useState, useEffect } from 'react'
import ContourPlot from '../components/ContourPlot'

interface Solution {
  x: number[],
  y: number[],
  z: number[][]
}

const SolutionPlot2D = () => {
  const [solution, setSolution] = useState<Solution | null>(null)

  useEffect(() => {
    const calculateSolution = () => {
      const result = CalculateLaplaceSolution2D(5) // this takes some time
      setSolution(result)
    }
    calculateSolution()
  }, [])

  return (
    <div>
      {solution === null ? <p>Calculating...</p> 
        : <ContourPlot x={solution.x} y={solution.y} z={solution.z} title='The fundamental solution of Laplace equation, n=2' />
      }
    </div>
  )
}

export default SolutionPlot2D