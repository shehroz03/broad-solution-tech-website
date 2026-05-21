import os

# Sync contact form and footer across all pages
files = ['index.html', 'about.html', 'technology.html', 'our-work.html', 'reviews.html', 'contact.html']

contact_html_template = """
        <section id="contact">
            <div class="container">
                <div class="section-header">
                    <span class="tag">Get in Touch</span>
                    <h2>Let's Build <span class="vision-gradient">Something Great</span></h2>
                    <p>Have an idea? Let's turn it into a world-class digital product together.</p>
                </div>
                <div class="contact-layout">
                    <div class="contact-form glass reveal">
                        <form id="contact-form" action="https://formspree.io/f/meevwdbq" method="POST">
                            <div class="form-group">
                                <label>NAME</label>
                                <input type="text" name="name" placeholder="Your Full Name" required>
                            </div>
                            <div class="form-group">
                                <label>EMAIL</label>
                                <input type="email" name="email" placeholder="Your Email Address" required>
                            </div>
                            <div class="form-group">
                                <label>PROJECT SCOPE</label>
                                <select name="scope" required>
                                    <option value="">Select Scope</option>
                                    <option value="Small Project">Small Project (&lt; 1 month)</option>
                                    <option value="Medium Project">Medium Project (1-3 months)</option>
                                    <option value="Large Project">Large Project (3+ months)</option>
                                    <option value="Ongoing Partnership">Ongoing Partnership</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>MESSAGE</label>
                                <textarea name="message" rows="6" placeholder="Describe your project, goals, and any specific requirements" required></textarea>
                            </div>
                            <button type="submit" id="contact-submit-btn" class="btn btn-primary" style="width: 100%; padding: 1.2rem; font-weight: 700; letter-spacing: 1px;">Send Inquiry</button>
                        </form>
                        <div id="form-success" style="display:none; text-align:center; padding: 3rem 2rem;">
                            <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                            <h3 style="color: #4ade80; font-size: 1.5rem; margin-bottom: 0.8rem;">Message Sent Successfully!</h3>
                            <p style="color: rgba(255,255,255,0.6);">Thank you! We'll get back to you within 24 hours.</p>
                            <button onclick="document.getElementById('form-success').style.display='none'; document.getElementById('contact-form').style.display='block'; document.getElementById('contact-form').reset();" class="btn btn-outline" style="margin-top: 2rem;">Send Another</button>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="contact-card-premium reveal">
                            <div class="contact-card-icon"><i class="fas fa-envelope"></i></div>
                            <div class="contact-card-content">
                                <h4>Direct Email</h4>
                                <p>broadsolutiontech279@gmail.com</p>
                                <a href="mailto:broadsolutiontech279@gmail.com" class="contact-card-link">Email Us →</a>
                            </div>
                        </div>
                        <div class="contact-card-premium reveal">
                            <div class="contact-card-icon"><i class="fab fa-whatsapp"></i></div>
                            <div class="contact-card-content">
                                <h4>WhatsApp</h4>
                                <p>Connect with us directly for a quick chat and inquiries.</p>
                                <a href="https://wa.me/923214261477" target="_blank" class="contact-card-link">Chat Now →</a>
                            </div>
                        </div>
                        <div class="contact-card-premium reveal">
                            <div class="contact-card-icon"><i class="fas fa-share-alt"></i></div>
                            <div class="contact-card-content">
                                <h4>Social Presence</h4>
                                <p>Follow our journey and stay updated.</p>
                                <div class="contact-social-row">
                                    <a href="https://www.linkedin.com/in/chshehrozshafiq/" target="_blank" class="contact-social-circle"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/shehroz03" target="_blank" class="contact-social-circle"><i class="fab fa-github"></i></a>
                                    <a href="#" target="_blank" class="contact-social-circle"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

for filename in files:
    filepath = os.path.join('.', filename)
    if not os.path.exists(filepath): continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace contact section if it exists
    if '<section id="contact">' in content:
        import re
        content = re.sub(r'<section id="contact">.*?</section>', contact_html_template, content, flags=re.DOTALL)
    
    # Ensure logo is BST
    content = content.replace('>Broad Solution Tech</a>', '>BST</a>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Final global sync done.")
