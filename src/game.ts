import Phaser from 'phaser';

import { BootScene, PreloadScene, StartScene, GameScene } from '~/scenes';

export class NovakidGame extends Phaser.Game {
    FONTS = {
        CurseCasual: 'CurseCasual',
    };

    width: number;
    height: number;

    constructor() {
        super({
            type: Phaser.AUTO,
            parent: 'container',
            width: 1280,
            height: 720,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false,
                },
            },
            scene: [BootScene, PreloadScene, StartScene, GameScene],
        });

        this.width = +this.config.width;
        this.height = +this.config.height;
    }
}

new NovakidGame();
