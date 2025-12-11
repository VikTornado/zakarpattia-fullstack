import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { LanguageProvider } from "./LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import International from "./pages/International";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
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


function App() {
  const basename =
    process.env.NODE_ENV === "production" ? "/zakarpattia-presentation" : "";

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Router basename={basename}>
          <Header />
          <main className="flex-grow pt-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/about"
                element={<Navigate to="/summary" replace />}
              />
              <Route path="/economy" element={<Economy />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/advantages" element={<Advantages />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/agriculture" element={<Agriculture />} />
              <Route path="/investment" element={<Investments />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/it" element={<IT />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/parks" element={<Parks />} />
              <Route
                path="/relocated-enterprises"
                element={<RelocatedEnterprises />}
              />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/taxation" element={<Taxation />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/energy" element={<Energy />} />
              <Route path="/international" element={<International />} />
              <Route path="/education" element={<Education />} />
              <Route path="/minerals" element={<Minerals />} />
              <Route path="/recovery-center" element={<RecoveryCenter />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/tasting-halls" element={<TastingHallsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
