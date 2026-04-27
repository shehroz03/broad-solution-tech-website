import os

with open('E:/3d/style.css', 'rb') as f:
    content = f.read()

# Try to find and remove the UTF-16 encoded line
# s e l e c t in UTF-16 LE is 's\x00e\x00l\x00e\x00c\x00t\x00'
# However, let's just rewrite the whole file up to the point before it
# Based on my view_file, line 2432 is the last good line.

# Or just use a simple string replace for the corrupted part
# since it's at the end, I'll just truncate and rewrite.

with open('E:/3d/style.css', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

final_lines = []
for line in lines:
    if 's e l e c t' not in line:
        final_lines.append(line)

# Re-add the correct style at the end
correct_style = """
select option { 
    background: #05000f !important; 
    color: #fff !important; 
}
"""

with open('E:/3d/style.css', 'w', encoding='utf-8') as f:
    f.writelines(final_lines)
    if 'select option' not in "".join(final_lines):
        f.write(correct_style)

print("CSS Cleaned.")
