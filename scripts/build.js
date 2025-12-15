const fs = require('fs');
const path = require('path');

// Create necessary directories
const distDir = path.join(__dirname, '..');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy files from @stoplight/elements
const nodeModulesPath = path.join(__dirname, '..', 'node_modules', '@stoplight', 'elements');
const sourceFiles = [
  { src: 'web-components.min.js', dest: 'web-components.min.js' },
  { src: 'styles.min.css', dest: 'styles.min.css' },
  { src: 'web-components.min.js.LICENSE.txt', dest: 'web-components.min.js.LICENSE.txt' }
];

console.log('Copying assets from @stoplight/elements...');

sourceFiles.forEach(file => {
  const srcPath = path.join(nodeModulesPath, file.src);
  const destPath = path.join(distDir, file.dest);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.src} to ${destPath}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

// Generate HTML file
const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>API Docs</title>
    <!-- Embed elements Elements via Web Component -->
    <script src="./web-components.min.js"></script>
    <link rel="stylesheet" href="./styles.min.css">
  </head>
  <body>
    <elements-api
      apiDescriptionUrl="https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml"
      router="hash"
      layout="sidebar"
    />
  </body>
</html>`;

const htmlPath = path.join(distDir, 'index.html');
fs.writeFileSync(htmlPath, htmlContent);
console.log(`Generated HTML file at ${htmlPath}`);

console.log('Build completed successfully!');