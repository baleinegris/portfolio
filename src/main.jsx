import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import('./App.jsx')); // Lazy load the App component
import './index.css'
import WebsiteLoader from './components/WebsiteLoader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<WebsiteLoader/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
