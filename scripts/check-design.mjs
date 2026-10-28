import fs from 'node:fs';import path from 'node:path';
const issues=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(/\.(tsx?|css)$/.test(p)){const s=fs.readFileSync(p,'utf8');
 if(/(?:DesignSystemLab|ComponentWorkbench|\/screens\/|keenmart-ui-review)/.test(s))issues.push(p+': imports review system');
 if(p.endsWith('App.tsx')&&!/from ['"]keenmart-ui-kit['"]/.test(s))issues.push(p+': use real library components');
 if([...s.matchAll(/font-family\s*:\s*([^;}\n]+)/gi),...s.matchAll(/fontFamily\s*:\s*['"]([^'"]+)/g)].some(m=>!m[1].trim().startsWith('var(')))issues.push(p+': do not override locale/price typography');
 if(p.endsWith('.css')&&p!=='src/page.css'&&/#[0-9a-f]{3,8}\b|(?:padding|margin|gap|border-radius)\s*:\s*\d+[pP][xX]/i.test(s))issues.push(p+': use design tokens for component styles');
}}}
walk('src');if(issues.length){console.error(issues.join('\n'));process.exit(1)}console.log('PASS: real library import, no workbench import or font override. Visual review still required.');
