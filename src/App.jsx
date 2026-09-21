import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterPreviewPage from "./pages/FooterPreviewPage";
import LandingPagesPreviewPage from "./pages/LandingPreview"; // ⚠️ ඔයාගේ ෆိုင်ල් නේම් එක අනුව මෙක වෙනස් කරගන්න
import PageNotFound from "./pages/PageNotFound";

// Root එකට (/ ) එන අයව ප්‍රධාන සයිට් එකට රීඩිරෙක්ට් කරන කම්පොනන්ට් එක
function RootRedirect() {
  window.location.replace("https://syncxel.vercel.app");
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Root URL එකට (syncxel-ui-preview.vercel.app/) ආවොත් ප්‍රධාන සයිට් එකට යයි */}
        {/* <Route path="/" element={<RootRedirect />} /> */}

        {/* 2. Footer Preview Route */}
        <Route path="/" element={<FooterPreviewPage />} />

        {/* 3. Landing Pages Preview Route */}
        <Route path="/landing" element={<LandingPagesPreviewPage />} />

        {/* 4. වැරදි URL එකක් දැමුවහොත් 404 පෙන්වයි */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}