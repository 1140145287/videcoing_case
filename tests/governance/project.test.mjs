import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = new URL('../../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
test('AI entry points require test-first workflow', () => {
  for (const path of ['AGENTS.md', 'README.md', 'docs/PROJECT_MEMORY.md']) {
    assert.match(read(path), /RED.*GREEN.*REFACTOR/);
    assert.match(read(path), /AGENTS\.md|TESTING\.md/);
  }
});
test('one command runs checks and CI uses the same command', () => {
  const pkg = JSON.parse(read('package.json'));
  assert.equal(pkg.scripts.check, 'node scripts/check.mjs');
  assert.match(read('.github/workflows/checks.yml'), /npm run check/);
  assert.ok(existsSync(fileURLToPath(new URL('scripts/check.mjs', root))));
});
test('business test readiness is reported separately', () => {
  const config = JSON.parse(read('testing.config.json'));
  assert.equal(typeof config.businessTestsRequired, 'boolean');
  assert.ok(Array.isArray(config.commands));
  assert.match(read('scripts/check.mjs'), /BUSINESS TESTS NOT CONFIGURED/);
});
