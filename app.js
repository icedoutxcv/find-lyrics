#!/usr/bin/env node

const program = require('commander');
const {song} = require('./logic');

program
    .arguments("<'author_and_title'>")
    .action(name => song(name))

program.parse(process.argv);