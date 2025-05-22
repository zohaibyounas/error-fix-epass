import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// GTM + Consent
import ConsentBanner from "./Component/ConsentBanner";
import GTM from "../src/GTM";

// Components
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Map from "./Component/Map";
import Navbar from "./Component/Navbar";
import Registration from "./Component/Registration";
import BioMakeUp from "./Component/BioMakeUp";
import Anforderungen from "./Component/Anforderungen";
import KleidungTips from "./Component/KleidungTips";
import FehlerFoto from "./Component/FehlerFoto";
import GesetzesaenderungEpass from "./Component/GesetzesaenderungEpass";
import FAQS from "./Component/FAQS";
import EpassInformation from "./Component/EpassInformation";
import Behordenbereich from "./Component/Behordenbereich";
import PassbildDigitalisierung from "./Component/PassbildDigitalisierung";
import Impressum from "./Component/Impressum";
import Pressebereich from "./Component/Pressebereich";
import Dataprotection from "./Component/Dataprotection";
import OtpVerification from "./Component/OtpVerification";
import ForgotPass from "./Component/ForgotPass";
import Login from "./Component/Login";
import Armaturenbrett from "./Component/Armaturenbrett";
import Employess from "./Component/Employess";
import ProfileManagment from "./Component/ProfileManagment";
import BusinessStudios from "./Component/BusinessStudios";
import ManagerDashbored from "./Component/ManagerDashbored";
// eslint-disable-next-line no-unused-vars
import EidVerification from "./Component/EidVerfication";
//import SaveCardForm from "./Component/SaveCardForm";
import ManagerDwonloadSoftware from "./Component/ManagerDwonloadSoftware";
import ScrollToTop from "./Component/ScrollToTop";
import AdessoRedirect from "./Component/AdessoRedirect";
import EidVerification1 from "./Component/EidVerification1";
import VideoPage from "./Component/VideoPage";
import Blog from "./Component/Blog";
import Blog1 from "./Component/Blogs1";
import Blogs2 from "./Component/Blogs2";
import Blogs3 from "./Component/Blogs3";
import Blogs4 from "./Component/Blogs4";
import Blogs5 from "./Component/Blog5";
import Blogs6 from "./Component/Blog6";
import Blogs7 from "./Component/Blog7";
import Blogs8 from "./Component/Blog8";
import Blogs9 from "./Component/Blog9";
import Blogs10 from "./Component/Blog10";
import Blogs11 from "./Component/Blog11";
import Blogs12 from "./Component/Blog12";
import Blogs13 from "./Component/Blog13";
import Blogs14 from "./Component/Blog14";
import Blogs15 from "./Component/Blog15";
import Blogs16 from "./Component/Blog16";
import Blogs17 from "./Component/Blog17";
import Blogs18 from "./Component/Blog18";
import Blogs19 from "./Component/Blog19";
import Blogs20 from "./Component/Blog20";
import Blogs21 from "./Component/Blogs21";

// Stripe

function App() {
  const [consent, setConsent] = useState(() => {
    return JSON.parse(sessionStorage.getItem("userConsent")) || null;
  });

  useEffect(() => {
    const updateConsent = () => {
      const latest = JSON.parse(sessionStorage.getItem("userConsent"));
      setConsent(latest);
    };

    window.addEventListener("storage", updateConsent);
    return () => window.removeEventListener("storage", updateConsent);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {/* Load GTM only if consent is given */}
      {consent && (consent.statistics || consent.marketing) && <GTM />}

      {/* Show cookie banner */}
      <ConsentBanner />

      <Navbar />

      <div className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Map />
              </>
            }
          />
          <Route path="/Registrierung" element={<Registration />} />
          <Route path="/make-up" element={<BioMakeUp />} />
          <Route path="/anforderungen-makeup" element={<Anforderungen />} />
          <Route path="/kleidung-Tips" element={<KleidungTips />} />
          <Route path="/Fehler-Foto" element={<FehlerFoto />} />
          <Route
            path="/gesetzesaenderung-Epassfoto"
            element={<GesetzesaenderungEpass />}
          />
          <Route path="/Fotografenportal" element={<EpassInformation />} />
          <Route
            path="/behordenbereich-Information"
            element={<Behordenbereich />}
          />
          <Route path="/Hilfe-Antworten" element={<FAQS />} />
          <Route
            path="/passbild-Digitalisierung"
            element={<PassbildDigitalisierung />}
          />
          <Route path="/map" element={<Map />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/Pressebereich" element={<Pressebereich />} />
          <Route path="/datenschutz" element={<Dataprotection />} />
          <Route path="/Code-Verifizierung" element={<OtpVerification />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Verwaltungsbereich" element={<Armaturenbrett />} />
          <Route path="/Mitarbeitende" element={<Employess />} />
          <Route path="/Profilverwaltung" element={<ProfileManagment />} />
          <Route path="/Geschäftsstandorte" element={<BusinessStudios />} />
          <Route path="/Verwaltungsbreich" element={<ManagerDashbored />} />
          <Route path="/EidVerifizierung" element={<EidVerification1 />} />
          <Route path="/adesso-redirect" element={<AdessoRedirect />} />
          <Route path="/videos" element={<VideoPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/digitale-passbilduebertragung-pflicht-01-mai-2025"
            element={<Blog1 />}
          />
          <Route
            path="/passbilduebertragungen-erfolgreich-gestartet-02-mai-2025"
            element={<Blogs2 />}
          />
          <Route
            path="/e-passtransfer-ohne-lizenzgebuehr-05-mai-2025"
            element={<Blogs3 />}
          />
          <Route path="/clouddienste-anbindungsprobleme" element={<Blogs4 />} />
          <Route
            path="/gedruckte-passfotos-abgelehnt-2025"
            element={<Blogs6 />}
          />
          <Route path="/passfoto-gesetz-2025" element={<Blogs7 />} />
          <Route path="/e-passtransfer-anleitung" element={<Blogs8 />} />
          <Route path="/vorteile-digitaler-passfotos" element={<Blogs9 />} />
          <Route
            path="/studio-herausforderungen-loesen"
            element={<Blogs10 />}
          />
          <Route path="/e-passtransfer-fuer-fotografen" element={<Blogs11 />} />
          <Route path="/qr-code-passfoto-uebertragung" element={<Blogs12 />} />
          <Route
            path="/e-passtransfer-vs-traditionelle-methoden"
            element={<Blogs13 />}
          />
          <Route
            path="/sichere-cloud-uploads-passfotos"
            element={<Blogs14 />}
          />
          <Route path="/ki-biometrische-konformitaet" element={<Blogs15 />} />
          <Route
            path="/find-digital-passport-photo-near-you"
            element={<Blogs16 />}
          />
          <Route
            path="/digital-photo-transfer-id-verification"
            element={<Blogs17 />}
          />
          <Route
            path="/behörden-störungen-digitale-passbilder"
            element={<Blogs18 />}
          />
          <Route path="/aws-gefahr-telekom-loesung" element={<Blogs19 />} />
          <Route path="/preismodell-transparenz" element={<Blogs21 />} />
          <Route
            path="/firewall-freischaltung-passbildproblem"
            element={<Blogs20 />}
          />
          <Route
            path="/07-Mai-2025-Chaos-bei-der-digitalen-Passbildübertragung"
            element={<Blogs5 />}
          />
          <Route
            path="/Software-Download"
            element={<ManagerDwonloadSoftware />}
          />
          {/* <Route
            path="/SaveCardForm"
            element={
              <Elements stripe={stripePromise}>
                <SaveCardForm />
              </Elements>
            }
          /> */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
