import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useClerk,
} from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';

const clerkFrontendApi = 'pk_test_c3dlZXBpbmctbGFtcHJleS03OS5jbGVyay5hY2NvdW50cy5kZXYk'; // replace with actual

// Custom component to sign out users on load
function SignOutOnLoad({ children }) {
  const { signOut } = useClerk();

  React.useEffect(() => {
    signOut();
  }, []);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <SignOutOnLoad />
        <SignedIn>
          <App />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
