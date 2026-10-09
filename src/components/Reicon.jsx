import { useEffect, useRef } from 'react'

function Reicon({ icon, size }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const element = icon({ size })
    container?.replaceChildren(element)

    return () => {
      container?.replaceChildren()
    }
  }, [icon, size])

  return <span ref={containerRef} aria-hidden="true" />
}

export default Reicon
