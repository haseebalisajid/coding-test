import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Welcome from './Welcome';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
      </Routes>
      <ToastContainer
        style={{ fontSize: '16px' }}
        theme='dark'
        position='bottom-right'
      />
    </>
  );
}
