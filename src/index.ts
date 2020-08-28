import Phaser from 'phaser';

import { config } from './config';

new (class Game extends Phaser.Game {
    constructor() {
        super(config);
    }
})();
