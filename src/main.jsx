import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Bootstrap first, then our ported Webflow design system so ours wins.
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'

import App from './App.jsx'

// Matches Vite's base so routes resolve under a GitHub Pages subpath (/<repo>/)
// and under '/' locally. Trailing slash stripped for react-router.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
