import { useState } from 'react'
import initialData from './notifications'
import NotificationList from './NotificationList'
import './App.css'

export default function App() {
  const [data, setData] = useState(initialData)

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Removes a notification by its id from the current list of notifications.
   * 
/*******  4cb05180-eb1b-4110-8f25-d484b58fac60  *******/
  const removeOne = (id) => {
    setData(data.filter(note => note.id !== id))
  }

  const clearAll = () => {
    setData([])
  }

  return (
    <div className="container">
      <Header count={data.length} onClearAll={clearAll}>
        <h1>Notifications</h1>
      </Header>
      <NotificationList notifications={data} onRemove={removeOne} />
    </div>
  )
}

// This uses the children prop 👇
function Header({ count, onClearAll, children }) {
  return (
    <header style={{ marginBottom: '20px' }}>
      {children}
      <p>{count} notification(s)</p>
      <button onClick={onClearAll}>Clear All</button>
    </header>
  )
}
