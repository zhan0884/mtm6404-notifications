import { useState } from 'react'

export default function NotificationItem({ data, onRemove }) {
  const [isExiting, setIsExiting] = useState(false)

  const handleClear = () => {
    setIsExiting(true)
    setTimeout(() => {
      onRemove(data.id)
    }, 500) // wait for animation to finish
  }

  return (
    <div className={`notification animate__animated ${isExiting ? 'slideOut' : 'animate__fadeInUp'}`}>
      <p><strong>{data.name}</strong>: {data.message}</p>
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}
