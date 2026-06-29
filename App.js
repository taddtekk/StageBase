const fs = require("fs");
const http = require("http");
const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

const appDir = path.join(__dirname, "apps", "web");
const buildIdFile = path.join(appDir, ".next", "BUILD_ID");
const next = require(path.join(appDir, "node_modules", "next"));

if (!fs.existsSync(buildIdFile)) {
  throw new Error(
    "StageBase wurde noch nicht gebaut. Bitte zuerst `pnpm install`, `pnpm db:generate` und `pnpm build` ausfuehren."
  );
}

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME;
const app = next({ dev: false, dir: appDir, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((request, response) => {
        handle(request, response);
      })
      .listen(port, hostname, () => {
        console.log(`StageBase laeuft auf http://${hostname}:${port}`);
      });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
