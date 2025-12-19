import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PageHome } from './pages/PageHome/PageHome'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageHome/>
  </StrictMode>,
)
