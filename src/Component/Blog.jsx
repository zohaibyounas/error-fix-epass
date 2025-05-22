import { Link } from "react-router-dom";
import PassfotoGesetzesänderung from "../assets/PassfotoGesetzesänderung.jpg";
import { Helmet } from "react-helmet";

const blogs = [
  {
    id: 21,
    title: "Keine Pakete, keine Fallstricke: E-Passtransfer ist fair. Punkt.",
    date: "20. Mai 2025",
    description: "",
    image: "preismodelltransparenzBild.jpg",
    link: "/preismodell-transparenz",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 20,
    title:
      "Behörde kann Bild nicht abrufen? So lösen Sie das Problem – mit einem Anruf in der IT!",
    date: "20. Mai 2025",
    description: "",
    image: "miteinemAnrufinderIT.jpg",
    link: "/firewall-freischaltung-passbildproblem",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 19,
    title:
      "Achtung AWS-Cloud: Warum jeder Passbild-Upload ins Ausland ein Risiko ist – und wie E-Passtransfer jetzt mit der Deutschen Telekom schützt",
    date: "19. Mai 2025",
    description: "",
    image: "blog19.jpg",
    link: "/aws-gefahr-telekom-loesung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 18,
    title:
      "Digitale Passbildpflicht gestartet – doch viele Behörden sind offline. E-Passtransfer liefert jetzt schon.",
    date: "19. Mai 2025",
    description: "",
    image: "DigitalePassbildpflichtgestartet.jpg",
    link: "/behörden-störungen-digitale-passbilder",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 17,
    title:
      "Warum die digitale Fotoübertragung die Zukunft der Identitätsprüfung ist",
    date: "19. Mai 2025",
    description: "",
    image: "Identitätsprüfunbild.png",
    link: "/digital-photo-transfer-id-verification",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 16,
    title:
      "Der einfachste Weg für Studios, digitale Passbilder mit Zertifizierung „in meiner Nähe“ anzubieten",
    date: "19. Mai 2025",
    description: "",
    image: "digitalePassfotos.jpg",
    link: "/find-digital-passport-photo-near-you",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 15,
    title: "So sichert E-Passtransfer die biometrische Konformität in Sekunden",
    date: "16. Mai 2025",
    description: "",
    image: "ePassTransferbiometrischesBild.jpg",
    link: "/ki-biometrische-konformitaet",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 14,
    title: "Sichere Cloud-Uploads: Wie E-Passtransfer Ihre Daten schützt",
    date: "12. Mai 2025",
    description: "",
    image: "SichereCloudUploadsbild.jpg",
    link: "/sichere-cloud-uploads-passfotos",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 13,
    title:
      "E-Passtransfer vs. klassische Passbildmethoden: Der große Vergleich für Fotograf:innen",
    date: "12. Mai 2025",
    description: "",
    image: "DergroßeVergleichfürFotografinnen.jpg",
    link: "/e-passtransfer-vs-traditionelle-methoden",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 12,
    title:
      "Vom Foto zum Pass: Wie QR-Codes die Übermittlung für Fotostudios vereinfachen",
    date: "12. Mai 2025",
    description: "",
    image: "QRCodesdieÜbermittlung.jpg",
    link: "/qr-code-passfoto-uebertragung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 11,
    title: "Warum Fotograf:innen jetzt auf E-Passtransfer umsteigen sollten",
    date: "08. Mai 2025",
    description: "",
    image: "FotografinnenjetztaufEPasstransfer.jpg",
    link: "/e-passtransfer-fuer-fotografen",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 10,
    title: "Wie E-Passtransfer typische Herausforderungen in Fotostudios löst",
    date: "08. Mai 2025",
    description: "",
    image: "typischeHerausforderungeninFotostudios.webp",
    link: "/studio-herausforderungen-loesen",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 9,
    title:
      "Die wichtigsten Vorteile der digitalen Passbildübertragung für Fotograf:innen & Studios",
    date: "08. Mai 2025",
    description: "",
    image: "Passbildübertragung.jpeg",
    link: "/vorteile-digitaler-passfotos",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 8,
    title:
      "So funktioniert E-Passtransfer: Schritt-für-Schritt-Anleitung für Fotograf:innen",
    date: "08. Mai 2025",
    description: "",
    image: "passtransfer-anleitung.jpg",
    link: "/e-passtransfer-anleitung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 7,
    title:
      "Erfahren Sie alles über die neuen gesetzlichen Vorschriften für digitale Passfotos ab Mai 2025.",
    date: "08. Mai 2025",
    description: "",
    image: "digitalePassfotosabMai2025.jpg",
    link: "/passfoto-gesetz-2025",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 6,
    title:
      "Erfahren Sie, warum gedruckte oder selbst hochgeladene Passbilder ab Mai 2025 nicht mehr akzeptiert werden.",
    date: "07. Mai 2025",
    description: "",
    image: "Passbilderab2025abgelehnt.jpg",
    link: "/gedruckte-passfotos-abgelehnt-2025",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 5,
    title:
      "07. Mai 2025 Chaos bei der digitalen Passbildübertragung – e-passtransfer bleibt stabil und menschlich",
    date: "07. Mai 2025",
    description: "",
    image: "passtransferbleibtstabilundmenschlich.jpg",
    link: "/07-Mai-2025-Chaos-bei-der-digitalen-Passbildübertragung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 4,
    title:
      "Aktuelle Information vom 06. Mai 2025: Probleme bei der behördlichen Anbindung der Clouddienste",
    date: "06. Mai 2025",
    description: "",
    image: "AktuelleInformatonvom06Mai 2025.jpg",
    link: "/clouddienste-anbindungsprobleme",
    author: {
      name: "Süleyman Tevrat Acar",
      avatar: "sulo.png",
    },
  },
  {
    id: 3,
    title:
      "05. Mai: E-PassTransfer ab sofort komplett kostenlos und gebührenfrei nutzbar!",
    date: "05. Mai 2025",
    description: "",
    image: "E-PassTransfer ist jetzt komplett gebührenfrei nutzbar.jpg",
    link: "/e-passtransfer-ohne-lizenzgebuehr-05-mai-2025",
    author: {
      name: "Sina Acar",
      avatar: "newsina.jpg",
    },
  },
  {
    id: 2,
    title:
      "02. Mai: Das System läuft – Hunderte Passbild-Übertragungen erfolgreich umgesetzt",
    date: "02. Mai 2025",
    description: "",
    image: "DasSystemläuft.jpg",
    link: "/passbilduebertragungen-erfolgreich-gestartet-02-mai-2025",
    author: {
      name: "ePassTransfer Team",
      avatar: "favicon-3.jpg",
    },
  },
  {
    id: 1,
    title:
      "01. Mai – Es ist so weit: Die digitale Passbildübertragung ist jetzt Pflicht!",
    date: "01. Mai 2025",
    description: "",
    image: "Passbildübertragung ist jetzt Pflicht.jpg",
    link: "/digitale-passbilduebertragung-pflicht-01-mai-2025",
    author: {
      name: "Raza Abbas",
      avatar: "raza.jpg",
    },
  },
];

function Blog() {
  return (
    <>
      <Helmet>
        <title>
          Blog – News zur Passbild-Software, E-Passbild & Gesetz 2025
        </title>
        <meta
          name="description"
          content="Neuigkeiten zur e-passtransfer Software, E-Passbild-Gesetz, digitalen Passbildern & Tipps für Fotografen – alles zur Pflicht ab Mai 2025."
        />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="w-full  flex justify-center mb-10">
          <img
            src={PassfotoGesetzesänderung}
            alt="PassfotoGesetzesänderung"
            className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-center  mb-12">
          Aktuelle News zur Passbild-Digitalisierung & e-passtransfer
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:mx-36 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={blog.link}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-78 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                {blog.description && (
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <a
                      href={blog.author.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {blog.author.name}
                    </a>
                    {blog.author.bio && (
                      <p className="text-sm text-gray-500">{blog.author.bio}</p>
                    )}
                  </div>
                </div>
                <span className="text-blue-600 font-medium hover:underline">
                  Weiterlesen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
