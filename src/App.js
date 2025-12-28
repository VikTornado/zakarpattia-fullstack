import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { LanguageProvider } from "./LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import DynamicPage from "./components/DynamicPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Advantages from "./pages/Advantages";
import Infrastructure from "./pages/Infrastructure";
import Industry from "./pages/Industry";
import Agriculture from "./pages/Agriculture";
import Economy from "./pages/Economy";
import Opportunities from "./pages/Opportunities";
import Parks from "./pages/Parks";
import Investments from "./pages/Investments";
import RelocatedEnterprises from "./pages/RelocatedEnterprises";
import Contacts from "./pages/Contacts";
import Taxation from "./pages/Taxation";
import Tourism from "./pages/Tourism";
import Energy from "./pages/Energy";
import IT from "./pages/IT";
import Presentation from "./pages/Presentation";
import Education from "./pages/Education";
import Minerals from "./pages/Minerals";
import RecoveryCenter from "./pages/RecoveryCenter";
import CatalogPage from './pages/CatalogPage';
import TastingHallsPage from "./pages/TastingHallsPage";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import CatalogItemDetail from "./pages/CatalogItemDetail";

function App() {
  const basename =
    process.env.NODE_ENV === "production" ? "" : "";

  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Router basename={basename}>
            <Header />
            <main className="flex-grow pt-14 relative overflow-hidden">
              <AnimatedRoutes />
            </main>
            <Footer />
            <ScrollToTop />
          </Router>
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/economy" element={<PageWrapper><Economy /></PageWrapper>} />
        <Route path="/advantages" element={<PageWrapper><Advantages /></PageWrapper>} />
        <Route path="/infrastructure" element={<PageWrapper><Infrastructure /></PageWrapper>} />
        <Route path="/industry" element={<PageWrapper><Industry /></PageWrapper>} />
        <Route path="/agriculture" element={<PageWrapper><Agriculture /></PageWrapper>} />
        <Route path="/investment" element={<PageWrapper><Investments /></PageWrapper>} />
        <Route path="/presentation" element={<PageWrapper><Presentation /></PageWrapper>} />
        <Route path="/it" element={<PageWrapper><IT /></PageWrapper>} />
        <Route path="/opportunities" element={<PageWrapper><Opportunities /></PageWrapper>} />
        <Route path="/parks" element={<PageWrapper><Parks /></PageWrapper>} />
        <Route path="/relocated-enterprises" element={<PageWrapper><RelocatedEnterprises /></PageWrapper>} />
        <Route path="/contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
        <Route path="/taxation" element={<PageWrapper><Taxation /></PageWrapper>} />
        <Route path="/tourism" element={<PageWrapper><Tourism /></PageWrapper>} />
        <Route path="/energy" element={<PageWrapper><Energy /></PageWrapper>} />
        <Route path="/summary" element={<PageWrapper><DynamicPage slug="about-summary" /></PageWrapper>} />
        <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
        <Route path="/minerals" element={<PageWrapper><Minerals /></PageWrapper>} />
        <Route path="/recovery-center" element={<PageWrapper><RecoveryCenter /></PageWrapper>} />
        <Route path="/catalog" element={<PageWrapper><CatalogPage /></PageWrapper>} />
        <Route path="/catalog/:slug" element={<PageWrapper><CatalogItemDetail /></PageWrapper>} />
        <Route path="/tasting-halls" element={<PageWrapper><TastingHallsPage /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/pages/:slug" element={<PageWrapper><DynamicPageWrapper /></PageWrapper>} />          
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

function DynamicPageWrapper() {
  const { slug } = useParams();
  return <DynamicPage slug={slug} />;
}

export default App;
