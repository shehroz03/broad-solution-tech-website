import urllib.request
import os

url = "https://broadsolutiontech.com/style.css"
filepath = "E:/3d/style.css"

try:
    with urllib.request.urlopen(url) as response:
        content = response.read().decode('utf-8')
    
    # Add the missing dropdown fix at the end
    dropdown_fix = "\\n\\nselect option { background: #05000f !important; color: #fff !important; }\\n"
    if 'select option' not in content:
        content += dropdown_fix
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Style restored from live URL successfully.")
except Exception as e:
    print(f"Error restoring style: {e}")
