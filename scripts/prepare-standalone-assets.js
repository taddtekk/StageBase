const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const webRoot = path.join(root, "apps", "web");
const standaloneWebRoot = path.join(webRoot, ".next", "standalone", "apps", "web");

const copies = [
  {
    from: path.join(webRoot, "public"),
    to: path.join(standaloneWebRoot, "public")
  },
  {
    from: path.join(webRoot, ".next", "static"),
    to: path.join(standaloneWebRoot, ".next", "static")
  }
];

for (const copy of copies) {
  if (!fs.existsSync(copy.from)) {
    throw new Error(`Quelle fehlt: ${copy.from}`);
  }

  fs.rmSync(copy.to, { force: true, recursive: true });
  fs.mkdirSync(path.dirname(copy.to), { recursive: true });
  fs.cpSync(copy.from, copy.to, { recursive: true });
}

console.log("Standalone assets vorbereitet.");
