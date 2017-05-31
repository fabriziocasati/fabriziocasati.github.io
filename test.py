#! /usr/bin/python

# Open files
generated_file = open('generated.html', 'w')
main_file = open('example.html')
template_file = open('template.html')
header_file = open('header.html')
footer_file = open('footer.html')

# Copy lines from template file until tag <title> is not found
for line in template_file:
    # we want to copy also <body>, so the write() goes before the check
    if '<title>' in line:
        break
    else:
        generated_file.write(line)    

# Copy the page title from the non-template file//TODO pass as argument
for line in main_file:
    if '<title>' in line:
        generated_file.write("\t\t" + line)
        break

# Restart copying lines from template file until tag <nav> is found
for line in template_file:
    if line.strip() == '<nav>':
        break
    else:
        generated_file.write(line)

# Copy the navigation bar from header.html
for line in header_file:
    generated_file.write("\t\t" + line)

# Restart copying lines from template file when tag </nav> is found, until the tag <body> is found
for line in template_file:
    if line.strip() == '</nav>':
        break
for line in template_file:
    if line.strip() == '<body>':
        break

# Copy the whole remaining content of the non-template file
for line in main_file:
    generated_file.write("\t" + line)

# Restart copy lines from the template file when the tag </body> is found, until the tag <footer> is found
for line in template_file:
    if line.strip() == '</body>':
        break
for line in template_file:
    if line.strip() == '<footer>':
        break
    else:
        generated_file.write(line)

# Copy the whole content of footer.html
for line in footer_file:
    generated_file.write("\t" + line)

# Restart copy lines from the template file when tag </footer> is found, till the file end
for line in template_file:
    if line.strip() == '</footer>':
        break
for line in template_file:
    generated_file.write(line)

# Close all files
generated_file.close()
main_file.close()
template_file.close()
