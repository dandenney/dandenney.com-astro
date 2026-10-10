import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

export function chromiumCandidates() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  ];
  const tools = path.join(homedir(), ".hermes", "tools");
  if (existsSync(tools)) {
    for (const directory of readdirSync(tools)) {
      if (!directory.startsWith("chromium-")) continue;
      candidates.push(path.join(tools, directory,
        "chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"));
      candidates.push(path.join(tools, directory,
        "chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"));
    }
  }
  return candidates.filter(Boolean).map((candidate) => ({ path: candidate, exists: existsSync(candidate) }));
}
