#!/usr/bin/env node

import { execSync } from 'child_process';

module.exports = function() {
    const msg = '\nhowdy, npm package! ♥♥♥'
    console.log(msg)
    execSync(`notify-send -i info '${msg}' -t 4000`)
    return;
};
