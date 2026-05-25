import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProposalsIndex from "./index";
import Propuesta1 from "./pages/Propuesta1";
import Propuesta2 from "./pages/Propuesta2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProposalsIndex />} />
        <Route path="/propuesta1" element={<Propuesta1 />} />
        <Route path="/propuesta2" element={<Propuesta2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
