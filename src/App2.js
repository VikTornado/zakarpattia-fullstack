import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import { LanguageProvider } from "./LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
// import DynamicPage from "./components/DynamicPage";
import Footer from "./components/Footer";
// import International from "./pages/International";
// import Summary from "./pages/Summary";
import Home from "./pages/Home";
import DynamicPageRoute from "./pages/DynamicPageRoute";


function App() {
  const basename =
    process.env.NODE_ENV === "production" ? "" : "";

  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Router basename={basename}>

          <Header />
          <main className="flex-grow pt-14">
           <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/pages/:slug" element={<DynamicPageRoute />} />
</Routes>
          </main>
          <Footer />
        </Router>
      </div>
      </AuthProvider>
    </LanguageProvider>

  );
}

export default App;
