import { useRouteError, Link } from "react-router-dom";

import "./ErrorPage.css";
function ErrorPage() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="error-div">
        <h1 className="error-title">
          <i>Sahifa topilmadi!</i>
        </h1>
        <div className="home-link">
          <h2 className="error-p">Bosh sahifaga qaytish:</h2>
          <Link to="/" className="error-link">
            Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error-div">
      <h1 className="error-title">
        <i>Sahifada Muammo!</i>
      </h1>
      <div className="home-link">
        <h2 className="error-p">Bosh sahifaga qaytish:</h2>
        <Link to="/" className="error-link">
          Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
