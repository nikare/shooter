import { SCENES } from '~/scenes';
import { images } from '~/assets';
import { Player } from '~/prefabs';

export class GameScene extends Phaser.Scene {
    player: Player;

    constructor() {
        super(SCENES.GAME);
    }

    create() {
        this.createImages();
        this.player = new Player(this);
    }

    createImages() {
        Object.values(images).forEach((image) => {
            this.add.sprite(0, 0, image).setOrigin(0);
        });
    }
}
