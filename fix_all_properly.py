import os
import glob

# Files to fix
files = glob.glob('E:/3d/*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Standardize paths for Vite and Root Hosting
    content = content.replace('./public/js/', '/js/')
    content = content.replace('src="./main.js"', 'src="/main.js"')
    content = content.replace('href="./style.css"', 'href="/style.css"')
    
    # Fix the missing module type if needed
    if 'src="/js/vanta.birds.min.js"' in content and 'defer' not in content:
        content = content.replace('src="/js/vanta.birds.min.js"', 'src="/js/vanta.birds.min.js" defer')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Properly fixed paths in {filepath}")
