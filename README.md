# Parallel Asynchronous Recursive `ls`

A parallelized recursive implementation of `ls` using `fs.readdir`

Time spent: 6 hours

Completed:

* [x] Required: ls
* [x] Required: rm
* [x] Required: cat
* [x] Required: mkdir
* [x] Required: touch
* [x] Required: ln
* [] Required: echo
* [] Required: grep


Walkthrough Gif:

![Video Walkthrough](ls-walkthru.gif)


## How To Use:

### Setup

1. Follow the [Node.js Setup Guide](http://guides.codepath.com/nodejs/Setup)
1. Clone the repo:

    ```bash
    git clone https://github.com/jnitin29/nodejs-ls/
    ```

### Development

1. Place all your code in `ls.js`'s `async function ls()`:

    ```node
    require('./helper')

    async function ls() {
      // Use 'await' inside 'async function's
      console.log('Executing ls function...')

      // Your implementation here
    }

    ls()
    ```
1. Run:

    ```bash
    babel-node ./ls.js
    ```
