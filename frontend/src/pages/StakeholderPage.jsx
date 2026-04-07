import { Link, useParams } from 'react-router-dom';

const stakeholderContent = {
  student: {
    title: 'Student Stakeholder Portal',
    subtitle: 'CampusBot helps students reduce admin dependency by giving instant answers on schedules, academics, and campus processes.',
    kpis: [
      { value: '24/7', label: 'Query support availability' },
      { value: '80%+', label: 'Routine queries auto-resolved' },
      { value: '1 Hub', label: 'All student services in one place' },
    ],
    sectionTitle: 'Core Student Needs',
    cards: [
      { title: 'Academic Planning', text: 'Semester calendars, exam timetables, and result dates are available instantly.' },
      { title: 'Financial Clarity', text: 'Fee structure, due dates, and payment steps are shown clearly to avoid delays.' },
      { title: 'Campus Engagement', text: 'Events, workshops, and registrations are managed from a single dashboard.' },
    ],
  },
  parent: {
    title: 'Parent Stakeholder Portal',
    subtitle: 'Parents receive transparent information on student progress, fee schedules, and college notices through a reliable digital channel.',
    kpis: [
      { value: 'Real-Time', label: 'Updates on critical deadlines' },
      { value: 'Single View', label: 'Fees, exams, and notices together' },
      { value: 'Trusted', label: 'Verified college information source' },
    ],
    sectionTitle: 'What Parents Need Most',
    cards: [
      { title: 'Fee and Payment Tracking', text: 'Parents can check fee status, upcoming dues, and receipt confirmation quickly.' },
      { title: 'Academic Visibility', text: 'Exam windows, result announcements, and attendance-related notices are communicated quickly.' },
      { title: 'Safety and Support', text: 'Campus updates and escalation routes are available when immediate action is needed.' },
    ],
  },
  faculty: {
    title: 'Faculty Stakeholder Portal',
    subtitle: 'Faculty teams can streamline communication, reduce repetitive student queries, and focus more on teaching and mentoring.',
    kpis: [
      { value: 'Lower Load', label: 'Routine query handling automated' },
      { value: 'Faster', label: 'Updates broadcast to all students' },
      { value: 'Better', label: 'Consistency in student communication' },
    ],
    sectionTitle: 'Faculty Benefits',
    cards: [
      { title: 'Automated Information Delivery', text: 'Common topics like exam pattern and office hours can be answered automatically.' },
      { title: 'Class Coordination', text: 'Schedule changes and deadlines are pushed with less manual follow-up.' },
      { title: 'Actionable Insights', text: 'FAQs highlight where students need additional guidance or content reinforcement.' },
    ],
  },
  admin: {
    title: 'Administration Stakeholder Portal',
    subtitle: 'Administrative teams can optimize operations, reduce helpdesk pressure, and deliver accurate institutional information at scale.',
    kpis: [
      { value: 'Scalable', label: 'Handles peak admission season traffic' },
      { value: 'Auditable', label: 'Consistent and policy-aligned responses' },
      { value: 'Efficient', label: 'Reduced front-desk dependency' },
    ],
    sectionTitle: 'Administrative Priorities',
    cards: [
      { title: 'Admissions Process Automation', text: 'Applicants get structured and consistent admission support.' },
      { title: 'Policy Communication', text: 'Official notices and timelines reach every stakeholder reliably.' },
      { title: 'Operational Monitoring', text: 'Query analytics reveal recurring pain points for improvements.' },
    ],
  },
};

const timeline = [
  'Step 1: Stakeholder asks query through CampusBot.',
  'Step 2: CampusBot provides verified information and guidance.',
  'Step 3: Reminders and updates are shared before deadlines.',
  'Step 4: Complex issues are escalated to the concerned department.',
];

function StakeholderPage() {
  const { type } = useParams();
  const content = stakeholderContent[type] || stakeholderContent.student;

  return (
    <main className="page-wrap">
      <Link className="back-link" to="/#features"><i className="fas fa-arrow-left"></i> Back to Main Page</Link>

      <section className="hero">
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
        <div className="kpi-grid">
          {content.kpis.map((kpi) => (
            <div className="kpi-box" key={kpi.value}>
              <h3>{kpi.value}</h3>
              <p>{kpi.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{content.sectionTitle}</h2>
        <div className="cards">
          {content.cards.map((card) => (
            <article className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Stakeholder Interaction Flow</h2>
        <ul className="timeline">
          {timeline.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default StakeholderPage;
