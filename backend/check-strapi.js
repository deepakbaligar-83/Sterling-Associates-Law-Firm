// Quick script to check if Strapi is running and accessible
const http = require('http');

const STRAPI_URL = 'http://localhost:1337';

console.log('Checking Strapi connection...\n');

// Check if Strapi is running
http.get(`${STRAPI_URL}/_health`, (res) => {
  console.log('✅ Strapi is running!');
  console.log(`Status: ${res.statusCode}\n`);
  
  // Check API endpoints
  checkEndpoint('/api/services?populate=*');
  checkEndpoint('/api/hero-image?populate=*');
}).on('error', (err) => {
  console.log('❌ Strapi is NOT running!');
  console.log('Error:', err.message);
  console.log('\nTo start Strapi, run:');
  console.log('  cd backend');
  console.log('  npm run develop\n');
});

function checkEndpoint(path) {
  http.get(`${STRAPI_URL}${path}`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log(`✅ ${path} - OK`);
      } else if (res.statusCode === 403) {
        console.log(`⚠️  ${path} - Forbidden (Check permissions in Strapi admin)`);
      } else {
        console.log(`❌ ${path} - Status ${res.statusCode}`);
      }
    });
  }).on('error', (err) => {
    console.log(`❌ ${path} - Error: ${err.message}`);
  });
}
