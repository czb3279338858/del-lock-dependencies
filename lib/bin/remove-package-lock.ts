#!/usr/bin/env node
import delLockDependencies from '../index'
const program = require('commander')
program.option('-t, --type <char>', 'The type of the lock file can be npm.', 'npm')
program.option('-d, --dependencies <char...>', 'The name of the dependencies that needs to be deleted can be spelled out with multiple spaces.')

program.parse();

const opts = program.opts()


delLockDependencies(opts)