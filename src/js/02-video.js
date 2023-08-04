import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector(`iframe`);
const player = new Player(`vimeo-player`);

const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) player.setCurrentTime(saveTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
