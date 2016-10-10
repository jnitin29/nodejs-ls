"use strict";

require('./helper')
let fs = require('fs')
let path = require('path')
let {file, dest} = require('yargs').argv

async function linkFile(filename) {

  fs.stat (__dirname + '/' + filename, (err, stat) => {
    if (stat.isDirectory()) {
      console.log('can not read directory');
      return;
    } else {
      fs.link (__dirname + '/' + filename, dest + 'a.js', function(err) {
        if (err) {
          return console.error(err);
        }
      })
    }
  })
}

async function main() {
  if (file) {
    await linkFile(file)
  } else {
    console.log('file name??');
  }
}

main()
