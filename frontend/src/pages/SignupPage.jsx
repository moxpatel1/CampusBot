import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      setMessage('Account created successfully! Redirecting to login...');
      setIsError(false);
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      setMessage(err.message);
      setIsError(true);
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
            <li><Link to="/login" className="btn btn-primary" style={{ padding: '10px 24px', marginLeft: '15px' }}>Log In</Link></li>
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
            <h2>Create Account</h2>
            <p>Join the CampusBot community</p>
          </div>

          {message && <div className={isError ? 'error-box' : 'success-box'}>{message}</div>}

          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="EX: Rahul Patel"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-auth" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>

          <div className="auth-footer">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
