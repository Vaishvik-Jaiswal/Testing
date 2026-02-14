import { useState } from 'react'
import './App.css'

/**
 * Root application component.
 * Renders a simple welcome view with a minimal counter demo.
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Testing</h1>
      <p className="subtitle">Simple React frontend Vaishvik & Ankita</p>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          aria-label="Increment count"
        >
          Count: {count}
        </button>
        <button
          type="button"
          onClick={() => setCount((c) => c - 1)}
          aria-label="Decrement count"
        >
          Counting: {count}
        </button>

      </div>
    </main>
  )
}

export default App
