import os
import re

def inject_preloader(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define the preloader HTML
    preloader_html = """
    <!-- Preloader -->
    <div id="preloader">
        <div class="loader-content">
            <div class="loader-logo">BST</div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    </div>
    """

    # Define the preloader CSS
    preloader_css = """
        /* Premium Preloader */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #05000f;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.8s ease, visibility 0.8s;
        }
        .loader-content {
            text-align: center;
        }
        .loader-logo {
            font-size: 2.5rem;
            font-weight: 800;
            color: #fff;
            margin-bottom: 20px;
            letter-spacing: 5px;
            animation: pulse 1.5s infinite;
        }
        .loader-bar {
            width: 200px;
            height: 2px;
            background: rgba(255,255,255,0.1);
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }
        .loader-progress {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
            animation: loading 1.5s infinite;
        }
        @keyframes pulse { 0% { opacity: 0.5; transform: scale(0.98); } 50% { opacity: 1; transform: scale(1); } 100% { opacity: 0.5; transform: scale(0.98); } }
        @keyframes loading { 0% { left: -100%; } 100% { left: 100%; } }
        .preloader-hidden { opacity: 0; visibility: hidden; }
        body.loading { overflow: hidden; }
    """

    # Define the preloader JS
    preloader_js = """
    <script>
        // Handle Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                if (preloader) {
                    preloader.classList.add('preloader-hidden');
                    document.body.classList.remove('loading');
                }
            }, 600);
        });
    </script>
    """

    # Check if already injected
    if 'id="preloader"' in content:
        print(f"Skipping {file_path} - Preloader already exists.")
        return

    # Inject CSS into <style> tag or <head>
    if '<style>' in content:
        content = content.replace('<style>', '<style>' + preloader_css)
    else:
        content = content.replace('</head>', '<style>' + preloader_css + '</style>\n</head>')

    # Inject HTML into <body>
    content = content.replace('<body>', '<body class="loading">\n' + preloader_html)

    # Inject JS before </body>
    content = content.replace('</body>', preloader_js + '\n</body>')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Injected preloader into {file_path}")

html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html' and f != 'technology.html']
# Also include them to be sure
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    inject_preloader(file)
