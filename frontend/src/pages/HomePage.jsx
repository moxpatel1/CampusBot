import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { eventsData } from '../data/events';
import { isLoggedIn } from '../utils/auth';

const featureCards = [
  {
    icon: 'fa-university',
    title: 'Admissions',
    text: 'Complete guidance on eligibility criteria, required documents, application deadlines, and enrollment process.',
    points: ['Eligibility checker', 'Document checklist', 'Application tracking'],
  },
  {
    icon: 'fa-money-bill',
    title: 'Fee Details',
    text: 'Transparent fee structures, payment options, deadline reminders, and instant receipt support.',
    points: ['Semester-wise breakdown', 'Online payment portal', 'EMI options available'],
  },
  {
    icon: 'fa-clock',
    title: '24/7 Support',
    text: 'Round-the-clock automated assistance so students and parents get instant answers anytime.',
    points: ['Instant responses', 'Weekend availability', 'Multi-language support'],
  },
  {
    icon: 'fa-calendar-alt',
    title: 'Exam Schedules',
    text: 'Real-time access to exam timetables, hall tickets, result dates, and planning details.',
    points: ['Mid & end-sem dates', 'Result notifications', 'CGPA calculator'],
  },
  {
    icon: 'fa-calendar-check',
    title: 'Smart Event Manager',
    text: 'Discover workshops and seminars with simple registration and reminders.',
    points: ['QR code registration', 'Event reminders', 'Certificate tracking'],
  },
  {
    icon: 'fa-award',
    title: 'Scholarship Help',
    text: 'Explore merit and need-based scholarship options with guided application support.',
    points: ['Eligibility matching', 'Application guides', 'Deadline alerts'],
  },
];

function HomePage() {
  const navigate = useNavigate();

  const handleRegister = (eventId) => {
    if (!isLoggedIn()) {
      sessionStorage.setItem('redirectAfterLogin', `/register?event=${eventId}`);
      navigate('/login');
      return;
    }

    navigate(`/register?event=${eventId}`);
  };

  return (
    <>
      <MainNavbar />

      <section id="hero" className="hero-section">
        <div className="container hero-container">
          <div className="hero-text">
            <h2>Your Instant College Guide</h2>
            <p>
              Get answers to all your college-related questions instantly. From admissions to exam schedules,
              CampusBot is here to help students and parents 24/7.
            </p>
            <a href="#features" className="btn btn-primary">See What It Does</a>
          </div>
          <div className="hero-image">
            <div className="chat-placeholder">
              <div className="chat-header-title">CampusBot</div>
              <div className="chat-message bot">Welcome to CampusBot! How can I help you today?</div>
              <div className="chat-preview-options">
                <span className="chat-preview-btn">Fees Structure</span>
                <span className="chat-preview-btn">Scholarships</span>
                <span className="chat-preview-btn">Admissions</span>
              </div>
              <div className="chat-message user">Fees Structure</div>
              <div className="chat-message bot">Choose your course to view fee details...</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <div className="stakeholder-strip">
            <h3 className="stakeholder-strip-title">Stakeholder Portals</h3>
            <div className="stakeholder-mini-grid">
              <Link to="/stakeholder/student" className="stakeholder-mini-box">
                <i className="fas fa-user-graduate"></i>
                <h4>Students</h4>
                <p>Academic support, exam info, and campus updates in one place.</p>
              </Link>
              <Link to="/stakeholder/parent" className="stakeholder-mini-box">
                <i className="fas fa-users"></i>
                <h4>Parents</h4>
                <p>Track progress, fee reminders, and important notices quickly.</p>
              </Link>
              <Link to="/stakeholder/faculty" className="stakeholder-mini-box">
                <i className="fas fa-chalkboard-teacher"></i>
                <h4>Faculty</h4>
                <p>Manage schedules, student communication, and class operations.</p>
              </Link>
              <Link to="/stakeholder/admin" className="stakeholder-mini-box">
                <i className="fas fa-building"></i>
                <h4>Administration</h4>
                <p>Control admissions workflows, reports, and campus announcements.</p>
              </Link>
            </div>
          </div>

          <h2 className="section-heading">Key Features</h2>
          <p className="section-subtitle">Everything you need to navigate your college journey, all in one place</p>

          <div className="feature-grid">
            {featureCards.map((card) => (
              <div className="feature-box" key={card.title}>
                <div className="feature-icon-wrapper">
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul className="feature-list">
                  {card.points.map((point) => (
                    <li key={point}><i className="fas fa-check-circle"></i> {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="events-section">
        <div className="container">
          <h2 className="section-heading">Upcoming Campus Events</h2>
          <p className="section-subtitle">Stay updated and register for campus workshops and drives.</p>
          <div className="events-grid">
            {eventsData.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.title}</h3>
                <p className="event-meta">{event.date} · {event.location}</p>
                <p>{event.description}</p>
                <button type="button" onClick={() => handleRegister(event.id)}>Register</button>
              </div>
            ))}
          </div>
          <p className="section-subtitle events-section-note">
            Click <strong>Register</strong> on any event card to go to the dedicated registration page.
          </p>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-heading">Why CampusBot?</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Students and parents often struggle to get timely information from college administration offices.
                Phone lines are busy, and manual visits take time.
              </p>
              <p>
                <strong>CampusBot solves this</strong> by automating common queries. It reduces workload on staff
                and ensures accurate information is available instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
