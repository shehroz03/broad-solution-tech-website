import os
import glob

# Function to replace external CDN links with local links in HTML files
def localize_scripts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove Preconnects
    content = content.replace('<link rel="preconnect" href="https://cdnjs.cloudflare.com">\n', '')
    content = content.replace('<link rel="preconnect" href="https://cdn.jsdelivr.net">\n', '')
    content = content.replace('<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">\n', '')
    content = content.replace('<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">\n', '')
    
    # 1.1 Also handle variations with different spacing
    content = content.replace('<link rel="preconnect" href="https://cdnjs.cloudflare.com">', '')
    content = content.replace('<link rel="preconnect" href="https://cdn.jsdelivr.net">', '')
    content = content.replace('<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">', '')
    content = content.replace('<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">', '')

    # 2. Update script srcs
    content = content.replace('src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"', 'src="./js/three.min.js"')
    content = content.replace('src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"', 'src="./js/vanta.birds.min.js"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Localized scripts for {filepath}")

# List of files to optimize
html_files = glob.glob('E:/3d/*.html')

for html in html_files:
    localize_scripts(html)
