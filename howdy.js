#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs'
import path from 'path';

const msg='\nhowdy, npm package! ♥♥♥'
console.log(msg)
execSync(`notify-send -i info '${msg}' -t 4000`)
