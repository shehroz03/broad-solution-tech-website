# Absolute binary clean of style.css
import os

with open('E:/3d/style.css', 'rb') as f:
    data = f.read()

# Filter out all null bytes and other non-ascii characters that might break CSS
# Keep only printable characters and common whitespace
clean_data = bytearray()
for b in data:
    if b == 10 or b == 13 or (b >= 32 and b <= 126):
        clean_data.append(b)

# Now remove the 's e l e c t' pattern manually if it still exists
content = clean_data.decode('ascii', errors='ignore')

# Remove lines containing "s e l e c t"
lines = content.splitlines()
final_lines = [line for line in lines if 's e l e c t' not in line]

fix = """
select option { 
    background: #05000f !important; 
    color: #fff !important; 
}
"""

with open('E:/3d/style.css', 'w', encoding='utf-8') as f:
    f.write("\\n".join(final_lines))
    f.write(fix)

print("Binary Clean done.")
