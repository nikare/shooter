import { GameScene } from '~/scenes';
import { atlases } from '~/assets';
import { NovakidGame } from '~/game';

const { enemy } = atlases;

export class Enemy extends Phaser.GameObjects.Sprite {
    velocity: number;
    body: Phaser.Physics.Arcade.Body;

    constructor(public scene: GameScene, public game: NovakidGame) {
        super(scene, game.width - 150, game.height / 2, enemy.sprite, enemy.frames[0].filename);
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.enable = true;
        this.velocity = -250;
    }

    move() {
        this.body.setVelocityX(this.velocity);
    }
}
