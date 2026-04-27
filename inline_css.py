import os

css_content = """
    <style>
        .rack-section { padding: 8rem 0; position: relative; overflow: hidden; background: #05000f; }
        .rack-header { text-align: center; margin-bottom: 5rem; position: relative; z-index: 5; }
        .rack-header h2 { font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem; }
        .rack-sub { color: rgba(255,255,255,0.5); max-width: 600px; margin: 0 auto; }
        
        .rack-bg-lines { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
        .rack-flow { position: absolute; width: 1px; background: linear-gradient(180deg, transparent, #8b5cf6, transparent); opacity: 0.2; animation: rackFlow 4s linear infinite; }
        @keyframes rackFlow { 0% { top: -20%; opacity: 0; } 50% { opacity: 0.3; } 100% { top: 120%; opacity: 0; } }
        
        .rack-founder { max-width: 800px; margin: 0 auto 4rem; position: relative; z-index: 5; }
        .rack-fcard { 
            background: rgba(255,255,255,0.03); 
            border: 1px solid rgba(139,92,246,0.2); 
            border-radius: 24px; 
            padding: 3rem; 
            position: relative; 
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
        }
        .rack-fcard:hover { border-color: #8b5cf6; transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .rack-fcard::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #6b2fd9, #8b5cf6); border-radius: 24px 24px 0 0; }
        
        .rack-leds { position: absolute; top: 20px; right: 30px; display: flex; gap: 10px; }
        .rack-led { width: 10px; height: 10px; border-radius: 50%; animation: ledPulse 2s infinite; }
        @keyframes ledPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.9); } }
        
        .rack-fbadge { display: inline-block; padding: 6px 16px; background: rgba(139,92,246,0.1); color: #a78bfa; border: 1px solid rgba(139,92,246,0.3); border-radius: 100px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem; }
        .rack-fname { font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; }
        .rack-ftitle { color: #8b5cf6; font-weight: 600; margin-bottom: 1.5rem; display: block; opacity: 0.8; }
        .rack-fdesc { color: rgba(255,255,255,0.6); line-height: 1.8; margin-bottom: 2rem; font-size: 1.1rem; }
        
        .rack-ftech { display: flex; gap: 20px; margin-bottom: 2rem; font-size: 1.5rem; color: rgba(255,255,255,0.4); }
        .rack-ftech i:hover { color: #8b5cf6; transform: scale(1.2); }
        
        .rack-connector { display: flex; justify-content: center; margin: 2rem 0; position: relative; z-index: 5; }
        .rack-conn-line { width: 2px; height: 60px; background: linear-gradient(180deg, #8b5cf6, transparent); position: relative; }
        .rack-conn-line::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translate(-50%, 50%); width: 12px; height: 12px; background: #8b5cf6; border-radius: 50%; box-shadow: 0 0 15px #8b5cf6; }
        
        .rack-cofounders { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 900px; margin: 0 auto 4rem; position: relative; z-index: 5; }
        .rack-team { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; z-index: 5; }
        
        .rack-unit { 
            background: rgba(255,255,255,0.02); 
            border: 1px solid rgba(255,255,255,0.05); 
            border-radius: 20px; 
            padding: 2rem; 
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }
        .rack-unit:hover { border-color: var(--ru-color); transform: translateY(-8px); background: rgba(255,255,255,0.04); }
        .rack-unit::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: var(--ru-color); transform: scaleX(0); transition: transform 0.4s ease; transform-origin: left; }
        .rack-unit:hover::after { transform: scaleX(1); }
        
        .rack-unit-leds { display: flex; gap: 6px; margin-bottom: 1.5rem; }
        .rack-unit-led { width: 6px; height: 6px; border-radius: 50%; background: var(--ru-color); opacity: 0.3; animation: ledPulse 2s infinite; }
        
        .rack-ubadge { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: var(--ru-color); letter-spacing: 2px; margin-bottom: 1rem; display: block; }
        .rack-uname { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem; color: #fff; }
        .rack-utitle { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-bottom: 1rem; }
        .rack-uexp { font-size: 0.75rem; font-weight: 800; color: var(--ru-color); margin-bottom: 1rem; }
        
        .rack-uskills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 1.5rem; }
        .rack-uskill { font-size: 0.7rem; padding: 4px 10px; background: rgba(255,255,255,0.05); border-radius: 100px; color: rgba(255,255,255,0.6); }
        
        .rack-ulink { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.5); transition: all 0.3s; }
        .rack-ulink:hover { background: var(--ru-color); color: #fff; transform: rotate(360deg); }
        
        @media (max-width: 1024px) {
            .rack-team { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
            .rack-cofounders, .rack-team { grid-template-columns: 1fr; }
            .rack-fname { font-size: 2rem; }
            .rack-fcard { padding: 2rem; }
        }
    </style>
"""

files = ['index.html', 'about.html']
for filename in files:
    filepath = os.path.join('E:/3d', filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Insert before </head>
    if '</head>' in content:
        content = content.replace('</head>', css_content + '</head>')
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Inlined CSS to HTML files.")
