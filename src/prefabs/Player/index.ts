import { config } from '~/config';
import { atlases } from '~/assets';

export class Player extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene) {
        super(
            scene,
            150,
            config.height / 2,
            atlases.dragon.sprite,
            atlases.dragon.frames[0].filename,
        );

        this.scene.add.existing(this);
    }
}
