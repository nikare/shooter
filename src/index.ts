import Phaser from 'phaser';

import { BootScene, PreloadScene, StartScene } from './scenes';

new (class Game extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            parent: 'container',
            width: 1280,
            height: 720,
            scene: [BootScene, PreloadScene, StartScene],
        });
    }
})();
