import * as fs from "fs";
import * as path from "path";

function readAllFiles(dirPath: string, outputPath: string) {
  const result: string[] = [];

  function walk(currentPath: string) {
    const items = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(currentPath, item.name);

      if (item.isDirectory()) {
        walk(fullPath);
      } else {
        const content = fs.readFileSync(fullPath, "utf-8");
        result.push(`${fullPath}\n${content}\n`);
      }
    }
  }

  walk(dirPath);

  fs.writeFileSync(outputPath, result.join("\n"), "utf-8");
  console.log(`✅ Xuất file thành công: ${outputPath}`);
}

// Ví dụ dùng
readAllFiles("./src", "./src.txt");