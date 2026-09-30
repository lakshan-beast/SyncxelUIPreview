import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPreviewPage from "./pages/LandingPreviewPage";

import NavbarPreviewPage from "./pages/NavbarsPreviewPage";
import HeroPreviewPage from "./pages/HeroPreviewPage";
import AuthPreviewPage from "./pages/AuthPreviewPage";
import FeaturesPreviewPage from "./pages/FeaturesPreviewPage";
import PricingPreviewPage from "./pages/PricingPreviewPage";
import TestimonialsPreviewPage from "./pages/TestimonialsPreviewPage";
import FAQPreviewPage from "./pages/FaqPreviewPage";
import FooterPreviewPage from "./pages/FooterPreviewPage";

import DevelopingPage from "./pages/DevelopingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/navbar" replace />} />

        {/* Preview Routes */}
        <Route path="/navbars" element={<NavbarPreviewPage />} />
        <Route path="/hero" element={<HeroPreviewPage />} />
        <Route path="/auth" element={<AuthPreviewPage />} />
        <Route path="/features" element={<FeaturesPreviewPage />} />
        <Route path="/pricing" element={<PricingPreviewPage />} />
        <Route path="/testimonials" element={<TestimonialsPreviewPage />} />
        <Route path="/faq" element={<FAQPreviewPage />} />
        <Route path="/footers" element={<FooterPreviewPage />} />

        <Route path="/landing" element={<LandingPreviewPage />} />

        <Route path="*" element={<DevelopingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
