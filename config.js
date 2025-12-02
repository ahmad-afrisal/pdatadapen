// Configuration file untuk Google Apps Script URL
const CONFIG = {
    // Ganti dengan URL deployment Google Apps Script Anda
    // Format: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
    GOOGLE_APPS_SCRIPT_URL: 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE',
    
    // API Key untuk keamanan (harus sama dengan yang ada di Google Apps Script)
    API_KEY: 'mysecretkey123'
};

// Function untuk mendapatkan URL Google Apps Script
function getScriptUrl() {
    return CONFIG.GOOGLE_APPS_SCRIPT_URL;
}

// Function untuk mendapatkan API Key
function getApiKey() {
    return CONFIG.API_KEY;
} 