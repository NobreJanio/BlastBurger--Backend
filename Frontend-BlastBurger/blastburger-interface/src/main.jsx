import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalStyles';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    
    <RouterProvider router={router} />
    <ToastContainer autoClose={2000} theme='colored' />
  </StrictMode>,
);