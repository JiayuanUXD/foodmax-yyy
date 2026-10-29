import {spawnSync} from 'node:child_process';
const version=process.argv[2];
if(!version||!/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/.test(version)){console.error('用法：npm run components:update -- 0.1.1');process.exit(1);}
for(const args of [['install',`keenmart-ui-kit@${version}`,'--save-exact'],['run','check']]){const r=spawnSync('npm',args,{stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);}
