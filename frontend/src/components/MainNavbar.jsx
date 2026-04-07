import { Link } from 'react-router-dom';
import { isLoggedIn, logout } from '../utils/auth';

function MainNavbar() {
  const loggedIn = isLoggedIn();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo-container">
          <img src="/logo.svg" alt="CampusBot Logo" className="nav-logo" />
          <span className="logo-text">CampusBot</span>
        </Link>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-auth">
          {!loggedIn ? (
            <>
              <Link to="/login" id="nav-login">Login</Link>
              <Link to="/signup" id="nav-signup" className="btn btn-primary nav-signup-link">Sign Up</Link>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                logout();
                window.location.href = '/';
              }}
              style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', padding: '10px 24px' }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
