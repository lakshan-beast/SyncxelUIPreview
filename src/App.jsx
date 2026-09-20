import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterPreviewPage from "./pages/FooterPreviewPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FooterPreviewPage />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
