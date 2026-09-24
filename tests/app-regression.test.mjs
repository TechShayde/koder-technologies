import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const appSource = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
const packageJson = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url), 'utf8'),
);

test('GitHub footer icon does not rely on a lucide-react Github export', () => {
  assert.doesNotMatch(appSource, /\bGithub\s*,/);
  assert.doesNotMatch(appSource, /<Github\b/);
  assert.match(appSource, /function\s+GithubIcon\s*\(/);
  assert.match(appSource, /<GithubIcon\s+size=\{18\}\s*\/>/);
});

test('lucide-react remains declared for the other UI icons', () => {
  assert.equal(typeof packageJson.dependencies['lucide-react'], 'string');
  assert.match(appSource, /from\s+['"]lucide-react['"]/);
});

test('primary navigation has working in-page targets', () => {
  for (const id of ['work', 'services', 'about', 'contact']) {
    assert.match(appSource, new RegExp(`id=["']${id}["']`));
    assert.match(appSource, new RegExp(`href=["']#${id}["']`));
  }
});

test('portfolio contains the six intended Koder project cards', () => {
  for (const title of [
    'onTime',
    'Barcode Toolkit',
    'Context Canvas',
    'Local AI Lab',
    'Reader Engine',
    'Connected Services',
  ]) {
    assert.match(appSource, new RegExp(`title:\\s*['"]${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`));
  }
});

test('external GitHub link is labelled for accessibility', () => {
  assert.match(
    appSource,
    /href=["']https:\/\/github\.com\/["'][^>]*aria-label=["']GitHub["']/,
  );
});

test('contact CTA uses a mailto link', () => {
  assert.match(appSource, /href=["']mailto:hello@kodertechnologies\.com["']/);
});
