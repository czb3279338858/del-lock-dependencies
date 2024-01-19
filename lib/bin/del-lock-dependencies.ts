#!/usr/bin/env node
import delLockDependencies from '../index'
const program = require('commander')
program.option('-d, --dependencies <char...>', 'The name of the dependencies that needs to be deleted can be spelled out with multiple spaces.')

program.parse();

const opts = program.opts()


delLockDependencies(opts)