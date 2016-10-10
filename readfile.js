"use strict";

require('./helper')
let fs = require('fs')
let path = require('path')
let {file} = require('yargs').argv

async function readFile(filename) {

  fs.stat (__dirname + '/' + filename, (err, stat) => {
    if (stat.isDirectory()) {
      console.log('can not read directory');
      return;
    } else {
      fs.readFile (__dirname + '/' + filename, function(err, data) {
        if (err) {
          return console.error(err);
        }
        console.log(data.toString());
      })
    }
  })
}

async function main() {
  if (file) {
    await readFile(file)
  } else {
    console.log('file name??');
  }
}

main()
