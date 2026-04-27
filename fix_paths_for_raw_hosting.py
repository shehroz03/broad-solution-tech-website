import glob

for filepath in glob.glob('E:/3d/*.html'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Change /js/ to ./public/js/ because the server is serving the raw source directory!
    content = content.replace('src="/js/three.min.js"', 'src="./public/js/three.min.js"')
    content = content.replace('src="/js/vanta.birds.min.js"', 'src="./public/js/vanta.birds.min.js"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated paths in {filepath} to point to ./public/js/")
