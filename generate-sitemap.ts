import fs from 'fs';
import path from 'path';

// Domaine officiel
const domain = 'https://aldiinternationaltrading.com';

// Routes statiques basées sur ton App.tsx
const routes = [
  '/',
  '/vehicles',
  '/supplies',
  '/about',
  '/contact',
];

// Génération de l'entête XML
const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Pied du XML
const xmlFooter = '</urlset>';

// Corps du XML généré dynamiquement
let xmlBody = '';
routes.forEach((route) => {
  xmlBody += `  <url>\n`;
  xmlBody += `    <loc>${domain}${route}</loc>\n`;
  xmlBody += `    <changefreq>monthly</changefreq>\n`;
  xmlBody += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
  xmlBody += `  </url>\n`;
});

// Contenu complet du sitemap
const sitemapContent = xmlHeader + xmlBody + xmlFooter;

// Dossier /public
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Écriture du fichier sitemap.xml
fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  sitemapContent.trim(),
  { encoding: 'utf8' }
);

console.log('✅ Sitemap généré avec succès dans /public/sitemap.xml !');
