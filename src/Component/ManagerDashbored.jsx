import { AiOutlineIdcard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FiUserMinus } from "react-icons/fi";
import { GoDesktopDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ManagerDashbored = () => {
  const [userType, setUserType] = useState("");
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchUserType = async () => {
      const token = sessionStorage.getItem("authToken");
      const response = await fetch(`${base_url}/photobooth/profile/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      // console.log(data);
      setUserType(data.user_type); // "employee", "manager", "owner"
    };
    fetchUserType();
  }, []);

  const disabledCardClass = "pointer-events-none opacity-50 cursor-not-allowed";

  return (
    <div className="flex flex-col bg-gray-50 py-8 lg:mb-24">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
          Mitarbeitendenbereich – E-Passtransfer
        </h1>
        <p className="text-sm sm:text-base lg:text-base text-gray-700">
          Die verfügbaren Funktionen variieren je nach zugewiesener Rolle und
          Berechtigung.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {/* Card 1 - Always enabled */}
          <Link
            to="/Profilverwaltung"
            className="bg-white shadow-md rounded-xl p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 h-[140px]"
          >
            <CiUser className="text-gray-400 mt-2" size={30} />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold">
                Profilverwaltung
              </h3>
              <p className="text-gray-500 text-sm">
                Profildaten & Passwort verwalten.
              </p>
            </div>
          </Link>

          {/* Card 2 - Disabled only for employee */}
          {userType === "employee" ? (
            <div
              className={`bg-white shadow-md rounded-xl p-5 flex items-start space-x-4 transition-shadow duration-300 h-[140px] ${disabledCardClass}`}
            >
              <FiUserMinus className="text-gray-400 mt-1" size={40} />
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-semibold">
                  Mitarbeitende einladen
                </h3>
                <p className="text-gray-500 text-sm">
                  Nur für berechtigte Nutzer zugänglich.
                </p>
              </div>
            </div>
          ) : (
            <Link
              to="/Mitarbeitende"
              className="bg-white shadow-md rounded-xl p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 h-[140px]"
            >
              <FiUserMinus className="text-gray-400 mt-1" size={40} />
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-semibold">
                  Mitarbeitende einladen
                </h3>
                <p className="text-gray-500 text-sm">
                  Laden Sie neue Mitarbeitende zur Registrierung ein.
                </p>
              </div>
            </Link>
          )}

          {/* Card 3 - Always enabled */}
          <Link
            to="/EidVerifizierung"
            className="bg-white shadow-md rounded-xl p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 h-[140px]"
          >
            <AiOutlineIdcard className="text-gray-400 mt-2" size={40} />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold">
                eID-Verifizierung
              </h3>
              <p className="text-gray-500 text-sm">
                Identitätsprüfung über unseren Partner Adesso.
              </p>
            </div>
          </Link>

          {/* Card 4 - Disabled only for employee */}
          {userType === "employee" ? (
            <div
              className={`bg-white shadow-md rounded-xl p-5 flex items-start space-x-4 transition-shadow duration-300 h-[140px] ${disabledCardClass}`}
            >
              <GoDesktopDownload className="text-gray-400 mt-2" size={40} />
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-semibold">
                  Software herunterladen
                </h3>
                <p className="text-gray-500 text-sm">
                  Diese Funktion ist für Sie nicht verfügbar.
                </p>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashbored;
