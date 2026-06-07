import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ProposalsIndex from "./index";
import Propuesta5 from "./pages/Propuesta5";
import Propuesta6 from "./pages/Propuesta6";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProposalsIndex />} />
        <Route path="/propuesta5" element={<Propuesta5 />} />
        <Route path="/propuesta6" element={<Propuesta6 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
