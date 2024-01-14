import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

const Introduction = () => (
  <div>
    <p> Laplace&apos;s equation is a second-order partial differential equation named after French mathematician Pierre-Simon Laplace. </p>
    <p> <InlineMath>{'\\nabla^2 = \\nabla \\cdot \\nabla = \\Delta'}</InlineMath> is the Laplace operator. </p>
    <p> Writing the Laplace operator explicitly, in three dimensions and rectangular coordinates the Laplace eauation takes the form </p>
    <BlockMath>{String.raw`\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 0`}</BlockMath>
    <p> Solutions <InlineMath>{'u = u(x,y,z)'}</InlineMath> to the Laplace equation are called harmonic functions, which are important in multiple branches of physics. </p>
    <p> 
      Solutions are also incompressible gradient flow fields, 
      having both zero divergence (<InlineMath>{'\\nabla \\cdot u = 0'}</InlineMath>) and zero curl (<InlineMath>{'\\nabla \\times u = 0'}</InlineMath>).
    </p>
    <p> Laplace&apos;s equation comes up for example in the following physical systems:</p>
    <ul>
      <li> 
        Steady-state heat conduction
        <ul>
          <li>u describes temperature distribution that does not change in time <br />
            {'-->'} u satisfies Laplace&apos;s equation, which is known as Fourier&apos;s law of heat conduction in this context. </li>
          <li>
            Example: the temperature distribution in a metal plate with no external 
            heat source when enough time has elapsed so that an equilibrium has been reached (the system is at &quot;steady state&quot;).
          </li>
        </ul>
      </li>
      <li> Electrostatics
        <ul>
          <li>u describes electrostatic potential away from point charges <br />
            {'-->'} u satisfies Laplace&apos;s equation.
          </li>
          <li>
            Furthermore, <InlineMath>{'\\vec{E} = -\\nabla u'}</InlineMath> gives induced electric field.
          </li>
        </ul>
      </li>
      <li> Gravitation
        <ul>
          <li>u describes gravitational potential away from point masses, for example in the solar system far away from planets. <br />
            {'-->'} u satisfies Laplace&apos;s equation.
          </li>
          <li>
            Furthermore, <InlineMath>{'\\vec{F} = -\\nabla u'}</InlineMath> gives gravitation field.
          </li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Introduction