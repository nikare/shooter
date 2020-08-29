import { images } from '~/assets';
import { SCENES } from '~/scenes';

export class BootScene extends Phaser.Scene {
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
