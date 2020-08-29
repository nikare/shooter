import { BootScene, PreloadScene, StartScene, GameScene } from './scenes';

interface IConfig {
    width: number;
    height: number;
}

export const config: Phaser.Types.Core.GameConfig & IConfig = {
    type: Phaser.AUTO,
    parent: 'container',
    width: 1280,
    height: 720,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
};
