import { GameScene } from '~/scenes';
import { atlases } from '~/assets';
import { NovakidGame } from '~/game';

const { dragon } = atlases;

export class Player extends Phaser.GameObjects.Sprite {
    velocity: number;
    body: Phaser.Physics.Arcade.Body;

    constructor(public scene: GameScene, public game: NovakidGame) {
        super(scene, 150, game.height / 2, dragon.sprite, dragon.frames[0].filename);
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.enable = true;
        this.velocity = 500;
    }

    move() {
        const { left, right, down, up } = this.scene.cursors;

        this.body.setVelocity(0);

        if (left && left.isDown) {
            this.body.setVelocityX(-this.velocity);
        } else if (right && right.isDown) {
            this.body.setVelocityX(this.velocity);
        }

        if (up && up.isDown) {
            this.body.setVelocityY(-this.velocity);
        } else if (down && down.isDown) {
            this.body.setVelocityY(this.velocity);
        }
    }
}
