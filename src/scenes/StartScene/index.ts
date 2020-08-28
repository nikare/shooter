import { images } from '~/assets';
import { SCENES } from '..';

export class StartScene extends Phaser.Scene {
    constructor() {
        super(SCENES.START);
    }

    create() {
        this.add.sprite(0, 0, images.background).setOrigin(0);
    }
}
