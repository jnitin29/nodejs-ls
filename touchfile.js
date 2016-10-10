"use strict";

require('./helper')
let fs = require('fs')
let path = require('path')
let {file} = require('yargs').argv

async function touchFile(filename) {

  fs.stat (__dirname + '/' + filename, (err, stat) => {
    if (stat.isDirectory()) {
      console.log('can not touch/create directory thru touch command')
      return
    } else {
      fs.open (__dirname + '/' + filename, 'wx', function(err, fd) {
        if (err) {
          console.log('error while creating file' + err)
        }
        console.log('file created successfully')
        fs.close(fd, function (err) {
          if (err) {
            console.log('error while closing file' + err)
          }
        })
      })
    }
  })
}

async function main() {
  if (file) {
    await touchFile(file)
  } else {
    console.log('file name??');
  }
}

main()
