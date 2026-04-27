import os

with open('E:/3d/contact.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the HTML parsing error (escape <)
content = content.replace('Small Project (< 1 month)', 'Small Project (&lt; 1 month)')

# Ensure logo is BST and matches home page style
content = content.replace('Broad Solution Tech', 'BST') # Just in case it was elsewhere

# Add premium styling for the contact section
premium_contact_css = """
    <style>
        .contact-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; margin-top: 3rem; }
        .contact-form.glass { 
            background: rgba(255,255,255,0.03); 
            border: 1px solid rgba(139,92,246,0.2); 
            border-radius: 24px; 
            padding: 3rem; 
            backdrop-filter: blur(20px);
        }
        .form-group label { display: block; margin-bottom: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.8); font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; }
        .form-group input, .form-group select, .form-group textarea { 
            width: 100%; 
            padding: 1.2rem; 
            background: rgba(255,255,255,0.05); 
            border: 1px solid rgba(255,255,255,0.1); 
            border-radius: 12px; 
            color: #fff; 
            transition: all 0.3s;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { 
            border-color: #8b5cf6; 
            background: rgba(255,255,255,0.08); 
            outline: none; 
            box-shadow: 0 0 15px rgba(139,92,246,0.2);
        }
        .info-item.glass { 
            background: rgba(255,255,255,0.03); 
            border: 1px solid rgba(139,92,246,0.1); 
            border-radius: 20px; 
            padding: 2rem; 
            margin-bottom: 24px; 
            backdrop-filter: blur(20px);
            transition: transform 0.3s, border-color 0.3s;
        }
        .info-item.glass:hover { transform: translateY(-5px); border-color: #8b5cf6; }
        .info-item h4 { color: #8b5cf6; margin-bottom: 0.8rem; font-size: 1.1rem; letter-spacing: 1px; }
        .btn-text { color: #a78bfa; font-weight: 700; text-decoration: none; display: inline-block; margin-top: 1rem; transition: all 0.3s; }
        .btn-text:hover { color: #fff; transform: translateX(5px); }
        
        @media (max-width: 968px) {
            .contact-layout { grid-template-columns: 1fr; }
        }
    </style>
"""

# Insert CSS
if '</head>' in content:
    content = content.replace('</head>', premium_contact_css + '</head>')

# Update the Send Inquiry button to use a gradient if desired, or just ensure it's premium
# (Wait, style.css btn-primary is already purple. I'll add a hover effect here)

with open('E:/3d/contact.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Contact page fixed and polished.")
