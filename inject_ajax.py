import os

# Function to add the script to an HTML file
def add_ajax_script(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple, foolproof AJAX script to be injected
    ajax_script = """
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.onsubmit = async function(e) {
            e.preventDefault();
            const btn = document.getElementById('contact-submit-btn');
            const successBox = document.getElementById('form-success');
            
            btn.disabled = true;
            btn.innerHTML = 'Sending...';

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    form.style.display = 'none';
                    successBox.style.display = 'block';
                } else {
                    throw new Error();
                }
            } catch (err) {
                btn.disabled = false;
                btn.innerHTML = 'Send Inquiry';
                alert('Submission failed. Please try again or email us.');
            }
            return false;
        };
    });
    </script>
    """
    
    if '</head>' in content and '<script>' not in content.split('</head>')[1]:
        # Append before </body>
        new_content = content.replace('</body>', ajax_script + '\n</body>')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
            print(f"Added script to {filepath}")

add_ajax_script('E:/3d/index.html')
add_ajax_script('E:/3d/contact.html')
