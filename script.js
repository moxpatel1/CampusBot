// Chatbot Knowledge Base
const chatbotData = {
    welcome: {
        message: "Hello! Welcome to CampusBot. I'm here to help you with college information. Please select a topic:",
        options: [
            { id: "fees", label: "Fee Details", icon: "fa-money-bill" },
            { id: "scholarship", label: "Scholarships", icon: "fa-award" },
            { id: "admission", label: "Admissions", icon: "fa-university" },
            { id: "exams", label: "Exam Schedules", icon: "fa-calendar-alt" },
            { id: "hostel", label: "Hostel Facilities", icon: "fa-bed" },
            { id: "placement", label: "Placements", icon: "fa-briefcase" }
        ]
    },
    fees: {
        message: "You selected Fee Details. What would you like to know?",
        options: [
            { id: "fees_structure", label: "Fee Structure" },
            { id: "fees_payment", label: "Payment Methods" },
            { id: "fees_deadline", label: "Payment Deadlines" },
            { id: "fees_refund", label: "Refund Policy" },
            { id: "back_main", label: "Back to Main Menu" }
        ]
    },
    fees_structure: {
        message: "<strong>Fee Structure (2025-26):</strong><br><br>• <strong>Tuition Fee:</strong> Rs. 85,000 per semester<br>• <strong>Development Fee:</strong> Rs. 15,000 per year<br>• <strong>Library Fee:</strong> Rs. 5,000 per year<br>• <strong>Lab Fee:</strong> Rs. 10,000 per semester<br>• <strong>Exam Fee:</strong> Rs. 3,000 per semester<br><br><em>Total Annual: Approximately Rs. 2,16,000</em>",
        options: [
            { id: "fees", label: "Back to Fee Details" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    fees_payment: {
        message: "<strong>Payment Methods:</strong><br><br>• <strong>Online Payment:</strong> Credit/Debit Cards, Net Banking, UPI<br>• <strong>Bank Challan:</strong> Available at SBI, HDFC, ICICI branches<br>• <strong>Demand Draft:</strong> In favor of 'College Name' payable at city<br>• <strong>EMI Options:</strong> Available through partnered banks<br><br><em>Online portal: fees.college.edu</em>",
        options: [
            { id: "fees", label: "Back to Fee Details" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    fees_deadline: {
        message: "<strong>Payment Deadlines (2025-26):</strong><br><br>• <strong>Odd Semester:</strong> July 31, 2025<br>• <strong>Even Semester:</strong> January 15, 2026<br>• <strong>Late Fee:</strong> Rs. 100/day after deadline<br>• <strong>Maximum Extension:</strong> 15 days with fine<br><br><em>Note: No payment accepted after extended deadline.</em>",
        options: [
            { id: "fees", label: "Back to Fee Details" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    fees_refund: {
        message: "<strong>Refund Policy:</strong><br><br>• <strong>Before classes start:</strong> 100% refund (minus Rs. 1,000 processing)<br>• <strong>Within 15 days:</strong> 80% refund<br>• <strong>Within 30 days:</strong> 50% refund<br>• <strong>After 30 days:</strong> No refund<br><br><em>Processing time: 15-20 working days</em>",
        options: [
            { id: "fees", label: "Back to Fee Details" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    scholarship: {
        message: "You selected Scholarships. What would you like to know?",
        options: [
            { id: "scholarship_merit", label: "Merit Scholarships" },
            { id: "scholarship_need", label: "Need-Based Aid" },
            { id: "scholarship_govt", label: "Government Schemes" },
            { id: "scholarship_apply", label: "How to Apply" },
            { id: "back_main", label: "Back to Main Menu" }
        ]
    },
    scholarship_merit: {
        message: "<strong>Merit Scholarships:</strong><br><br>• <strong>Gold Medal:</strong> 100% tuition waiver (Top rank holder)<br>• <strong>Dean's List:</strong> 50% fee waiver (90%+ aggregate)<br>• <strong>Academic Excellence:</strong> 25% waiver (85-89%)<br>• <strong>Sports Quota:</strong> 30-50% based on achievements<br><br><em>Renewed annually based on performance.</em>",
        options: [
            { id: "scholarship", label: "Back to Scholarships" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    scholarship_need: {
        message: "<strong>Need-Based Financial Aid:</strong><br><br>• <strong>Income Criteria:</strong> Family income below Rs. 3 LPA<br>• <strong>Coverage:</strong> Up to 75% tuition fee<br>• <strong>Documents Required:</strong> Income certificate, BPL card (if applicable)<br>• <strong>Work-Study Program:</strong> Campus jobs available<br><br><em>Contact: financial-aid@college.edu</em>",
        options: [
            { id: "scholarship", label: "Back to Scholarships" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    scholarship_govt: {
        message: "<strong>Government Scholarship Schemes:</strong><br><br>• <strong>National Scholarship Portal:</strong> scholarships.gov.in<br>• <strong>Post-Matric Scholarship:</strong> For SC/ST/OBC students<br>• <strong>Minority Scholarship:</strong> MOMA scholarship<br>• <strong>PM Vidyalakshmi:</strong> Education loans & scholarships<br>• <strong>State Scholarships:</strong> Check state education portal<br><br><em>Apply through official government portals.</em>",
        options: [
            { id: "scholarship", label: "Back to Scholarships" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    scholarship_apply: {
        message: "<strong>How to Apply for Scholarships:</strong><br><br><strong>Step 1:</strong> Check eligibility on college website<br><strong>Step 2:</strong> Gather required documents<br><strong>Step 3:</strong> Fill online application form<br><strong>Step 4:</strong> Submit before deadline (Usually August 31)<br><strong>Step 5:</strong> Appear for interview (if required)<br><br><em>Results announced within 30 days.</em>",
        options: [
            { id: "scholarship", label: "Back to Scholarships" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    admission: {
        message: "You selected Admissions. What would you like to know?",
        options: [
            { id: "admission_eligibility", label: "Eligibility Criteria" },
            { id: "admission_eligibility_check", label: "Check My Eligibility" },
            { id: "admission_process", label: "Application Process" },
            { id: "admission_documents", label: "Required Documents" },
            { id: "admission_dates", label: "Important Dates" },
            { id: "back_main", label: "Back to Main Menu" }
        ]
    },
    admission_eligibility: {
        message: "<strong>Eligibility Criteria:</strong><br><br><strong>Undergraduate (B.Tech/BBA/BCA):</strong><br>• 10+2 with 60% aggregate<br>• Physics, Math mandatory for B.Tech<br>• Valid entrance exam score<br><br><strong>Postgraduate (M.Tech/MBA/MCA):</strong><br>• Bachelor's degree with 55%<br>• Valid GATE/CAT/MAT score<br><br><em>Relaxation for reserved categories as per norms.</em>",
        options: [
            { id: "admission", label: "Back to Admissions" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    admission_eligibility_check: {
        message: "Great! Use the Admission Eligibility Checker section below to enter your course, score and get an instant result.",
        options: [
            { id: "admission", label: "Back to Admissions" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    admission_process: {
        message: "<strong>Application Process:</strong><br><br><strong>Step 1:</strong> Register on admissions.college.edu<br><strong>Step 2:</strong> Fill application form online<br><strong>Step 3:</strong> Upload documents & photo<br><strong>Step 4:</strong> Pay application fee (Rs. 1,500)<br><strong>Step 5:</strong> Download confirmation<br><strong>Step 6:</strong> Attend counseling session<br><strong>Step 7:</strong> Document verification & enrollment<br><br><em>Application fee is non-refundable.</em>",
        options: [
            { id: "admission", label: "Back to Admissions" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    admission_documents: {
        message: "<strong>Required Documents:</strong><br><br>• 10th & 12th Mark sheets (Original + 2 copies)<br>• Transfer Certificate<br>• Migration Certificate<br>• Character Certificate<br>• Passport size photos (8 copies)<br>• Aadhar Card copy<br>• Category Certificate (if applicable)<br>• Entrance exam scorecard<br>• Gap certificate (if any gap in education)<br><br><em>Carry originals for verification.</em>",
        options: [
            { id: "admission", label: "Back to Admissions" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    admission_dates: {
        message: "<strong>Important Dates (2025-26):</strong><br><br>• <strong>Application Start:</strong> March 1, 2025<br>• <strong>Application Deadline:</strong> May 31, 2025<br>• <strong>Entrance Exam:</strong> June 15, 2025<br>• <strong>Result Declaration:</strong> June 30, 2025<br>• <strong>Counseling:</strong> July 5-15, 2025<br>• <strong>Classes Begin:</strong> August 1, 2025<br><br><em>Dates subject to change. Check website regularly.</em>",
        options: [
            { id: "admission", label: "Back to Admissions" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    exams: {
        message: "You selected Exam Schedules. What would you like to know?",
        options: [
            { id: "exams_schedule", label: "Exam Timetable" },
            { id: "exams_results", label: "Results & Grades" },
            { id: "exams_revaluation", label: "Revaluation Process" },
            { id: "exams_backlog", label: "Backlog Exams" },
            { id: "back_main", label: "Back to Main Menu" }
        ]
    },
    exams_schedule: {
        message: "<strong>Exam Timetable (Even Semester 2026):</strong><br><br>• <strong>Mid-Semester:</strong> March 15-22, 2026<br>• <strong>End-Semester:</strong> May 15-30, 2026<br>• <strong>Practical Exams:</strong> May 5-12, 2026<br>• <strong>Project Viva:</strong> May 10-14, 2026<br><br><em>Detailed date sheet available on exam portal 2 weeks before exams.</em>",
        options: [
            { id: "exams", label: "Back to Exams" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    exams_results: {
        message: "<strong>Results & Grading System:</strong><br><br><strong>Grade Scale:</strong><br>• O (Outstanding): 90-100 | Grade Point: 10<br>• A+: 80-89 | GP: 9<br>• A: 70-79 | GP: 8<br>• B+: 60-69 | GP: 7<br>• B: 50-59 | GP: 6<br>• F (Fail): Below 50 | GP: 0<br><br><strong>Result Declaration:</strong> Within 30 days of exam<br><em>Check results at: results.college.edu</em>",
        options: [
            { id: "exams", label: "Back to Exams" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    exams_revaluation: {
        message: "<strong>Revaluation Process:</strong><br><br>• <strong>Apply within:</strong> 15 days of result<br>• <strong>Fee:</strong> Rs. 500 per subject<br>• <strong>Process:</strong> Apply online - Pay fee - Answer sheet reviewed<br>• <strong>Result:</strong> Within 20 days<br>• <strong>Fee Refund:</strong> If marks increase by 10%+<br><br><em>Apply at: exam.college.edu/revaluation</em>",
        options: [
            { id: "exams", label: "Back to Exams" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    exams_backlog: {
        message: "<strong>Backlog/Supplementary Exams:</strong><br><br>• <strong>Conducted:</strong> Before next semester starts<br>• <strong>Registration:</strong> Online, 2 weeks before exam<br>• <strong>Fee:</strong> Rs. 1,000 per subject<br>• <strong>Max Attempts:</strong> 4 attempts allowed<br>• <strong>Next Backlog Exam:</strong> July 2026<br><br><em>Clear all backlogs before final year for degree eligibility.</em>",
        options: [
            { id: "exams", label: "Back to Exams" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    hostel: {
        message: "You selected Hostel Facilities. What would you like to know?",
        options: [
            { id: "hostel_rooms", label: "Room Types & Fees" },
            { id: "hostel_mess", label: "Mess & Food" },
            { id: "hostel_rules", label: "Hostel Rules" },
            { id: "hostel_apply", label: "How to Apply" },
            { id: "back_main", label: "Back to Main Menu" }
        ]
    },
    hostel_rooms: {
        message: "<strong>Room Types & Annual Fees:</strong><br><br>• <strong>4-Sharing:</strong> Rs. 45,000/year<br>• <strong>3-Sharing:</strong> Rs. 55,000/year<br>• <strong>2-Sharing:</strong> Rs. 70,000/year<br>• <strong>Single Room:</strong> Rs. 95,000/year (limited)<br><br><strong>Includes:</strong> Bed, study table, chair, cupboard, Wi-Fi<br><strong>Caution Deposit:</strong> Rs. 10,000 (refundable)<br><br><em>AC rooms: Additional Rs. 15,000/year</em>",
        options: [
            { id: "hostel", label: "Back to Hostel" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    hostel_mess: {
        message: "<strong>Mess & Food Facilities:</strong><br><br><strong>Mess Fee:</strong> Rs. 4,000/month<br><strong>Timings:</strong><br>• Breakfast: 7:30 - 9:00 AM<br>• Lunch: 12:30 - 2:00 PM<br>• Snacks: 5:00 - 6:00 PM<br>• Dinner: 7:30 - 9:00 PM<br><br><strong>Features:</strong> Vegetarian & Non-veg options, Special diet on request<br><br><em>Mess committee addresses food quality issues.</em>",
        options: [
            { id: "hostel", label: "Back to Hostel" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    hostel_rules: {
        message: "<strong>Hostel Rules:</strong><br><br>• <strong>In-time:</strong> 9:00 PM (weekdays), 10:00 PM (weekends)<br>• <strong>Visitors:</strong> Allowed in common area only (10 AM - 6 PM)<br>• <strong>Leave:</strong> Prior permission required for overnight leave<br>• <strong>Prohibited:</strong> Alcohol, smoking, electrical appliances<br>• <strong>Attendance:</strong> Biometric check mandatory<br><br><em>Violation may lead to disciplinary action.</em>",
        options: [
            { id: "hostel", label: "Back to Hostel" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    hostel_apply: {
        message: "<strong>Hostel Application Process:</strong><br><br><strong>Step 1:</strong> Fill hostel form during admission<br><strong>Step 2:</strong> Submit medical fitness certificate<br><strong>Step 3:</strong> Pay caution deposit<br><strong>Step 4:</strong> Room allotment (first-come basis)<br><strong>Step 5:</strong> Collect room keys from warden<br><br><strong>Deadline:</strong> July 15 for new session<br><em>Contact: hostel@college.edu</em>",
        options: [
            { id: "hostel", label: "Back to Hostel" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    placement: {
        message: "You selected Placements. What would you like to know?",
        options: [
            { id: "placement_companies", label: "Recruiting Companies" },
            { id: "placement_packages", label: "Salary Packages" },
            { id: "placement_process", label: "Placement Process" },
            { id: "placement_internship", label: "Internships" },
            { id: "back_main", label: "Back to Main Menu" }
        ]
    },
    placement_companies: {
        message: "<strong>Top Recruiting Companies:</strong><br><br><strong>IT/Software:</strong> TCS, Infosys, Wipro, Cognizant, Accenture, IBM<br><br><strong>Product Companies:</strong> Microsoft, Amazon, Google, Adobe, Flipkart<br><br><strong>Core Engineering:</strong> L&T, Tata Motors, Mahindra, Reliance<br><br><strong>Consulting:</strong> Deloitte, EY, KPMG, PwC<br><br><em>150+ companies visit campus annually.</em>",
        options: [
            { id: "placement", label: "Back to Placements" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    placement_packages: {
        message: "<strong>Placement Statistics (2024-25):</strong><br><br>• <strong>Highest Package:</strong> Rs. 45 LPA (Microsoft)<br>• <strong>Average Package:</strong> Rs. 8.5 LPA<br>• <strong>Median Package:</strong> Rs. 6.2 LPA<br>• <strong>Placement Rate:</strong> 92%<br><br><strong>Branch-wise Average:</strong><br>• CSE: Rs. 10.2 LPA<br>• ECE: Rs. 7.8 LPA<br>• Mechanical: Rs. 6.5 LPA<br>• MBA: Rs. 9.0 LPA",
        options: [
            { id: "placement", label: "Back to Placements" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    placement_process: {
        message: "<strong>Placement Process:</strong><br><br><strong>Step 1:</strong> Register on placement portal<br><strong>Step 2:</strong> Upload resume & documents<br><strong>Step 3:</strong> Pre-Placement Talks (PPTs)<br><strong>Step 4:</strong> Apply to companies<br><strong>Step 5:</strong> Online test / Assessment<br><strong>Step 6:</strong> Technical Interview<br><strong>Step 7:</strong> HR Interview<br><strong>Step 8:</strong> Offer Letter<br><br><em>Placement season: August - March</em>",
        options: [
            { id: "placement", label: "Back to Placements" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    placement_internship: {
        message: "<strong>Internship Opportunities:</strong><br><br>• <strong>Duration:</strong> 2-6 months (summer/winter)<br>• <strong>Stipend Range:</strong> Rs. 10,000 - Rs. 80,000/month<br>• <strong>Mandatory:</strong> For final year project credits<br>• <strong>PPO Rate:</strong> 40% interns receive pre-placement offers<br><br><strong>Top Internship Partners:</strong><br>Amazon, Microsoft, Goldman Sachs, Uber, Zomato<br><br><em>Apply through: internships.college.edu</em>",
        options: [
            { id: "placement", label: "Back to Placements" },
            { id: "back_main", label: "Main Menu" }
        ]
    },
    back_main: {
        message: "Sure! Here's the main menu. What would you like to know?",
        options: [
            { id: "fees", label: "Fee Details", icon: "fa-money-bill" },
            { id: "scholarship", label: "Scholarships", icon: "fa-award" },
            { id: "admission", label: "Admissions", icon: "fa-university" },
            { id: "exams", label: "Exam Schedules", icon: "fa-calendar-alt" },
            { id: "hostel", label: "Hostel Facilities", icon: "fa-bed" },
            { id: "placement", label: "Placements", icon: "fa-briefcase" }
        ]
    }
};

// additional feature data
const eventsData = [
    {
        id: 'coding-bootcamp',
        title: '7-Day Coding Bootcamp',
        description: 'Intensive full-stack coding workshop: HTML/CSS/JS + Backend and deployment.',
        date: '2026-04-05',
        location: 'Innovation Lab'
    },
    {
        id: 'softskills',
        title: 'Soft Skills & Interview Prep',
        description: 'Mock interviews, resume tips, and personality development session.',
        date: '2026-04-15',
        location: 'Symposium Hall'
    },
    {
        id: 'alumni-meet',
        title: 'Alumni Meet & Placement Drive',
        description: 'Meet alumni recruiters, company stalls, and live recruitment interviews.',
        date: '2026-04-25',
        location: 'Auditorium'
    }
];

function renderEvents() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;

    eventsGrid.innerHTML = '';

    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-meta">${event.date} · ${event.location}</p>
            <p>${event.description}</p>
            <button data-event="${event.id}">Register</button>
        `;

        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            window.location.href = `register.html?event=${event.id}`;
        });

        eventsGrid.appendChild(card);
    });
}

function setupEligibilityChecker() {
    const form = document.getElementById('eligibility-form');
    const result = document.getElementById('eligibility-result');

    const rules = {
        'B.Tech': { minPercentage: 60, minExam: 60, text: '10+2 with Physics & Math, and minimum entrance score 60' },
        'BCA': { minPercentage: 55, minExam: 50, text: '10+2 aggregate 55% and entrance score 50' },
        'MBA': { minPercentage: 60, minExam: 65, text: 'Graduation aggregate 60% and CAT/MAT 65' },
        'M.Tech': { minPercentage: 60, minExam: 65, text: 'Graduation aggregate 60% and GATE 65' },
    };

    form.addEventListener('submit', e => {
        e.preventDefault();

        const course = document.getElementById('course').value;
        const percentage = parseFloat(document.getElementById('percentage').value);
        const examScore = parseFloat(document.getElementById('examScore').value);

        if (!course || Number.isNaN(percentage) || Number.isNaN(examScore)) {
            result.textContent = 'Please fill all fields correctly.';
            result.style.color = '#f97316';
            return;
        }

        const rule = rules[course];
        if (!rule) {
            result.textContent = 'Selected course not supported yet.';
            result.style.color = '#f97316';
            return;
        }

        if (percentage >= rule.minPercentage && examScore >= rule.minExam) {
            result.innerHTML = `✅ You are eligible for <strong>${course}</strong>.<br>Requirement: ${rule.text}.`;
            result.style.color = '#22c55e';
        } else {
            const missing = [];
            if (percentage < rule.minPercentage) missing.push(`minimum ${rule.minPercentage}%`);
            if (examScore < rule.minExam) missing.push(`minimum entrance score ${rule.minExam}`);
            result.innerHTML = `❌ You are not eligible for <strong>${course}</strong> yet.<br>Requirement: ${rule.text}.<br>Requirements not met: ${missing.join(', ')}.`;
            result.style.color = '#f87171';
        }
    });
}

function setupRegistrationForm() {
    const form = document.getElementById('register-form');
    if (!form) return;

    const selectEvent = document.getElementById('event-select');
    const result = document.getElementById('register-result');

    // Populate events
    eventsData.forEach(ev => {
        const option = document.createElement('option');
        option.value = ev.id;
        option.textContent = `${ev.title} (${ev.date})`;
        selectEvent.appendChild(option);
    });

    // Auto-select event from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const eventIdParam = urlParams.get('event');
    if (eventIdParam) {
        selectEvent.value = eventIdParam;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const eventId = selectEvent.value;
        const name = document.getElementById('fullname').value;
        const branch = document.getElementById('branch').value;
        const contact = document.getElementById('contact').value;

        if (!eventId || !name || !branch || !contact) {
            result.style.display = 'block';
            result.style.color = '#f87171'; // Red
            result.innerHTML = 'Please fill out all fields.';
            return;
        }

        const selectedEvent = eventsData.find(ev => ev.id === eventId);
        const submitBtn = form.querySelector('button[type="submit"]');

        try {
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registering...';
            
            // Call Node.js backend API
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    eventId: eventId,
                    fullname: name,
                    branch: branch,
                    contact: contact
                })
            });

            const data = await response.json();

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Register Now';

            if (response.ok) {
                // Show success message
                result.style.display = 'block';
                result.style.color = '#22c55e'; // Green
                result.innerHTML = `✅ <strong>${name}</strong>, you have successfully registered for <strong>${selectedEvent ? selectedEvent.title : 'the event'}</strong>!<br><span style="font-size: 0.9rem; color: #94a3b8;">A confirmation text will be sent to ${contact}.</span>`;
                
                // Reset form
                form.reset();
            } else {
                throw new Error(data.error || 'Failed to register');
            }
        } catch (error) {
            // Re-enable button on error
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Register Now';

            // Show error message (likely backend is not running)
            result.style.display = 'block';
            result.style.color = '#f97316'; // Orange warning
            result.innerHTML = `⚠️ <strong>Connection Error</strong><br><span style="font-size: 0.9rem;">Could not connect to the backend server. Please make sure the Node.js server is running on port 5000.</span>`;
            console.error('Registration failed:', error);
        }
        
        // Hide message after 5 seconds if successful
        setTimeout(() => {
            if(result.style.color === 'rgb(34, 197, 94)') { // Only hide if green (success)
                result.style.display = 'none';
            }
        }, 5000);
    });
}

// DOM Elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotOptions = document.getElementById('chatbot-options');
const chatbotBadge = document.querySelector('.chatbot-badge');

// AI Integration config
const GEMINI_API_KEY = "AIzaSyACEJKpKAcQZhOq2VYa3N6EXii3dd668ow"; // Replace with your Gemini API Key from Google AI Studio
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Toggle chatbot window
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.remove('hidden');
    chatbotToggle.classList.add('hidden');
    chatbotBadge.style.display = 'none';
    document.body.style.overflow = 'hidden';
    if (chatbotMessages.children.length === 0) {
        showMessage('welcome');
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.add('hidden');
    chatbotToggle.classList.remove('hidden');
    document.body.style.overflow = 'auto';
});

// Show message and options
function showMessage(key) {
    const data = chatbotData[key];
    if (!data) return;

    // Add bot message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatbot-msg bot';
    messageDiv.innerHTML = data.message;
    chatbotMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Clear and add new options
    chatbotOptions.innerHTML = '';
    data.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'chatbot-option-btn';
        btn.textContent = option.label;
        btn.addEventListener('click', () => handleOptionClick(option));
        chatbotOptions.appendChild(btn);
    });
}

// Handle option click
function handleOptionClick(option) {
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chatbot-msg user';
    userMsg.textContent = option.label;
    chatbotMessages.appendChild(userMsg);

    // Disable options while loading
    chatbotOptions.innerHTML = '';

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-msg bot typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    chatbotMessages.appendChild(typingDiv);

    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Remove typing indicator and show response after 1.5 seconds
    setTimeout(() => {
        typingDiv.remove();
        showMessage(option.id);
    }, 1500);
}

// Handle smart free-text chat
async function handleUserMessage() {
    const text = chatbotInput.value.trim();
    if (!text) return;

    // Clear input
    chatbotInput.value = '';

    // Add user message to UI
    const userMsg = document.createElement('div');
    userMsg.className = 'chatbot-msg user';
    userMsg.textContent = text;
    chatbotMessages.appendChild(userMsg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-msg bot typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Get response from Gemini API
    const botResponseText = await askGemini(text);

    // Remove typing indicator and show AI response
    typingDiv.remove();
    const botMsg = document.createElement('div');
    botMsg.className = 'chatbot-msg bot';

    // Convert basic markdown formatting from Gemini to HTML
    let formattedText = botResponseText
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');

    botMsg.innerHTML = formattedText;
    chatbotMessages.appendChild(botMsg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

async function askGemini(question) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
        return "I am currently in offline mode. Please paste your **Gemini API Key** into `script.js` to enable my AI brain!";
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: "You are CampusBot, a helpful, friendly, and concise AI assistant for a college. Answer this student's question in a few sentences: " + question
                    }]
                }]
            })
        });

        const data = await response.json();

        if (data.error && data.error.message) {
            console.error("Gemini API Error:", data.error.message);
            return "Sorry, there was an issue with the API key or quota.";
        }

        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "I'm not quite sure how to answer that right now.";
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        return "I'm having trouble connecting to the internet. Please try again later.";
    }
}

// Event listeners for chat input
if (chatbotSend) {
    chatbotSend.addEventListener('click', handleUserMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });
}

// initialize custom sections
function initCampusFeatures() {
    renderEvents();
    setupEligibilityChecker();
    setupRegistrationForm();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCampusFeatures);
} else {
    initCampusFeatures();
}
