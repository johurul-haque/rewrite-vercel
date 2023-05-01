#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { cwd } = process;

function generateVercelJson() {
  const content = `{
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }`;
  const packageDir = path.resolve(__dirname);
  const vercelJsonPath = path.join(cwd(), 'vercel.json');
  fs.writeFileSync(path.join(packageDir, 'vercel.json'), content);
  fs.copyFileSync(path.join(packageDir, 'vercel.json'), vercelJsonPath);
  console.log('vercel.json created!');
}

generateVercelJson();
