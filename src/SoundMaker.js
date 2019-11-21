import openSound from './media/open.mp3';
import failSound from './media/fail.mp3';

function SoundMaker(success) {
    const audio = new Audio();

    audio.src = success ? openSound : failSound;
    audio.autoplay = false;
    audio.loop = false;
    audio.play();
}

export default SoundMaker;