import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './Login';

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme="dark" position="bottom-right" />
    </>
  );
}
