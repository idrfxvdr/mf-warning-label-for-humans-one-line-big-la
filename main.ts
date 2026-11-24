import { mkdirSync, writeFileSync } from 'node:fs';

const entry = 'WARNING: If told "careful, plate is hot," product will touch plate to confirm.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
