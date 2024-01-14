import { ReactNode, useState } from 'react'

const CollapsibleHeader = ({ title, children, showInitially }: { title: String, children: ReactNode, showInitially: Boolean }) => {
  const [show, setShow] = useState(showInitially)

  return (
    <div>
      <h2 onClick={() => setShow(!show)} style={{cursor: 'pointer'}}> 
        {show ? '˄' : '˅'} {title}
      </h2>
      {show && children}
    </div>
  )
}

export default CollapsibleHeader