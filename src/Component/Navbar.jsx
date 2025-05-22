import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo3.jpg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(""); // "owner", "manager", "employee"
  const location = useLocation();
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const menuRef = useRef(); // Ref for detecting outside clicks

  // Check login state and get user type on page load and route change
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    setIsLoggedIn(!!token);

    if (token) {
      fetch(`${base_url}/photobooth/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          if (res.status === 401) {
            // Token expired or invalid
            handleLogout(); // Automatically log out the user
            return;
          }

          const data = await res.json();
          if (data?.user_type) {
            setUserType(data.user_type);
          }
        })
        .catch((err) => {
          console.error("Fehler beim Abrufen der Benutzerrolle:", err);
        });
    }
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUserType("");
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top when navigating
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-evenly items-center px-4 sm:px-6 lg:px-8 p-4 gap-4">
        {/* Logo Section */}
        <div className="flex items-center justify-center w-auto">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto max-w-[250px] object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-600 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links */}
        <nav
          ref={menuRef}
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full bg-white lg:w-auto z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block space-y-4 py-4" : "hidden"
          }`}
        >
          <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-6">
            <Link
              to="/"
              className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
              onClick={() => handleNavigation("/")}
            >
              Überblick
            </Link>
            <Link
              to="/passbild-Digitalisierung"
              className="block text-center text-gray-600 font-medium transition text-sm hover:text-blue-600"
              onClick={() => handleNavigation("/passbild-Digitalisierung")}
            >
              Passbild-Digitalisierung
            </Link>
            <Link
              to="/Hilfe-Antworten"
              className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
              onClick={() => handleNavigation("/Hilfe-Antworten")}
            >
              Hilfe & Antworten
            </Link>
            <Link
              to="/Fotografenportal"
              className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
              onClick={() => handleNavigation("/Fotografenportal")}
            >
              Fotografenportal
            </Link>
            <Link
              to="/behordenbereich-Information"
              className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
              onClick={() => handleNavigation("/behordenbereich-Information")}
            >
              Behördenbereich
            </Link>
            <Link
              to="/blog"
              className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
              onClick={() => handleNavigation("/blog")}
            >
              Blog
            </Link>
            {/* Conditional Verwaltungsbereich based on user type */}
            {isLoggedIn && userType === "owner" && (
              <Link
                to="/Verwaltungsbereich"
                className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
                onClick={() => handleNavigation("/Verwaltungsbereich")}
              >
                Verwaltungsbereich
              </Link>
            )}
            {isLoggedIn &&
              (userType === "manager" || userType === "employee") && (
                <Link
                  to="/Verwaltungsbreich"
                  className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
                  onClick={() => handleNavigation("/Verwaltungsbreich")}
                >
                  Verwaltungsbreich
                </Link>
              )}

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
                  onClick={() => handleNavigation("/login")}
                >
                  Login
                </Link>
                <Link
                  to="/Registrierung"
                  className="block text-center text-gray-600 font-medium hover:text-blue-600 transition text-sm"
                  onClick={() => handleNavigation("/Registrierung")}
                >
                  Registrieren
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block text-center text-red-500 font-medium hover:text-red-700 transition text-sm"
              >
                Abmelden
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
