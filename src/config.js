// Centralized configuration for API base URL and other runtime settings
const API_BASE = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:8000' : "");

export { API_BASE };
