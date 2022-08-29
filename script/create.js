#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const args = process.argv.slice(2);
const templateDir = path.join(__dirname, '../template');
const targetDir = path.join(__dirname, '../src', args[0]);

const exit = (code, info) => {
  if (code != 0) console.error(info);
  process.exit(code);
}
function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

console.log('args:', args);
console.log('templateDir:', templateDir);
console.log('targetDir:', targetDir);

if (!targetDir) exit(-1);

if (fs.existsSync(targetDir)) exit(-1);

const files = fs.readdirSync(templateDir);
fs.mkdirSync(targetDir, { recursive: true });

files.forEach(file => {
  console.log('file:', file);
  copy(path.join(templateDir, file), path.join(targetDir, file));
})

