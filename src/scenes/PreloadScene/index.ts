import { SCENES } from '..';

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super(SCENES.PRELOAD);
    }

    preload() {}

    create() {
        this.scene.start(SCENES.START);
    }
}
