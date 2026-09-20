import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterPreviewPage from "./pages/FooterPreviewPage";
import LandingPage from "./pages/LandingPreview";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/footer" element={<FooterPreviewPage />} />

        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
