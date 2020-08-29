import { NovakidGame } from '~/game';
import { SCENES } from '~/scenes';
import { atlases } from '~/assets';

export class PreloadScene extends Phaser.Scene {
    game: NovakidGame;

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
