import { NovakidGame } from '~/game';
import { SCENES } from '~/scenes';
import { Player, Enemy } from '~/prefabs';
import { images } from '~/assets';

export class GameScene extends Phaser.Scene {
    game: NovakidGame;
    player: Player;
    enemy: Enemy;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    background: Phaser.GameObjects.TileSprite;

    constructor() {
        super(SCENES.GAME);
    }

    init() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create() {
        this.createBackground();
        this.player = new Player(this, this.game);
        this.enemy = new Enemy(this, this.game);
    }

    update() {
        this.player.move();
        this.enemy.move();
        this.background.tilePositionX += 1;
    }

    createBackground() {
        const { width, height } = this.game;
        this.background = this.add.tileSprite(0, 0, width, height, images.background).setOrigin(0);
    }
}
