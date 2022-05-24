#!/usr/bin/env node

import * as readline from 'node:readline'
import { isNumber } from 'node:util';

const min = 0;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min)) + min;

function check(number) {
    if (number == randomNumber) {
        console.log(`Отгадано число ${number}`);
        
        process.exit(0);
    }

    (number < randomNumber) ? console.log("Меньше") : console.log("Больше");
}

console.log("Загадано число в диапазоне от 0 до 100");

const input = readline.createInterface( process.stdin );

input.on('line', (data) => check(data));
