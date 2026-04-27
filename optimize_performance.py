import os

# Function to optimize script loading in HTML files
def optimize_loading(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Add Preconnect to Head
    preconnects = """
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
    """
    if '</head>' in content and 'preconnect' not in content:
        content = content.replace('</head>', f'{preconnects}\n</head>')

    # 2. Add Defer to Scripts
    content = content.replace('src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"', 'src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer')
    content = content.replace('src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"', 'src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js" defer')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Optimized loading for {filepath}")

# List of files to optimize
html_files = ['E:/3d/index.html', 'E:/3d/about.html', 'E:/3d/contact.html', 'E:/3d/our-work.html', 'E:/3d/reviews.html', 'E:/3d/technology.html']

for html in html_files:
    if os.path.exists(html):
        optimize_loading(html)
