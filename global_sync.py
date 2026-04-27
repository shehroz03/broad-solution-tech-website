import os
import re

# New Rack Section CSS to be added to style.css
rack_css = """
/* SERVER RACK TEAM STYLES */
.rack-section{padding:5rem 0;position:relative;overflow:hidden}
.rack-header{text-align:center;margin-bottom:4rem}
.rack-header .tag{font-size:10px;letter-spacing:5px;text-transform:uppercase}
.rack-sub{color:rgba(255,255,255,.5);margin-top:.8rem;font-size:15px}
.rack-bg-lines{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.rack-flow{position:absolute;width:1px;background:linear-gradient(180deg,transparent,#06b6d4,transparent);opacity:.15;animation:rackFlow 4s linear infinite}
.rack-flow:nth-child(1){left:10%;height:120px;animation-delay:0s}
.rack-flow:nth-child(2){left:25%;height:80px;animation-delay:1.2s}
.rack-flow:nth-child(3){left:50%;height:100px;animation-delay:.6s}
.rack-flow:nth-child(4){left:75%;height:90px;animation-delay:2s}
.rack-flow:nth-child(5){left:90%;height:110px;animation-delay:1.5s}
@keyframes rackFlow{0%{top:-120px;opacity:0}20%{opacity:.2}80%{opacity:.2}100%{top:110%;opacity:0}}
.rack-founder{max-width:700px;margin:0 auto 2rem;position:relative;z-index:2}
.rack-fcard{background:rgba(255,255,255,.04);border:1px solid rgba(6,182,212,.25);border-radius:20px;padding:40px;position:relative;overflow:hidden;transition:border-color .3s,transform .3s}
.rack-fcard:hover{border-color:#06b6d4;transform:translateY(-4px)}
.rack-fcard::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#667eea,#06b6d4,#43e97b);border-radius:20px 20px 0 0}
.rack-leds{position:absolute;top:16px;right:20px;display:flex;gap:8px}
.rack-led{width:8px;height:8px;border-radius:50%;animation:ledBlink 2s ease-in-out infinite}
.rack-led:nth-child(1){background:#4ade80;box-shadow:0 0 8px #4ade80;animation-delay:0s}
.rack-led:nth-child(2){background:#facc15;box-shadow:0 0 8px #facc15;animation-delay:.7s}
.rack-led:nth-child(3){background:#06b6d4;box-shadow:0 0 8px #06b6d4;animation-delay:1.4s}
@keyframes ledBlink{0%,100%{opacity:1}50%{opacity:.3}}
.rack-fbadge{display:inline-block;padding:4px 14px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;background:linear-gradient(135deg,#667eea,#06b6d4);color:#fff;margin-bottom:1.2rem}
.rack-fname{font-size:28px;font-weight:800;color:#fff;margin-bottom:6px}
.rack-ftitle{color:rgba(255,255,255,.5);font-size:14px;margin-bottom:1.2rem}
.rack-fdesc{color:rgba(255,255,255,.55);font-size:14px;line-height:1.7;margin-bottom:1.5rem}
.rack-ftech{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:1.5rem}
.rack-ftech i{font-size:22px;color:rgba(255,255,255,.6);transition:color .3s,transform .3s}
.rack-ftech i:hover{color:#06b6d4;transform:scale(1.2)}
.rack-flinks{display:flex;gap:10px;flex-wrap:wrap}
.rack-flinks .btn{font-size:13px;padding:.6rem 1.2rem}
.rack-cofounders{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:700px;margin:0 auto 2rem;position:relative;z-index:2}
@media(max-width:640px){.rack-cofounders{grid-template-columns:1fr}}
.rack-team{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;position:relative;z-index:2}
@media(max-width:1024px){.rack-team{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.rack-team{grid-template-columns:1fr}}
.rack-unit{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px 20px;position:relative;overflow:hidden;transition:transform .3s,border-color .3s}
.rack-unit:hover{transform:translateY(-5px);border-color:var(--ru-color,#06b6d4)}
.rack-unit::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:2px;background:var(--ru-color,#06b6d4);transform:scaleX(0);transform-origin:left;transition:transform .3s}
.rack-unit:hover::after{transform:scaleX(1)}
.rack-unit-leds{display:flex;gap:5px;margin-bottom:14px}
.rack-unit-led{width:6px;height:6px;border-radius:50%;background:var(--ru-color,#06b6d4);opacity:.4;animation:ledBlink 2.5s ease-in-out infinite}
.rack-unit-led:nth-child(2){animation-delay:.5s}
.rack-unit-led:nth-child(3){animation-delay:1s}
.rack-ubadge{display:inline-block;padding:3px 10px;border-radius:12px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border:1px solid var(--ru-color,#06b6d4);color:var(--ru-color,#06b6d4);margin-bottom:12px}
.rack-uname{font-size:17px;font-weight:700;color:#fff;margin-bottom:4px}
.rack-utitle{font-size:12px;color:rgba(255,255,255,.45);margin-bottom:10px}
.rack-uexp{font-size:11px;color:var(--ru-color,#06b6d4);font-weight:600;margin-bottom:10px;letter-spacing:1px}
.rack-uskills{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px}
.rack-uskill{font-size:10px;padding:4px 10px;border-radius:20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.6)}
.rack-ulink{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.5);font-size:14px;transition:all .3s}
.rack-ulink:hover{border-color:var(--ru-color,#06b6d4);color:#fff;background:rgba(6,182,212,.15)}
.rack-connector{display:flex;justify-content:center;padding:10px 0;position:relative;z-index:2}
.rack-conn-line{width:2px;height:30px;background:linear-gradient(180deg,rgba(6,182,212,.4),rgba(6,182,212,.1));border-radius:2px;position:relative}
.rack-conn-line::after{content:'';position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);width:8px;height:8px;border-radius:50%;background:#06b6d4;opacity:.5;animation:ledBlink 2s ease-in-out infinite}
"""

with open('E:/3d/style.css', 'a', encoding='utf-8') as f:
    f.write(rack_css)

files = ['index.html', 'about.html', 'technology.html', 'our-work.html', 'reviews.html', 'contact.html']

for filename in files:
    filepath = os.path.join('E:/3d', filename)
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update Navbar link text
    content = content.replace('>About Founder</a>', '>Team</a>')
    
    # 2. Update Logos if any inconsistency (ensure BST is there)
    # content = re.sub(r'<span id="dynamic-logo-text">.*?</span>', '<span id="dynamic-logo-text">BST</span>', content)
    
    # 3. Remove local rack-section styles if present
    content = re.sub(r'<style>\s*\.rack-section.*?</style>', '', content, flags=re.DOTALL)
    
    # 4. In index.html specifically, check the hero tag
    if filename == 'index.html':
        content = content.replace('<span class="tag">About the Founder</span>', '<span class="tag">The Team</span>')
    
    # 5. In about.html, ensure the Hero tag matches the premium feel
    if filename == 'about.html':
        content = content.replace('<span class="tag">The Visionaries</span>', '<span class="tag">Broad Solution Tech</span>')
        content = content.replace('<h1>Behind the <span class="vision-gradient">Tech</span></h1>', '<h1>People Behind the <span class="vision-gradient">Vision</span></h1>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Global cleanup and sync done!")
