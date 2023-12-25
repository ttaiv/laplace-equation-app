'use server'

import linspace from '@stdlib/array-linspace'

// Function to calcuate length of a vector, given x and y components
const vectorLength = (...args: number[]) => {
  return Math.sqrt(args.reduce((sum, val) => sum + val * val, 0));
}

// Function to calculate value of Fundamental solution of Laplace's equation
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

export const CalculateLaplaceSolution3D = async (size: number,): Promise<{ x: number[], y: number[], z: number[], u: number[] }> => {
  const x = Array.from(linspace(-size, size, 100))
  const y = Array.from(linspace(-size, size, 100))
  const z = Array.from(linspace(-size, size, 100))
  const u = new Array(x.length).fill(0).map(() => new Array(y.length).fill(0).map(() => new Array(z.length).fill(0)));

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      for (let k = 0; k < z.length; k++) {
        u[i][j][k] = phi3D(x[i], y[j], z[k])
      }
    }
  }

  // Flatten the u array to 1D
  const flatU = u.flat(3);

  return Promise.resolve({ x, y, z, u: flatU })
}