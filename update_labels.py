import os

# Update HTML files with new design and WhatsApp link
def update_contact_design(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update Labels to Uppercase and WhatsApp Link
    # Also update the styling in the <style> block if it exists
    
    # WhatsApp link update
    content = content.replace('https://wa.me/yournumber', 'https://wa.me/923214261477')
    
    # Labels to uppercase
    content = content.replace('<label>Name</label>', '<label>NAME</label>')
    content = content.replace('<label>Email</label>', '<label>EMAIL</label>')
    content = content.replace('<label>Project Scope</label>', '<label>PROJECT SCOPE</label>')
    content = content.replace('<label>Message</label>', '<label>MESSAGE</label>')
    
    # Ensure labels are styled correctly
    label_style = """
        .form-group label { 
            display: block; 
            margin-bottom: 0.8rem; 
            font-weight: 700; 
            color: rgba(255,255,255,0.9); 
            font-size: 0.75rem; 
            letter-spacing: 1.5px; 
            text-transform: uppercase; 
        }
    """
    
    # If the style block exists, we might need to inject or replace
    if '<style>' in content:
        # Simple injection at start of first style block
        content = content.replace('<style>', f'<style>\n{label_style}', 1)
    else:
        # Add a new style block if none exists (unlikely in this project)
        content = content.replace('</head>', f'<style>\n{label_style}\n</style>\n</head>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

update_contact_design('E:/3d/index.html')
update_contact_design('E:/3d/contact.html')
