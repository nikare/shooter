import { SCENES } from '..';

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super(SCENES.PRELOAD);
    }

    create() {
        this.scene.start(SCENES.START);
    }
}
