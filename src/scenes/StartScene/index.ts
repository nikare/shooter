import { images } from '~/assets';
import { config } from '~/config';
import { SCENES } from '~/scenes';
import { FONTS } from '~/enums';

export class StartScene extends Phaser.Scene {
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
            fontFamily: FONTS.CURSE_CASUAL,
            fill: '#fff',
        };
        this.add.text(config.width / 2, 500, 'Tap to start', fonts).setOrigin(0.5);
    }

    setEvents() {
        this.input.on('pointerdown', () => {
            this.scene.start(SCENES.GAME);
        });
    }
}
