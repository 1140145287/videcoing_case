import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
function run(name, command, args, cwd = '.') {
  console.log(`\n[CHECK] ${name}`);
  const result = spawnSync(command, args, {
    cwd: resolve(root, cwd), stdio: 'inherit', shell: false, timeout: 600_000,
  });
  if (result.error || result.status !== 0) {
    console.error(`[FAIL] ${name}: ${result.error?.message ?? result.status ?? result.signal}`);
    process.exit(1);
  }
}
const config = JSON.parse(readFileSync(new URL('../testing.config.json', import.meta.url), 'utf8'));
if (typeof config.businessTestsRequired !== 'boolean' || !Array.isArray(config.commands)) {
  throw new Error('Invalid testing configuration');
}
const kinds = new Set(['test', 'lint', 'typecheck', 'build']);
for (const entry of config.commands) {
  if (!entry.name || typeof entry.command !== 'string' || !entry.command ||
      !Array.isArray(entry.args) || !entry.args.every(arg => typeof arg === 'string') ||
      typeof entry.cwd !== 'string' || !kinds.has(entry.kind)) {
    throw new Error('Invalid check entry');
  }
}
run('Project governance', process.execPath, ['--test', 'tests/governance/project.test.mjs']);
const hasTests = config.commands.some(entry => entry.kind === 'test');
if (!hasTests) {
  console.log('BUSINESS TESTS NOT CONFIGURED: infrastructure checks only.');
  if (config.businessTestsRequired || process.argv.includes('--release')) process.exit(1);
}
for (const entry of config.commands) run(entry.name, entry.command, entry.args, entry.cwd);
console.log('Configured checks passed.');
