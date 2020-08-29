import { images, atlases } from '~/assets';
import { SCENES } from '~/scenes';
import { config } from '~/config';

export class GameScene extends Phaser.Scene {
    constructor() {
        super(SCENES.GAME);
    }

    create() {
        this.createImages();
        this.createDragon();
    }

    createImages() {
        Object.values(images).forEach((image) => {
            this.add.sprite(0, 0, image).setOrigin(0);
        });
    }

    createDragon() {
        const { dragon } = atlases;
        this.add.sprite(150, config.height / 2, dragon.sprite, dragon.frames[0].filename);
    }
}
