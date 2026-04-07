import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      const redirect = sessionStorage.getItem('redirectAfterLogin') || '/';
      sessionStorage.removeItem('redirectAfterLogin');
      navigate(redirect);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <Link to="/" className="logo-container">
            <img src="/logo.svg" alt="CampusBot Logo" className="nav-logo" />
            <span className="logo-text">CampusBot</span>
          </Link>
          <ul className="nav-links nav-links-right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup" className="btn btn-primary" style={{ padding: '10px 24px', marginLeft: '15px' }}>Sign Up</Link></li>
          </ul>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="logo-box">
            <img src="/logo.svg" alt="Logo" />
            <span>CampusBot</span>
          </div>
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Log in to your account</p>
          </div>

          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-auth" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account? <Link to="/signup">Create one</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
