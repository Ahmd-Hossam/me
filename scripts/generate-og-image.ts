/**
 * Renders public/og-image.png (1200×630, social previews) and public/apple-touch-icon.png
 * from the profile data, using a locally installed Chrome/Edge in headless mode.
 * No npm dependency needed. Run with `npm run og` after changing the name or title, then commit
 * the PNGs. Set CHROME_PATH if the browser isn't found automatically.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PROFILE } from '../src/app/data/profile.data.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const fonts = pathToFileURL(join(root, 'public/fonts/')).href;

const CANDIDATES = [
  process.env['CHROME_PATH'],
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];
const chrome = CANDIDATES.find((path): path is string => !!path && existsSync(path));
if (!chrome) {
  console.error('Chrome/Edge not found. Set CHROME_PATH to a Chromium-based browser.');
  process.exit(1);
}

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const head = `<meta charset="utf-8"><style>
  @font-face { font-family: Plex; font-weight: 400; src: url('${fonts}ibm-plex-sans-latin-400-normal.woff2'); }
  @font-face { font-family: Plex; font-weight: 600; src: url('${fonts}ibm-plex-sans-latin-600-normal.woff2'); }
  @font-face { font-family: Plex; font-weight: 700; src: url('${fonts}ibm-plex-sans-latin-700-normal.woff2'); }
  @font-face { font-family: PlexMono; font-weight: 500; src: url('${fonts}ibm-plex-mono-latin-500-normal.woff2'); }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; }
  body { font-family: Plex, sans-serif; background: #0b0d10; color: #e7e9ec; }
</style>`;

const ogHtml = `<!doctype html><html><head>${head}<style>
  body { position: relative; padding: 72px 80px; display: flex; flex-direction: column; }
  .grid { position: absolute; inset: 0; background-image: radial-gradient(#262a31 1.5px, transparent 1.5px);
    background-size: 28px 28px; mask-image: radial-gradient(ellipse 90% 80% at 80% 0%, black, transparent); }
  .glow { position: absolute; right: -260px; top: -260px; width: 820px; height: 820px; border-radius: 50%;
    background: radial-gradient(closest-side, rgba(45, 212, 191, 0.22), transparent); }
  .mark { position: relative; width: 88px; height: 88px; border-radius: 22px; background: #e7e9ec; color: #0b0d10;
    display: grid; place-items: center; font: 500 34px PlexMono, monospace; }
  .mark span { color: #0f766e; }
  h1 { position: relative; margin-top: auto; font-size: 112px; line-height: 1; font-weight: 700; letter-spacing: -3px; }
  .title { position: relative; margin-top: 22px; font-size: 40px; font-weight: 600; color: #2dd4bf; }
  .bar { position: relative; margin-top: 40px; padding-top: 26px; border-top: 2px solid #262a31;
    display: flex; gap: 40px; white-space: nowrap; font: 500 22px PlexMono, monospace; color: #9ba3ae; }
  .bar b { color: #2dd4bf; font-weight: 500; }
</style></head><body>
  <div class="grid"></div><div class="glow"></div>
  <div class="mark"><p>${escape(PROFILE.initials)}<span>.</span></p></div>
  <h1>${escape(PROFILE.name.en)}</h1>
  <p class="title">${escape(PROFILE.title.en)}</p>
  <div class="bar">${[...PROFILE.facts.slice(0, 2), PROFILE.location]
    .map((fact) => `<span><b>•</b> ${escape(fact.en)}</span>`)
    .join('')}</div>
</body></html>`;

// Headless Chrome can't render narrower than ~500px, so the touch icon is 512×512.
const iconHtml = `<!doctype html><html><head>${head}<style>
  body { display: grid; place-items: center; background: #0b0d10; color: #e7e9ec;
    font: 500 190px PlexMono, monospace; }
  span { color: #2dd4bf; }
</style></head><body><p>${escape(PROFILE.initials)}<span>.</span></p></body></html>`;

const workDir = mkdtempSync(join(tmpdir(), 'og-'));
try {
  render(ogHtml, 'og-image.png', 1200, 630);
  render(iconHtml, 'apple-touch-icon.png', 512, 512);
} finally {
  rmSync(workDir, { recursive: true, force: true });
}

function render(html: string, output: string, width: number, height: number): void {
  const page = join(workDir, `${output}.html`);
  writeFileSync(page, html);
  execFileSync(chrome!, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=1',
    `--window-size=${width},${height}`,
    '--virtual-time-budget=3000',
    `--screenshot=${join(root, 'public', output)}`,
    pathToFileURL(page).href,
  ], { stdio: 'ignore' });
  console.log(`Generated public/${output} (${width}×${height})`);
}
