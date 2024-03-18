import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import { domain, clientId } from './shared/api/auth';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <StrictMode>
    <App />
  </StrictMode>,
  </Auth0Provider>
)
