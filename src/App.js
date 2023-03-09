import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ParentCounter from "./components/counter/ParentCounter";
import DetailForm from "./components/form/DetailForm";
function App() {
  return (
    <>
      <div className="button-box">
        <Link className="button-link" to="counter">
          Counter
        </Link>
        <Link className="button-link" to="detail-form">
          Detail-form
        </Link>
      </div>

      <Routes>
        <Route path="counter" element={<ParentCounter />} />
        <Route path="detail-form" element={<DetailForm />} />
      </Routes>
    </>
  );
}

export default App;
