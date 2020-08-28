import { images } from '~/assets';
import { SCENES } from '..';

export class BootScene extends Phaser.Scene {
    constructor() {
        super(SCENES.BOOT);
    }

    preload() {
        this.load.image(images.background, images.background);
    }

    create() {
        this.scene.start(SCENES.PRELOAD);
    }
}
