const jimp = require('jimp');
const path = require('path');
const { createScreenshotBuffer } = require('./screenshot');

const snapshotPicPath = path.join(__dirname, 'snapshot', 'bundle-page.png');

async function main() {
  const buf = await createScreenshotBuffer('/dist/index.html');
  (await jimp.read(buf)).scale(1).quality(100).write(snapshotPicPath);
  console.log('创建页面快照成功！')
}

main();