'use server'
import linspace from '@stdlib/array-linspace'

// Function to calcuate length of a vector, given x and y components
const vectorLength = (...args: number[]) => {
  return Math.sqrt(args.reduce((sum, val) => sum + val * val, 0));
}

// Functions to calculate value of fundamental solution of Laplace's equation at one point
const phi2D = (x: number, y: number) => {
  return - 1/(2*Math.PI) * Math.log(vectorLength(x, y))
}
const phi3D = (x: number, y: number, z: number) => {
  const r = vectorLength(x, y, z)
  if (r === 0) {
    return 0
  }
  return 1/(4*Math.PI) * 1/r
}

export const CalculateLaplaceSolution2D = async (size: number): Promise<{ x: number[], y: number[], z: number[][] }> => {
  const x = Array.from(linspace(-size, size, 100))
  const y = Array.from(linspace(-size, size, 100))

  const z = x.map((xVal) => y.map((yVal) => phi2D(xVal, yVal)))

  return Promise.resolve({ x, y, z })
}

// Calculates solution u, it is flattened to a 1D array
// Also returns compatible x, y and z arrays
export const CalculateLaplaceSolution3D = 
  async (size: number,): Promise<{ x: number[], y: number[], z: number[], u: number[] }> => {
  const axis = Array.from(linspace(-size, size, 5)) // x, y and z axis are the same
  const n = axis.length
  const u = Array(axis.length * axis.length * axis.length)
  const x = Array(axis.length * axis.length * axis.length)
  const y = Array(axis.length * axis.length * axis.length)
  const z = Array(axis.length * axis.length * axis.length)
  let index = 0
  for (let i = 0; i < n; i++) {
    const xVal = axis[i]
    for (let j = 0; j < n; j++) {
      const yVal = axis[j]
      for (let k = 0; k < n; k++) {
        const zVal = axis[k]
        u[index] = phi3D(xVal, yVal, zVal)
        x[index] = xVal
        y[index] = yVal
        z[index] = zVal
        index++
      }
    }
  }
  return Promise.resolve({ x, y, z, u })
}
