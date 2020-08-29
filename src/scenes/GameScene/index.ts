import { NovakidGame } from '~/game';
import { SCENES } from '~/scenes';
import { Player } from '~/prefabs';
import { images } from '~/assets';

export class GameScene extends Phaser.Scene {
    game: NovakidGame;
    player: Player;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super(SCENES.GAME);
    }

    create() {
        this.createImages();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = new Player(this, this.game);
    }

    update() {
        this.player.move();
    }

    createImages() {
        Object.values(images).forEach((image) => {
            this.add.sprite(0, 0, image).setOrigin(0);
        });
    }
}
