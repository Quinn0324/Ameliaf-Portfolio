import { useEffect, useRef, useState } from 'react'

// Lightweight scroll/load reveal that stands in for the site's Webflow IX2
// translate-in interactions. Adds `is-in` once the element enters the viewport.
export default function Reveal({ from = 'up', as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const classes = ['reveal', `from-${from}`, inView ? 'is-in' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
