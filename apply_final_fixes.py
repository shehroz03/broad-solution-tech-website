import os

# --- Update style.css ---
style_path = "E:/3d/style.css"
css_fixes = """
/* Robust Select Styling Fix */
select {
    background-color: #05000f !important;
    color: #ffffff !important;
    border: 1px solid rgba(139, 92, 246, 0.3) !important;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
}

select option {
    background-color: #05000f !important;
    color: #ffffff !important;
    padding: 10px !important;
}

/* Force dark theme on form fields */
input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
}

.contact-form.glass {
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(139, 92, 246, 0.2) !important;
}
"""

with open(style_path, 'a', encoding='utf-8') as f:
    f.write(css_fixes)

# --- Update main.js for robust AJAX ---
main_path = "E:/3d/main.js"
with open(main_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the existing AJAX handler with a better one if it exists, or just append
ajax_handler = """
// Robust AJAX Form Handler
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Remove existing listeners to prevent duplicates
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const btn = document.getElementById('contact-submit-btn');
        const successBox = document.getElementById('form-success');
        
        if (!btn || !successBox) return;

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            const formData = new FormData(newForm);
            const response = await fetch(newForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                newForm.style.display = 'none';
                successBox.style.display = 'block';
                successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Submission failed');
            }
        } catch (error) {
            btn.disabled = false;
            btn.innerHTML = 'Send Inquiry';
            alert('Oops! ' + error.message);
        }
    });
}

// Initialize on load and also on scroll reveal if needed
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}
"""

# Append to main.js (avoiding duplicates if possible)
if 'initContactForm' not in content:
    with open(main_path, 'a', encoding='utf-8') as f:
        f.write(ajax_handler)

print("Updated style.css and main.js")
