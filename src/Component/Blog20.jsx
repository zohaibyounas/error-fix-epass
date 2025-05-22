import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import miteinemAnrufinderIT from "../assets/miteinemAnrufinderIT.jpg";
import { Helmet } from "react-helmet";

const Blogs20 = () => {
  return (
    <>
      <Helmet>
        <title>
          Passbild nicht abrufbar? Behörden müssen E-Passtransfer freischalten
        </title>
        <meta
          name="description"
          content="Bei Problemen mit dem Bildabruf liegt es oft an der Firewall der Behörde. So helfen Fotograf:innen schnell weiter."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={miteinemAnrufinderIT}
              alt="Behörde kann Bild nicht abrufen? So lösen Sie das Problem – mit einem Anruf in der IT!"
              className="w-full h-72 object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Behörde kann Bild nicht abrufen? So lösen Sie das Problem – mit
              einem Anruf in der IT!
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 20. Mai 2025 • Von E-passtransfer Team
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/favicon-3.jpg"
                alt="E-passtransfer Team"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-base">E-passtransfer Team</p>
                <p className="text-gray-500 text-sm">e-passtransfer GmbH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <b>
              Aktuell häufen sich Rückmeldungen:Das Passbild ist nicht abrufbar.
            </b>
            <br></br> Liebe Fotograf:innen, wenn Ihnen Ihre Kund:innen
            mitteilen, dass das Bild im Bürgeramt nicht abrufbar ist, liegt das
            nicht an Ihrer Software oder Ihrer Übertragung. E-Passtransfer ist
            live. 100 % betriebsbereit. Die Ursache: Die IT-Abteilungen vieler
            Behörden haben unsere Server noch nicht freigeschaltet.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Lösung: Die Behörde muss E-Passtransfer in der Firewall freigeben
          </h2>
          <p>Was Sie als Studio tun können:</p>
          <ul className="list-disc ml-4 space-y-2">
            <li>
              Empfehlen Sie Ihrer Kundin oder Ihrem Kunden, dass die Behörde
              bitte:
            </li>
            <ul className="list-disc  space-y-2">
              <li>die eigene IT-/EDV-Abteilung kontaktiert</li>
              <li>
                und dort die Freischaltung der Domain *.e-passtransfer.de (inkl.
                Subdomains) in der Firewall / Webfilter beantragt
              </li>
            </ul>
            <li>Damit ist der Abruf innerhalb weniger Minuten möglich</li>
            <li>
              Die Übertragung war erfolgreich – nur der Zugriff ist blockiert
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Informationen aus erster Hand: Die Bundesdruckerei ist informiert
          </h2>
          <p>
            Wir haben heute mit der Bundesdruckerei telefoniert. Dort ist das
            Problem bekannt. Eine Rundmail an alle Fachverfahren und kommunalen
            Stellen ist angekündigt, damit E-Passtransfer bundesweit reibungslos
            funktioniert. Wir erwarten, dass die Behörden zeitnah informiert
            werden. Solange gilt: Bitte machen Sie Ihre Kund:innen auf diese
            Lösung aufmerksam!
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            So reagieren Sie professionell bei Kund:innen-Nachfragen:
          </h2>
          <blockquote className="border-l-4 border-yellow-300 pl-4 italic bg-gray-50 p-4 rounded">
            &quot;Das Bild wurde erfolgreich übermittelt. Sollte Ihre Behörde
            das Bild nicht abrufen können, bitten Sie dort um Kontakt mit der
            IT-Abteilung. Es muss lediglich *.e-passtransfer.de in der Firewall
            freigeschaltet werden – dann klappt der Abruf sofort.&quot;
          </blockquote>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              E-Passtransfer läuft – aber die Behörden müssen uns durchlassen.
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🟢</span>
                <span>Wir sind zertifiziert, aktiv und voll konform</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔐</span>
                <span>Die Übertragung erfolgt verschlüsselt und sicher</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📩</span>
                <span>Der QR-Code funktioniert – wenn man uns lässt.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <a
              href="mailto:support@e-passtransfer.de"
              className="inline-flex items-center px-3 py-4 text-sm bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors lg:w-[400px]"
            >
              Jetzt informieren & Problem vermeiden – zur Technik-Seite
            </a>

            <a
              href="mailto:support@e-passtransfer.de"
              className="inline-flex items-center px-3 py-3 text-sm bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors lg:w-[400px]"
            >
              Support kontaktieren – wir helfen gern weiter
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #epasstransfer
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #firewallfreigabe
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #passbildübertragung
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #bürgerservice
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #datensicherheit
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #bundesdruckerei
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #livebetrieb
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #behördehilfe
            </span>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-8 flex flex-col space-y-6">
          <h3 className="text-xl font-semibold">Teilen Sie unsere Blogs</h3>
          <div className="flex flex-wrap gap-4 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61575091301676"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://www.twitter.com"
              className="text-blue-400 hover:underline flex items-center gap-2"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="mailto:info@e-passtransfer.de"
              className="flex items-center gap-2 text-gray-600 hover:underline"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-blue-700 hover:underline flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/e_passtransfer/?hl=en"
              className="text-pink-600 hover:underline flex items-center gap-2"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@e_passtransfer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:underline"
            >
              <FaTiktok /> TikTok
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs20;
