import { ReactNode, useState } from 'react'

const CollapsibleHeader = ({ title, children }: { title: String, children: ReactNode }) => {
  const [show, setShow] = useState(false)

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