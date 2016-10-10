"use strict";

require('./helper')
let fs = require('fs')
let path = require('path')
let {file} = require('yargs').argv

async function rmFile(filename) {

  fs.stat (__dirname + '/' + filename, (err, stat) => {
    if (stat.isDirectory()) {
      console.log('can not delete directory');
      return;
    } else {
      fs.unlink (__dirname + '/' + filename, function(err) {
        if (err) {
          return console.error(err);
        }
        console.log('file deleted successfully');
      })
    }
  })
}

async function main() {
  if (file) {
    await rmFile(file)
  } else {
    console.log('file name??');
  }
}

main()
