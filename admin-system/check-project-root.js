// check-project-root.js
import fs from 'fs';
import path from 'path';

const requiredFiles = ['package.json', 'vite.config.ts', 'src'];
const currentDir = process.cwd();

const missing = requiredFiles.filter(name => !fs.existsSync(path.join(currentDir, name)));

if (missing.length === 0) {
  console.log('✅ 当前是项目根目录。你可以运行 npm run dev');
} else {
  console.log('❌ 当前不是有效的项目根目录。缺少以下文件/目录:');
  missing.forEach(name => console.log(`  - ${name}`));
}
