import { NovakidGame } from '~/game';
import { SCENES } from '~/scenes';
import { images } from '~/assets';

export class StartScene extends Phaser.Scene {
    game: NovakidGame;

    constructor() {
        super(SCENES.START);
    }

    create() {
        Object.values(images).forEach((image) => {
            this.add.sprite(0, 0, image).setOrigin(0);
        });

        this.createText();
        this.setEvents();
    }

    createText() {
        const fonts = {
            fontSize: '40px',
            fontFamily: this.game.FONTS.CurseCasual,
            fill: '#fff',
        };

        this.add.text(this.game.width / 2, 500, 'Tap to start', fonts).setOrigin(0.5);
    }

    setEvents() {
        this.input.on('pointerdown', () => {
            this.scene.start(SCENES.GAME);
        });
    }
}
