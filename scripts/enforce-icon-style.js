const fs = require('fs');
const path = require('path');

// Target the folder containing your source SVGs
const iconsDir = path.join(__dirname, '../src/icons/svg');

if (!fs.existsSync(iconsDir)) {
  console.error(`Error: Icons directory not found at ${iconsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
let modifiedCount = 0;

console.log(`🔒 Enforcing Ciphera Style on ${files.length} icons...`);

files.forEach(file => {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // RULE 1: Sharpen Corners (The "Industrial" Look)
  // Replace rounded linejoins with miter (sharp point)
  content = content.replace(/stroke-linejoin="round"/g, 'stroke-linejoin="miter"');
  
  // RULE 2: Square Ends (The "Technical" Look)
  // Replace rounded caps with square/butt
  content = content.replace(/stroke-linecap="round"/g, 'stroke-linecap="square"');

  // Only write if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    modifiedCount++;
    console.log(`  - Sharpened: ${file}`);
  }
});

if (modifiedCount > 0) {
  console.log(`✅ Sharpened ${modifiedCount} icons. Style enforced.`);
} else {
  console.log(`✨ All icons already comply with Ciphera style.`);
}
