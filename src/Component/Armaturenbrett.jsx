/* eslint-disable no-irregular-whitespace */
import { Users, ShieldCheck, Building } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { GoDesktopDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoVideocamOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full lg:mb-16">
      <h1 className="text-base font-bold mx-auto text-black px-6 lg:px-32 mt-12 mb-8">
        Willkommen im Verwaltungsbereich. Verwalten Sie hier Ihre Profildaten,
        Mitarbeitenden, eID-Verifizierung und Standorte.
      </h1>
      <div className="mt-16 py-2 flex items-center justify-center px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 w-full max-w-screen-lg mx-auto">
          {/* Card 1 */}
          <Link
            to="/Profilverwaltung"
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[140px]"
          >
            <FaRegUser className="text-gray-400 mt-1 flex-shrink-0" size={33} />
            <div>
              <h3 className="text-lg font-semibold">Profilverwaltung</h3>
              <p className="text-gray-500 text-sm">
                Profildaten & Passwort verwalten.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/Mitarbeitende"
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[140px]"
          >
            <Users className="text-gray-400 mt-1 flex-shrink-0" size={40} />
            <div>
              <h3 className="text-lg font-semibold">Mitarbeitende verwalten</h3>
              <p className="text-gray-500 text-sm">
                Berechtigungen für das eID-Verfahren zuweisen und verwalten.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/EidVerifizierung"
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer lg:h-[140px] h-[170px]"
          >
            <ShieldCheck
              className="text-gray-400 mt-1 flex-shrink-0"
              size={40}
            />
            <div>
              <h3 className="text-lg font-semibold">eID-Verifizierung</h3>
              <p className="text-gray-500 text-sm">
                Für die Nutzung des Systems ist eine Identitätsprüfung über
                unseren Partner Adesso erforderlich. Dies erfolgt mithilfe Ihres
                Personalausweises über das eID-Verfahren.
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/Geschäftsstandorte"
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[140px]"
          >
            <Building className="text-gray-400 mt-1 flex-shrink-0" size={40} />
            <div>
              <h3 className="text-lg font-semibold">
                Gewerbe, Studios & Standorte
              </h3>
              <p className="text-gray-500 text-sm">
                Verwalten Sie Ihre eigenen Gewerbebetriebe, Studios und
                Standorte.
              </p>
            </div>
          </Link>

          {/* Card 5: Software herunterladen */}
          <Link
            to="/Software-Download"
            className="bg-white shadow-md rounded-xl p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 h-[140px]"
          >
            <GoDesktopDownload className="text-gray-400 mt-2" size={40} />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold">
                Software herunterladen
              </h3>
              <p className="text-gray-500 text-sm">
                Laden Sie die E-Passtransfer-Software herunter.
              </p>
            </div>
          </Link>

          {/* Card 6: Tutorial-Videos */}
          <Link
            to="/videos"
            className="bg-white shadow-md rounded-xl p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 h-[140px]"
          >
            <IoVideocamOutline
              className="text-gray-400 mt-1 flex-shrink-0"
              size={40}
            />
            <div>
              <h3 className="text-lg font-semibold">Anleitungsvideos</h3>
              <p className="text-gray-500 text-sm">
                Sehen Sie sich die Anleitungsvideos zur Softwareverwaltung an.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
