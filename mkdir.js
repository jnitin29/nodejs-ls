"use strict";

require('./helper')
let fs = require('fs')
let {dir} = require('yargs').argv

async function makeDir(directory) {
  //let files = await fs.promise.readdir(__dirname)
  //let makeDirectory = true;
  // files.forEach( fileName => {
  //   fs.stat(path.join(__dirname, fileName), (err, stat) => {
  //     if (stat.isDirectory()) {
  //       if (directory === fileName) {
  //         console.log('directory already exists')
  //         makeDirectory = false
  //         return
  //       }
  //     }
  //   })
  // })
  //if (!makeDirectory) {
  fs.mkdir (__dirname + '/' + directory, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('directory created successfully');
  })
}

async function main() {
  if (dir) {
    await makeDir(dir)
  } else {
    console.log('directory name??');
  }
}

main()
