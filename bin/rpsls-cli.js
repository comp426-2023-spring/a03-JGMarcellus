#!/usr/bin/env node

import { rpsls } from '../lib/rpsls.js';

import minimist from 'minimist';

const args = minimist(process. argv.slice(2));

if (args.h || args.help) {
	console.log(`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
}

if (args.r || args.rules) {
	console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`);
}

const valid = ["rock", "paper", "scissors", "lizard", "spock"];

if (args._.length == 0) {
	var result = rps();
}

else if (args._.length == 1 && valid.includes(args._[0].toLowerCase())) {
	var result = rps(args._[0].toLowerCase());
}
else {
	console.error(args._[0] + " is out of range.");
}
