/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const requestBody = {
      email,
      password,
    };
    const base_url = import.meta.env.VITE_BASE_URL;

    try {
      const response = await fetch(`${base_url}/photobooth/web-login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      //console.log(response);
      const data = await response.json();
      //console.log(data);
      if (response.ok) {
        sessionStorage.setItem("authToken", data.access_token);
        sessionStorage.setItem("EID_verified", data.EID_verified);
        sessionStorage.setItem("refreshToken", data.refresh_token);

        const profileRes = await fetch(`${base_url}/photobooth/profile/`, {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        });

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          const userType = profileData.user_type;

          if (userType === "owner") {
            navigate("/Verwaltungsbereich");
          } else if (userType === "employee" || userType === "manager") {
            navigate("/Verwaltungsbreich");
          } else {
            setError("Unbekannter Benutzertyp.");
          }
        } else {
          setError("Benutzerprofil konnte nicht abgerufen werden.");
        }
      } else {
        setError(data.message || "Anmeldung fehlgeschlagen.");
      }
    } catch (error) {
      setError(
        "Es gab ein Problem mit der Anmeldung. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {" "}
          Login – e-passtransfer Software für elektronische Passbilder
        </title>
        <meta
          name="description"
          content=" Jetzt anmelden & digitale Passbilder mit der e-passtransfer Software verwalten – für Fotografen, Behörden & Dienstleister.

"
        />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:w-2/3 lg:w-1/3">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-black">E</span>-
              <span className="text-black">Passtransfer</span>
            </h1>
          </div>
          <h2 className="text-lg font-medium text-gray-800 text-center mb-4">
            Anmeldung bei E-Passtransfer
          </h2>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                E-Mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="nutzer@beispiel.de"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Passwort
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                  placeholder="Passwort eingeben"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-gray-600 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <Link
                to="/forgotpassword"
                className="text-black text-sm hover:underline"
              >
                Passwort vergessen?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-300 text-black py-2 rounded hover:bg-yellow-200"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
