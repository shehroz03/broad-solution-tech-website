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
                        <form action="https://formspree.io/f/meevwdbq" method="POST">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Your Full Name" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Your Email Address" required>
                            </div>
                            <div class="form-group">
                                <label>Project Scope</label>
                                <select name="scope" required>
                                    <option value="">Select Scope</option>
                                    <option value="Small Project">Small Project (&lt; 1 month)</option>
                                    <option value="Medium Project">Medium Project (1-3 months)</option>
                                    <option value="Large Project">Large Project (3+ months)</option>
                                    <option value="Ongoing Partnership">Ongoing Partnership</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="6" placeholder="Describe your project, goals, and any specific requirements" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1.2rem; font-weight: 700; letter-spacing: 1px;">Send Inquiry</button>
                        </form>
                    </div>
                    <div class="contact-info">
                        <div class="info-item glass reveal">
                            <h4 style="color: #8b5cf6; margin-bottom: 0.8rem;">Direct Email</h4>
                            <p>hello@broadsolutiontech.com</p>
                            <a href="mailto:hello@broadsolutiontech.com" style="color: #a78bfa; font-weight: 700; text-decoration: none; display: inline-block; margin-top: 1rem;">Email Us →</a>
                        </div>
                        <div class="info-item glass reveal">
                            <h4 style="color: #8b5cf6; margin-bottom: 0.8rem;">WhatsApp</h4>
                            <p>Connect with us directly for a quick chat.</p>
                            <a href="https://wa.me/yournumber" class="btn btn-outline" style="margin-top: 1.5rem; width: 100%;"><i class="fab fa-whatsapp" style="margin-right: 8px;"></i> Chat Now</a>
                        </div>
                        <div class="info-item glass reveal">
                            <h4 style="color: #8b5cf6; margin-bottom: 0.8rem;">Social Presence</h4>
                            <div style="display: flex; gap: 12px; margin-top: 1.5rem;">
                                <a href="https://www.linkedin.com/in/chshehrozshafiq/" target="_blank" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; transition: all 0.3s;"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://github.com/shehroz03" target="_blank" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; transition: all 0.3s;"><i class="fab fa-github"></i></a>
                                <a href="#" target="_blank" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; transition: all 0.3s;"><i class="fab fa-x-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

for filename in files:
    filepath = os.path.join('E:/3d', filename)
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
