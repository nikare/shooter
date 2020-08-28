import { images } from '~/assets';
import { config } from '~/config';
import { SCENES } from '..';

export class StartScene extends Phaser.Scene {
    constructor() {
        super(SCENES.START);
    }

    create() {
        this.createBackground();
        this.createText();
        this.setEvents();
    }

    createBackground() {
        this.add.sprite(0, 0, images.background).setOrigin(0);
    }

    createText() {
        this.add
            .text(config.width / 2, 500, 'Tap to start', {
                font: '40px CurseCasual',
                fill: '#fff',
            })
            .setOrigin(0.5);
    }

    setEvents() {
        this.input.on('pointerdown', () => {
            this.scene.start(SCENES.GAME);
        });
    }
}
