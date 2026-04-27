with open('E:/3d/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace social link linkedin
content = content.replace(
    '<a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>',
    '<a href="https://www.linkedin.com/in/chshehrozshafiq/" class="social-link" target="_blank"><i class="fab fa-linkedin-in"></i></a>'
)

# Replace premium team linkedin
content = content.replace(
    '<a href="#" class="linkedin-premium"><i class="fab fa-linkedin-in"></i></a>',
    '<a href="https://www.linkedin.com/in/chshehrozshafiq/" class="linkedin-premium" target="_blank"><i class="fab fa-linkedin-in"></i></a>'
)

with open('E:/3d/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated all LinkedIn icons')
