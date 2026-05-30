import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ProposalsIndex from "./index";
import Propuesta1 from "./pages/Propuesta1";
import Propuesta2 from "./pages/Propuesta2";
import Propuesta3 from "./pages/Propuesta3";
import Propuesta4 from "./pages/Propuesta4";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProposalsIndex />} />
        <Route path="/propuesta1" element={<Propuesta1 />} />
        <Route path="/propuesta2" element={<Propuesta2 />} />
        <Route path="/propuesta3" element={<Propuesta3 />} />
        <Route path="/propuesta4" element={<Propuesta4 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
