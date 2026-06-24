import re
import glob

# Fix Mojibake
mojibake_map = {
    'ðŸš€': '🚀',
    'ðŸŒ ': '🌍',
    'ðŸŽ¯': '🎯',
    'âš¡': '⚡',
    'ðŸ”’': '🔒',
    'ðŸŒ±': '🌱',
    'ðŸ’»': '💻',
    'ðŸ“Š': '📊',
    'ðŸ”§': '🔧',
    'ðŸ’¥': '💥',
    'ðŸ’¡': '💡',
    'ðŸ“±': '📱',
    'â€œ': '“',
    'â€ ': '”',
    'â€“': '–',
    'â€”': '—',
    'ðŸ¥': '🥇',
    'ðŸ’¼': '💼',
    'ðŸ› ï¸ ': '🛠️',
    'ðŸ’ ': '💡',
    'ðŸŽ ': '🎯',
    'ðŸ” ': '🔥',
    'ðŸŒ ': '🌐',
    'âœ¨': '✨',
    'ðŸ—ºï¸ ': '🗺️',
    'ðŸ˜Š': '😊',
    'ðŸ‘ ': '👍',
    'ðŸ˜Ž': '😎',
    'âœ…': '✅',
    'ðŸ¤ ': '🤝',
    'â†’': '→'
}

def replace_colors(style_content):
    # Backgrounds
    style_content = re.sub(r'#05000f', 'var(--bg-color)', style_content, flags=re.IGNORECASE)
    # Texts
    style_content = re.sub(r'color:\s*#ffffff', 'color: var(--text-primary)', style_content, flags=re.IGNORECASE)
    style_content = re.sub(r'color:\s*#fff(?![\w\d])', 'color: var(--text-primary)', style_content, flags=re.IGNORECASE)
    style_content = re.sub(r'color:\s*rgba\(255,\s*255,\s*255,\s*0\.[56789]\)', 'color: var(--text-secondary)', style_content, flags=re.IGNORECASE)
    style_content = re.sub(r'color:\s*rgba\(255,\s*255,\s*255,\s*0\.[1234]\)', 'color: var(--text-secondary)', style_content, flags=re.IGNORECASE)
    # Glass backgrounds
    style_content = re.sub(r'background:\s*rgba\(255,\s*255,\s*255,\s*0\.0[2345]\)', 'background: var(--glass-bg)', style_content, flags=re.IGNORECASE)
    style_content = re.sub(r'background-color:\s*rgba\(255,\s*255,\s*255,\s*0\.0[2345]\)', 'background-color: var(--glass-bg)', style_content, flags=re.IGNORECASE)
    # Glass borders
    style_content = re.sub(r'border.*rgba\(255,\s*255,\s*255,\s*0\.0[56789]\)', 'border-color: var(--glass-border)', style_content, flags=re.IGNORECASE)
    return style_content

def process_html_files():
    html_files = glob.glob('e:/3d/*.html')
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        for bad, good in mojibake_map.items():
            content = content.replace(bad, good)

        # In HTML, only replace colors inside <style> tags
        content = re.sub(r'<style>.*?</style>', lambda m: replace_colors(m.group(0)), content, flags=re.DOTALL | re.IGNORECASE)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    print(f'Processed {len(html_files)} HTML files!')

def process_css_files():
    css_files = glob.glob('e:/3d/*.css')
    for file in css_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Don't replace variables definitions themselves! 
        # The variables are defined at the top inside :root and [data-theme="light"]
        # So we'll skip the first 25 lines roughly (or just split by first '}' of [data-theme="light"])
        
        parts = content.split('cursor-dot{', 1)
        if len(parts) == 2:
            safe_header = parts[0]
            rest = 'cursor-dot{' + parts[1]
            rest = replace_colors(rest)
            content = safe_header + rest
        else:
            content = replace_colors(content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    print(f'Processed {len(css_files)} CSS files!')

process_html_files()
process_css_files()
