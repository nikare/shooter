import { NovakidGame } from '~/game';
import { SCENES } from '~/scenes';
import { images } from '~/assets';

export class BootScene extends Phaser.Scene {
    game: NovakidGame;

    constructor() {
        super(SCENES.BOOT);
    }

    preload() {
        Object.values(images).forEach((image) => {
            this.load.image(image, image);
        });
    }

    create() {
        this.scene.start(SCENES.PRELOAD);
    }
}
