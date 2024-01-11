import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css' // to use default style
import Visualizer from './Visualizer'

const FundamentalSolution = () => (
  <div>
    <p> The fundamental solution of the Laplace equation is given by: </p>
    <p><InlineMath>{String.raw`\Phi(x) = -\frac{1}{2\pi}\ln\left| x \right|`}</InlineMath> in two dimension, </p>
    <p><InlineMath>{String.raw`\Phi(x) = \frac{1}{4\pi |x|}`}</InlineMath> in three dimensions. </p>
    <h3>Visualize!</h3>
    <Visualizer />
  </div>
)

export default FundamentalSolution