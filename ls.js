"use strict";

require('./helper')
let fs = require('fs')
let path = require('path')
let {dir} = require('yargs')
  .default('dir', __dirname)
  .argv

async function ls(rootpath) {
  let files = await fs.promise.readdir(rootpath)
  files.forEach( fileName => {
    fs.stat(path.join(rootpath, fileName), (err, stat) => {
      if (!stat.isDirectory()) {
        console.log(path.join(rootpath, fileName));
        return;
      } else {
        ls(path.join(rootpath, fileName))
      }
    })
  })
}

async function main() {
  await ls(dir)
}

main()
