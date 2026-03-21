// auth.js - Global Authentication Interceptor

// Helper to check if user is logged in
function isLoggedIn() {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        // Optional: Check if token is expired (basic check)
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isExpired = payload.exp * 1000 < Date.now();
        if (isExpired) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

// Function to handle logout
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

// Global click interceptor
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are already on the login or signup page
    const isAuthPage = window.location.pathname.endsWith('login.html') || 
                       window.location.pathname.endsWith('signup.html');

    // Update UI based on auth status (Runs on ALL pages)
    const navLogin = document.getElementById('nav-login');
    const navSignup = document.getElementById('nav-signup');
    const navAuth = document.querySelector('.nav-auth');

    if (isLoggedIn()) {
        if (navLogin) navLogin.style.display = 'none';
        if (navSignup) navSignup.style.display = 'none';

        if (navAuth && !document.getElementById('logout-btn')) {
            const logoutA = document.createElement('a');
            logoutA.href = "#";
            logoutA.id = "logout-btn";
            logoutA.className = "btn btn-primary";
            logoutA.style.background = "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
            logoutA.style.padding = "10px 24px";
            logoutA.textContent = "Logout";
            navAuth.appendChild(logoutA);
            
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                logout();
            });
        }
        
        // Add user token to global fetch
        const originalFetch = window.fetch;
        window.fetch = async function () {
            let [resource, config] = arguments;
            if (!config) config = {};
            if (!config.headers) config.headers = {};
            if (typeof resource === 'string' && resource.includes('localhost:5000')) {
                config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            }
            return await originalFetch(resource, config);
        };
    }

    // Only set up the click interceptor if NOT on an auth page
    if (!isAuthPage) {
        document.body.addEventListener('click', (e) => {
            const target = e.target.closest('button') || e.target.closest('a') || e.target.closest('.chat-preview-btn');

            if (target) {
                const href = target.getAttribute('href') || '';
                
                // Exemptions for the interceptor
                const isChatbot = target.closest('#chatbot-window') || target.closest('#chatbot-container');
                const isAuthLink = href.includes('login.html') || href.includes('signup.html');
                const isHomeOrLogo = href === '#' || href === 'simple_index.html' || target.closest('.logo-container');

                if (isChatbot || isAuthLink || isHomeOrLogo) {
                    return;
                }

                if (!isLoggedIn()) {
                    e.preventDefault();
                    e.stopPropagation();

                    if (target.tagName === 'A' && href && !href.startsWith('#')) {
                        sessionStorage.setItem('redirectAfterLogin', href);
                    } else {
                        sessionStorage.setItem('redirectAfterLogin', window.location.href);
                    }

                    window.location.href = 'login.html';
                }
            }
        }, true);
    }
});
