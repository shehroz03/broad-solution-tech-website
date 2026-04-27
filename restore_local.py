import os

# Read the minified file
source = "E:/3d/dist/assets/style-mYtk3eFp.css"
dest = "E:/3d/style.css"

with open(source, 'r', encoding='utf-8') as f:
    content = f.read()

# Add the fix
content += "\\nselect option { background: #05000f !important; color: #fff !important; }\\n"

# Write in UTF-8
with open(dest, 'w', encoding='utf-8') as f:
    f.write(content)

print("Restored and fixed.")
