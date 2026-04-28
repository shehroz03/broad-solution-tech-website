import os
import glob
import re

# Files to fix
files = glob.glob('E:/3d/*.html')

script_bundle = """
    <!-- Background Animation Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
    <script type="module" src="./main.js"></script>
"""

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove existing script tags for three, vanta, and main to avoid duplicates
    content = re.sub(r'<script.*three.min.js.*></script>', '', content)
    content = re.sub(r'<script.*vanta.birds.min.js.*></script>', '', content)
    content = re.sub(r'<script.*src=".*main.js".*></script>', '', content)
    
    # 2. Insert the script bundle before </body>
    if '</body>' in content:
        content = content.replace('</body>', script_bundle + '</body>')
    else:
        content += script_bundle

    # 3. Fix main.js and style.css paths globally
    content = content.replace('src="/main.js"', 'src="./main.js"')
    content = content.replace('href="/style.css"', 'href="./style.css"')
    
    # 4. Remove Vite dev client
    content = re.sub(r'<script type="module" src="http://localhost:5173/@vite/client"></script>', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Ensured scripts and fixed paths in {filepath}")
