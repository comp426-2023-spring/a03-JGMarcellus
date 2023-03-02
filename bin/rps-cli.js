#!/usr/bin/env node

import { rps } from '../lib/rpsls.js';

import minimist from 'minimist';

const args = minimist(process. argv.slice(2));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if (args.h || args.help) {
	console.log(`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
		  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
		  e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}

if (args.r || args.rules) {
	console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`);
}

const valid = ["rock", "paper", "scissors"];

if (args._.length == 0) {
	var result = rps();
}
else if (args._.length == 1 && valid.includes(args._[0].toLowerCase())) {
	var result = rps(args._[0].toLowerCase());
}
else {
	console.error(args._[0] + " is out of range.");
}
