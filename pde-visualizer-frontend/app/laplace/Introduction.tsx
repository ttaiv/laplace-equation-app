import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

const Introduction = () => (
  <div>
    <p> Laplace&apos;s equation is a second-order partial differential equation named after French mathematician Pierre-Simon Laplace. </p>
    <p> <InlineMath>{'\\nabla^2 = \\nabla \\cdot \\nabla = \\Delta'}</InlineMath> is the Laplace operator. </p>
    <p> Writing the Laplace operator explicitly, in three dimensions and rectangular coordinates the Laplace eauation takes the form </p>
    <BlockMath>{String.raw`\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 0`}</BlockMath>
    <p> Solutions <InlineMath>{'u = u(x,y,z)'}</InlineMath> to the Laplace equation are called harmonic functions,  which are important in multiple branches of physics. </p>
    <p> Solutions are also incompressible gradient flow fields, having both zero divergence and zero curl.</p>
    <br />
    <p> Laplace&apos;s comes up in the following physical systems</p>
    <ul>
      <li> Steady-state heat conduction </li>
      <li> Electrostatics </li>
      <li> Fluid flow </li>
      <li> Diffusion </li>
      <li> Image inpainting </li>
      <li> Image denoising </li>
    </ul>
  </div>
)

export default Introduction