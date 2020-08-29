import { atlases } from '~/assets';
import { SCENES } from '~/scenes';

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super(SCENES.PRELOAD);
    }

    preload() {
        Object.values(atlases).forEach((atlas) => {
            const { sprite, ...frames } = atlas;
            this.load.atlas(sprite, sprite, frames);
        });
    }

    create() {
        this.scene.start(SCENES.START);
    }
}
