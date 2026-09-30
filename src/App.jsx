import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FooterPreviewPage from "./pages/FooterPreviewPage";
import LandingPreviewPage from "./pages/LandingPreviewPage";
import DevelopingPage from "./pages/DevelopingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/footers" replace />} />

        {/* Preview Routes */}
        <Route path="/footers" element={<FooterPreviewPage />} />
        <Route path="/landing" element={<LandingPreviewPage />} />

        <Route path="*" element={<DevelopingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
