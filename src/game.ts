import Phaser from 'phaser';

import { BootScene, PreloadScene, StartScene, GameScene } from '~/scenes';

const config: Phaser.Types.Core.GameConfig = {
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
};

export class NovakidGame extends Phaser.Game {
    FONTS = {
        CurseCasual: 'CurseCasual',
    };

    width: number;
    height: number;

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);

        this.width = +this.config.width;
        this.height = +this.config.height;
    }
}

new NovakidGame(config);
