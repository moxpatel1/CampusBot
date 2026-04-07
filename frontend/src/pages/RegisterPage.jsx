import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { eventsData } from '../data/events';
import { getToken, isLoggedIn } from '../utils/auth';

function RegisterPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [eventId, setEventId] = useState(searchParams.get('event') || '');
  const [fullname, setFullname] = useState('');
  const [branch, setBranch] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedEvent = useMemo(
    () => eventsData.find((event) => event.id === eventId),
    [eventId],
  );

  useEffect(() => {
    if (!isLoggedIn()) {
      sessionStorage.setItem('redirectAfterLogin', window.location.pathname + window.location.search);
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  if (!isLoggedIn()) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ eventId, fullname, branch, contact }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setMessage(`✅ ${fullname}, you have successfully registered for ${selectedEvent?.title || 'the event'}!`);
      setFullname('');
      setBranch('');
      setContact('');
      setIsError(false);
    } catch (err) {
      setMessage(err.message || 'Could not connect to backend server.');
      setIsError(true);
    } finally {
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
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#events">Events</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="events-section event-reg-section">
        <div className="container">
          <h2 className="section-heading">Event Registration</h2>
          <p className="section-subtitle">Fill out the form below to secure your spot for upcoming events.</p>

          <div className="eligibility-form register-form-wrap">
            <form onSubmit={handleSubmit}>
              <div className="field-group register-field">
                <label htmlFor="event-select">Select Event</label>
                <select id="event-select" required value={eventId} onChange={(e) => setEventId(e.target.value)}>
                  <option value="">-- Choose an Event --</option>
                  {eventsData.map((event) => (
                    <option key={event.id} value={event.id}>{event.title} ({event.date})</option>
                  ))}
                </select>
              </div>

              <div className="field-group register-field">
                <label htmlFor="fullname">Full Name</label>
                <input id="fullname" type="text" required value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </div>

              <div className="field-group register-field">
                <label htmlFor="branch">Branch / Department</label>
                <input id="branch" type="text" required value={branch} onChange={(e) => setBranch(e.target.value)} />
              </div>

              <div className="field-group register-field register-field-last">
                <label htmlFor="contact">Contact Number</label>
                <input
                  id="contact"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary register-submit" disabled={loading}>
                {loading ? 'Registering...' : 'Register Now'}
              </button>

              {message && (
                <div className={`eligibility-result register-result ${isError ? 'error' : 'success'}`} aria-live="polite">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default RegisterPage;
