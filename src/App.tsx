import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { OurWorkPage } from "./pages/OurWorkPage";
import { OurImpactPage } from "./pages/OurImpactPage";
import { ConsortiumPage } from "./pages/ConsortiumPage";
import { ContactPage } from "./pages/ContactPage";
import { NewsPage } from "./pages/NewsPage";
import { Newsletter1Page } from "./pages/Newsletter1Page";
import { MSCAAnniversaryPage } from "./pages/MSCAAnniversaryPage";
import { OREBriefingPage } from "./pages/OREBriefingPage";

export default function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/workshop-1-newsletter" element={<Newsletter1Page />} />
          <Route path="/news/msca-30th-anniversary" element={<MSCAAnniversaryPage />} />
          <Route path="/news/open-research-europe-2026" element={<OREBriefingPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/our-impact" element={<OurImpactPage />} />
          <Route path="/consortium" element={<ConsortiumPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Layout>
  );
}
