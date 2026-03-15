const fs = require('fs');
const path = require('path');

const ext = process.argv[2]; // 'js', 'html', 'css'
const currentDir = process.cwd();
const files = fs.readdirSync(currentDir);

let maxNum = 0;
const regex = new RegExp(`^task(\\d+)\\.${ext}$`);

files.forEach(file => {
  const match = file.match(regex);
  if (match) {
    const num = parseInt(match[1], 10);
    if (num > maxNum) maxNum = num;
  }
});

const nextNum = maxNum + 1;
const baseName = `task${nextNum}`;
const newFile = `${baseName}.${ext}`;
const newPath = path.join(currentDir, newFile);

try {
  if (ext === 'html') {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${baseName}</title>
  <!-- CSS_PLACEHOLDER -->
</head>
<body>
  <!-- JS_PLACEHOLDER -->
</body>
</html>`;

    fs.writeFileSync(newPath, htmlContent, 'utf8');
  } else {
    fs.writeFileSync(newPath, '', 'utf8');

    const htmlPath = path.join(currentDir, `${baseName}.html`);
    if (fs.existsSync(htmlPath)) {
      let htmlContent = fs.readFileSync(htmlPath, 'utf8');

      if (ext === 'js' && htmlContent.includes('<!-- JS_PLACEHOLDER -->')) {
        htmlContent = htmlContent.replace('<!-- JS_PLACEHOLDER -->', `<script src="${baseName}.js"></script>`);
      }

      if (ext === 'css' && htmlContent.includes('<!-- CSS_PLACEHOLDER -->')) {
        htmlContent = htmlContent.replace('<!-- CSS_PLACEHOLDER -->', `<link rel="stylesheet" href="${baseName}.css">`);
      }

      fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    }
  }
} catch (err) {
  console.error(`❌ Error creating ${newFile}:`, err.message);
}
