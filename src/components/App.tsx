import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Welcome from "./Welcome";
import Login from "./Login";
import Transactions from "./Transactions";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Welcome />} path="Welcome" />
        <Route index element={<Login />} />
        <Route index element={<Transactions />} path="Transactions" />
      </Routes>
      <ToastContainer
        style={{ fontSize: "16px" }}
        theme="dark"
        position="bottom-right"
      />
    </>
  );
}
