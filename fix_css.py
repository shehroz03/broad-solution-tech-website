# Fix style.css encoding and syntax
with open('E:/3d/style.css', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

# Clean lines and append correctly
clean_lines = [line for line in lines if 'select option' not in line]

fix = """
select option { 
    background: #05000f !important; 
    color: #fff !important; 
}
"""

with open('E:/3d/style.css', 'w', encoding='utf-8') as f:
    f.writelines(clean_lines)
    f.write(fix)

print("CSS Fixed.")
